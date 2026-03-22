import axios from "axios";
import userModel from "../models/userModel.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.user?.id;

    const user = await userModel.findById(userId);

    if (!userId || !user || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    if (!process.env.HF_TOKEN) {
      return res.json({
        success: false,
        message:
          "HF_TOKEN is missing in server/.env. Add a free Hugging Face token to enable image generation.",
      });
    }

    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/stabilityai/stable-diffusion-xl-base-1.0",
      {
        inputs: prompt.trim(),
        parameters: {
          width: 1024,
          height: 1024,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          Accept: "image/png",
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
        validateStatus: () => true,
      }
    );

    const contentType = response.headers["content-type"] || "";
    if (response.status >= 400 || !contentType.startsWith("image/")) {
      const errorText = Buffer.from(response.data).toString("utf8");
      throw new Error(
        `Image provider failed (${response.status}): ${errorText || "Unknown error"}`
      );
    }

    const { data } = response;

    const imageMimeType = contentType.split(";")[0] || "image/png";
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:${imageMimeType};base64,${base64Image}`;

    const updatedUser = await userModel.findByIdAndUpdate(
      user._id,
      { creditBalance: user.creditBalance - 1 },
      { new: true }
    );

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: updatedUser.creditBalance,
      resultImage,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

