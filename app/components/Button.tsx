'use client'

import React from 'react'
import toast from 'react-hot-toast'

const Button = () => {
  const url = 'https://cloud.xavvy.workers.dev/0:/Files/CV/AmbareeshCV.pdf'
  const handleDownload = () => {
    toast.success('File incoming shortly!')
  }

  return (
    <a
      href={url}
      className='p-2 my-5 transition duration-500 rounded-md bg-verdant-blue hover:scale-105 visited:bg-verdant-green'
      onClick={handleDownload}
    >
      Download CV
    </a>
  )
}

export default Button
