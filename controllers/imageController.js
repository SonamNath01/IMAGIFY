import userModel from "../models/userModel";
import FormData from 'form-data'
import axios from"axios"
export const generateImage =async(req, res)=>{
    try{
        const{userId,prompt}=req.body
        const user =await userModel.findById(userId)
    
    if(!user||!prompt){
        return res.json({success:false ,messgae:'Missing Details'})

    }
    if(user.creditBalance ===0||userModel.CreditBalance<0){
        return res.json({success:false,message:'No Credit Balance',creditBalance:user.CreditBalance})
    }
    const formData = new FormData()
    formData.append('prompt',prompt)
    await axios.post('https://clipdrop-api.co/text-to-image/v1',formData,{

        headers: {
            'x-api-key': process.envCl,
          },
    })

}catch(error){
    console.log(error.messgae)
    res.json({success:false,message:error.message})
}
}

