'use client'
import React from 'react'
import { motion } from 'framer-motion'
import HeadinWithButton from '../../../components/frequentUsed/HeadinWithButton'
import ImageWithTittle from '../../../components/frequentUsed/ImageWithTittle'

function Page() {
  const images = [
    { id: 1, src: 'data:image/jpeg;base64,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', title: 'LinkedIn - Introduces Ai Job Search Tool' },
    { id: 2, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'LinkedIn Profile Optimization' },
    { id: 3, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'Inside LinkedIn: How the Resume Site Became a Place for Millions to Connect' },
    { id: 4, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'LinkedIn Content Strategy' },
    { id: 5, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'LinkedIn Lead Generation' },
    { id: 6, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'LinkedIn Ad Management' },
    { id: 7, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'LinkedIn Analytics & Reporting' },
    { id: 8, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'Inside LinkedIn: How the Resume Site Became a Place for Millions to Connect' },
    { id: 9, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'LinkedIn Profile Optimization' },
  ]

  

  return (
    <div className="flex flex-col items-start justify-center text-white py-10 space-y-10">
      {/* Heading with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{  ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full flex justify-start"
      >
        <HeadinWithButton
          heading="Blog: Growth Hacking and LinkedIn Tips"
          paragraph="Discover our latest articles, resources, and tips for expanding your professional network. Boost your growth with our growth hacking advice"
        />
      </motion.div>

      {/* Buttons Row (Centered Automatically) */}
     

      {/* Image Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full"
      >
        <ImageWithTittle images={images} />
      </motion.div>
    </div>
  )
}

export default Page
