'use client'
import React from 'react'
import HeadinWithButton from '../../../components/frequentUsed/HeadinWithButton'
import GetAccount from '../../../components/frequentUsed/GetAccount'
import { motion } from 'framer-motion'
import AutomationRisk from '../../../components/automationLinkedInn/AutomationRisk'
import Faqs from '../../../components/automationLinkedInn/Faqs'

function page() {
  const accountData = [
    { id: 1, number: '01', name: 'Schedule a call', description: 'Book a call to discuss your requirements and discover the ideal solution tailored just for you.' },
    { id: 2, number: '02', name: 'Secure online payment', description: 'We’ll create a customized invoice for your convenience and support you throughout the transaction.' },
    { id: 3, number: '03', name: 'Account integration', description: 'We’ll assist you in seamlessly connecting your accounts and offer you exclusive terms.' },
    { id: 4, number: '04', name: 'Ready to go!', description: 'Once everything is set up, you’ll have full access to your accounts for all your needs and objectives.' },
    { id: 5, number: '05', name: 'Ongoing Support', description: 'Our team is here to provide continuous support and assistance to ensure your accounts remain in optimal condition.' },
  ]
  const vectors = [
    {
      id: 1, img: '/assets/Vector1.svg',
      name: 'Fonctionnalities',
      description: 'A Linkedin automation tool must today offer you the automation of all possible Linkedin actions: from scraping through sending messages to profile visits.'
    },
    {
      id: 2, img: '/assets/Vector2.svg',
      name: 'Safety',
      description: 'The safety of your LinkedIn account is paramount. Choose a tool that prioritizes security and minimizes the risk of account suspension.'
    },
    {
      id: 3, img: '/assets/Vector3.svg',
      name: 'User Experience',
      description: 'An intuitive user-friendly interface is essential for efficient management of your LinkedIn automation campaigns.'
    },

  ]
  const faqsData = [
    {
      question: 'Sales Navigator research to build good prospecting files',
      answer:
        'With sophisticated filters to target prospects exactly and strategically, Sales Navigator—a potent LinkedIn automation tool—changes sales prospecting techniques. This platform integrates particular parameters such sector, size or location for a focused list of pertinent possibilities, therefore optimizing the search for profiles and companies. It encourages the distribution of customized communications, therefore enhancing possibilities for engagement and conversion. Advanced search features of Sales Navigator also help to find new contacts and expand professional networks on LinkedIn, which is absolutely essential for raising exposure and producing more leads. Basically, any LinkedIn automation plan aiming at efficient prospecting and focused social marketing depends on Sales Navigator as a necessary tool.'
    },
    {
      question: 'A good CRM to manage your prospects',
      answer:
        'With sophisticated filters to target prospects exactly and strategically, Sales Navigator—a potent LinkedIn automation tool—changes sales prospecting techniques. This platform integrates particular parameters such sector, size or location for a focused list of pertinent possibilities, therefore optimizing the search for profiles and companies. It encourages the distribution of customized communications, therefore enhancing possibilities for engagement and conversion. Advanced search features of Sales Navigator also help to find new contacts and expand professional networks on LinkedIn, which is absolutely essential for raising exposure and producing more leads. Basically, any LinkedIn automation plan aiming at efficient prospecting and focused social marketing depends on Sales Navigator as a necessary tool. '
    },
    {
      question: 'A good message sequence to convert your prospects',
      answer:
        'With sophisticated filters to target prospects exactly and strategically, Sales Navigator—a potent LinkedIn automation tool—changes sales prospecting techniques. This platform integrates particular parameters such sector, size or location for a focused list of pertinent possibilities, therefore optimizing the search for profiles and companies. It encourages the distribution of customized communications, therefore enhancing possibilities for engagement and conversion. Advanced search features of Sales Navigator also help to find new contacts and expand professional networks on LinkedIn, which is absolutely essential for raising exposure and producing more leads. Basically, any LinkedIn automation plan aiming at efficient prospecting and focused social marketing depends on Sales Navigator as a necessary tool.'
    }
  ]
  return (
    <div className="flex flex-col gap-[20px] items-center justify-center text-center px-4">


      <HeadinWithButton
        heading="Maximize Your Lead Generation with LinkedIn Automation: Proven Tools to Boost Your KPIs"
        paragraph="LinkedIn automation is a game-changer for businesses aiming to generate qualified leads swiftly and affordably. At TopUzer, we provide insights into the best tools and strategies to enhance your prospecting efforts."
        buttonText="Order Unlocking"
      />
      <GetAccount accounts={accountData} heading="The challenges of prospecting on LinkedIn" />
      <AutomationRisk />
      {/* <HeadinWithButton
           heading="How to choose the right tools LinkedIn automation?"
           paragraph="There is a very wide variety of tools for Linkedin automation. Each tool has its characteristics and its advantages but there are key points to check before choosing one."
          
         /> */}
      <div className='flex flex-col gap-6 items-center justify-center mt-10 mb-20'>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="font-inter font-medium text-[32px] sm:text-[40px] lg:text-[48px]
                            leading-[130%] text-gradient-white text-center max-w-[814px] "
        >
          How to choose the right tools LinkedIn automation?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-inter font-normal text-[16px] sm:text-[18px] text-[#B9B9B9]
                                    leading-[120%] text-center max-w-[900px]"
        >
          There is a very wide variety of tools for Linkedin automation. Each tool has its characteristics and its advantages but there are key points to check before choosing one.
        </motion.p>

        <div className="flex w-full items-center justify-center">
          <div className="w-full">
            <div
              className="
          flex flex-col lg:flex-row 
          flex-wrap lg:flex-nowrap
          gap-6 px-4 py-6 
          justify-center items-center 
          w-full lg:w-[1200px]
        "
            >
              {vectors.map((vector) => (
                <motion.div
                  key={vector.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.8, delay: vector.id * 0.2 }}
                  className="
              w-full sm:w-[400px] lg:w-[300px]
              flex flex-col gap-6 
              items-center justify-center 
              rounded-xl p-6 text-center
            "
                >
                  <img
                    src={vector.img}
                    alt={vector.name}
                    className="w-12 h-12 object-contain"
                  />
                  <h2 className="font-inter text-[20px] leading-[120%] text-white">
                    {vector.name}
                  </h2>
                  <p className="font-inter font-normal text-[16px] leading-[150%] text-[#A2A1A1]">
                    {vector.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Faqs
        heading="Frequently Asked Questions"
        faqs={faqsData}
        autoOpenFirst={true}  // Optional: defaults to true
        showBadge={true}      // Optional: defaults to false
        badgeText="FAQ's"     // Optional: customize badge text
      />

      <HeadinWithButton
        heading="Ready to supercharge your LinkedIn marketing?"
        paragraph="Get in touch with TopUzer today and start driving more leads and sales. Our expert team is here to support you every step of the way, ensuring a smooth and successful execution of your LinkedIn outreach campaigns. Don’t wait to turn your LinkedIn profile into a growth engine. Contact us now, and let's achieve success together!"
        buttonText="Book a Meeting Now"
      />

    </div>
  )
}

export default page