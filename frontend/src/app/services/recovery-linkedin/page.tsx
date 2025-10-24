'use client'
import React from 'react'
import { motion } from 'framer-motion'
import HeadinWithButton from '../../../../components/frequentUsed/HeadinWithButton'
import GetAccount from '../../../../components/frequentUsed/GetAccount'
import Carosal from '../../../../components/frequentUsed/carosal'
import BoxProfile from '../../../../components/frequentUsed/BoxProfile'
function Page() {
  const accountData = [
    { id: 1, number: '01', name: 'Schedule a call', description: 'Book a call to discuss your requirements and discover the ideal solution tailored just for you.' },
    { id: 2, number: '02', name: 'Secure online payment', description: 'We’ll create a customized invoice for your convenience and support you throughout the transaction.' },
    { id: 3, number: '03', name: 'Account integration', description: 'We’ll assist you in seamlessly connecting your accounts and offer you exclusive terms.' },
    { id: 4, number: '04', name: 'Ready to go!', description: 'Once everything is set up, you’ll have full access to your accounts for all your needs and objectives.' },
    { id: 5, number: '05', name: 'Ongoing Support', description: 'Our team is here to provide continuous support and assistance to ensure your accounts remain in optimal condition.' },
  ]
  const testimonialsData = [
    {
      id: 1,
      name: 'Nayoka',
      city: 'San Franciscoy| USA',
      image: 'https://i.pravatar.cc/104?img=1',
      quote:
        'We arranged 40 meetings from LinkedIn during the first 2 months — this is really good for us. We have already closed 2 mobile app development deals.',
    },
    {
      id: 2,
      name: 'Arjun Patel',
      city: 'Toronto| Canada',
      image: 'https://i.pravatar.cc/104?img=1',
      quote:
        'TopUzer restored our suspended accounts in record time. The outreach campaigns are running smoothly again.',
    },
    {
      id: 3,
      name: 'Emily Zhang',
      city: 'London| UK',
      image: 'https://i.pravatar.cc/104?img=1',
      quote:
        'Excellent service and support! Our team’s LinkedIn performance improved drastically after restoration.',
    },
    {
      id: 4,
      name: 'Emily Zhang',
      city: 'London| UK',
      image: 'https://i.pravatar.cc/104?img=1',
      quote:
        'Excellent service and support! Our team’s LinkedIn performance improved drastically after restoration.',
    },
    {
      id: 5,
      name: 'Emily Zhang',
      city: 'London| UK',
      image: 'https://i.pravatar.cc/104?img=1',
      quote:
        'Excellent service and support! Our team’s LinkedIn performance improved drastically after restoration.',
    },
    {
      id: 6,
      name: 'Emily Zhang',
      city: 'London| UK',
      image: 'https://i.pravatar.cc/104?img=1',
      quote:
        'Excellent service and support! Our team’s LinkedIn performance improved drastically after restoration.',
    },
    {
      id: 7,
      name: 'Emily Zhang',
      city: 'London| UK',
      image: 'https://i.pravatar.cc/104?img=1',
      quote:
        'Excellent service and support! Our team’s LinkedIn performance improved drastically after restoration.',
    },
  ]


  return (
    <div className="flex flex-col gap-[100px] items-center justify-center text-center px-4">


      <HeadinWithButton
        heading="Unlock Your LinkedIn Profiles"
        paragraph="Is your LinkedIn account on hold? Don’t let a suspension stifle your networking potential. At TopUzer, we excel in reinstating suspended LinkedIn profiles, ensuring you regain full access swiftly and smoothly."
        buttonText="Order Unlocking"
      />


      <BoxProfile />
      <Carosal
        heading="Clients Whose Accounts We Have Restored"
        paragraph="We arranged 40 meetings from LinkedIn during the first 2 months..."
        testimonials={testimonialsData}
      />


      <GetAccount accounts={accountData} heading="How do we do this?" />


      <HeadinWithButton
        heading="Ready to supercharge your LinkedIn marketing?"
        paragraph="Get in touch with TopUzer today and start driving more leads and sales. Our expert team is here to support you every step of the way, ensuring a smooth and successful execution of your LinkedIn outreach campaigns. Don’t wait to turn your LinkedIn profile into a growth engine. Contact us now, and let's achieve success together!"
        buttonText="Book a Meeting Now"
      />
    </div>
  )
}

export default Page
