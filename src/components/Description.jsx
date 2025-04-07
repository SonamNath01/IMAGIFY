import React from 'react';
import sample_img_1 from '../assets/sample_img_1.png';
import { motion } from 'framer-motion';
// adjust the path and filename


const Description = () => {
  return (
    <motion.div
      initial={{ opacity:0.2,y:100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
     className='flex flex-col items-center justify-center text-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>
      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
      <img src={sample_img_1} alt="Sample AI generated" className='w-80 xl:w-96 rounded-lg' />


        <div className='max-w-3xl text-left text-gray-700 space-y-4'>
          <h2 className='text-3xl font-medium max-w-1g mb-4'>Introducing the AI-powered Text to Image Generator</h2>
          <p className='text-gray-600'>
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or
            unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it,
            describe it, and watch it come to life instantly.
            </p>
          <p>
            Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From
            product visuals to character designs and portraits, even concepts that don't yet exist can be visualized
            effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
