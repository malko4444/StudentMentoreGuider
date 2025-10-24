'use client'
import React from 'react'
import { motion } from 'framer-motion'
import HeadinWithButton from '../../../components/frequentUsed/HeadinWithButton'
import ImageWithTittle from '../../../components/frequentUsed/ImageWithTittle'

function page() {
    const images = [
    { id: 1, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s', title: 'The Ultimate Guide to LinkedIn Marketing' },
    { id: 2, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: '10 Growth Hacking Strategies for Startups' },
    { id: 3, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'How to Use LinkedIn for B2B Lead Generation' },
    { id: 4, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'Maximizing Your LinkedIn Profile for Networking' },
    { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s', title: 'The Power of LinkedIn Ads: A Comprehensive Guide' },
    
    { id: 7, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'LinkedIn Analytics: Measuring Your Success' },    
    { id: 8, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s', title: 'Inside LinkedIn: How the Resume Site Became a Place for Millions to Connect' },
    { id: 9, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFXMVsqeqstL0GCNxoVwhjfqmumLoghY4ywQ&s', title: 'LinkedIn Profile Optimization' },

    { id: 10, src: 'https://cdn.mos.cms.futurecdn.net/cuJ2nHdA2cLngX4bhsHsye.jpg', title: 'LinkedIn Content Strategy' },
  ]
  

  return (
    <div className="flex flex-col items-start justify-center text-white py-10 space-y-10">
      {/* Heading with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="w-full flex justify-start"
      >
        <HeadinWithButton
          heading="Our Marketing Automationand LinkedIn Guides"
          paragraph="Would you like to find out how to use TOPUZER? or automate Linkedin? Discover our videos and tutorials"
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

export default page