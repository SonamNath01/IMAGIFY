import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input.trim()) {
      const result = await generateImage(input);
      if (result) {
        setIsImageLoaded(true);
        setImage(result);
      }
    }

    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center justify-center min-h-[90vh] px-4"
    >
      <div className="relative w-72 h-72 rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
        <img
          src={image}
          alt="Generated"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            loading ? "opacity-40" : "opacity-100"
          }`}
        />

        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white/60 backdrop-blur-sm">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm font-medium text-gray-600">Generating...</p>
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <div
            className={`h-full bg-blue-500 transition-all duration-[8s] ease-linear ${
              loading ? "w-full" : "w-0"
            }`}
          />
        </div>
      </div>

      {!isImageLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 w-full max-w-lg"
        >
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-md focus-within:ring-2 focus-within:ring-blue-400 transition">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe what you want to generate..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 py-1"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white text-sm font-medium px-6 py-2 rounded-full transition-colors"
            >
              Generate
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">
            Be descriptive for better results
          </p>
        </motion.div>
      )}

      {isImageLoaded && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 mt-8"
        >
          <button
            type="button"
            onClick={() => setIsImageLoaded(false)}
            className="border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200"
          >
            Generate Another
          </button>
          <a
            href={image}
            download
            className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 flex items-center gap-1.5"
          >
            Download
          </a>
        </motion.div>
      )}
    </motion.form>
  );
};

export default Result;
