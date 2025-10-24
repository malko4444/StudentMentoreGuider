'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react'
import RealAccountsSection from '../../../../components/rentalAccounts/RealAccountsSection'
import GetAccount from '../../../../components/frequentUsed/GetAccount'
import AccountsSection from '../../../../components/rentalAccounts/Accounts';
import ButtonWithLogo from '../../../../components/frequentUsed/ButtonWithLogo';
import RentAccountForMarket from '../../../../components/frequentUsed/HeadinWithButton';
import HeadinWithButton from '../../../../components/frequentUsed/HeadinWithButton';


function page() {
  const logos = [
    { src: "/assets/gmail.svg", alt: "Logo 1" },
    { src: "/assets/telegram.svg", alt: "Logo 2" },
    { src: "/assets/whatsapp.svg", alt: "Logo 3" },
  ];
  const accountData = [
  { id: 1, number: '01', name: 'Schedule a call', description: 'Book a call to discuss your requirements and discover the ideal solution tailored just for you.' },
  { id: 2, number: '02', name: 'Secure online payment', description: 'We’ll create a customized invoice for your convenience and support you throughout the transaction.' },
  { id: 3, number: '03', name: 'Account integration', description: 'We’ll assist you in seamlessly connecting your accounts and offer you exclusive terms..' },
  { id: 4, number: '04', name: 'Ready to go!', description: 'Once everything is set up, you’ll have full access to your accounts for all your needs and objectives.' },
]
  return (
    <div className='flex flex-col justify-center items-center '>
      
      <HeadinWithButton
          heading="  Supercharge Your Lead Generation with Our Premium LinkedIn Accounts"
          paragraph=" Experience hassle-free, high-impact outreach with accounts that adhere to
          LinkedIn’s best practices and enhance your marketing strategies."
          buttonText="Book a Meeting Now"
        />

     
      <AccountsSection />
      <RealAccountsSection />
      <GetAccount accounts={accountData} heading='How do we do this?'/>
      <RentAccountForMarket
  heading="Rent a real LinkedIn account for your outreach marketing"
  buttonText='Book a Meeting Now'
 
/>




    </div>
  )
}

export default page