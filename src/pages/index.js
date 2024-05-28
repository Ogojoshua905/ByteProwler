import Image from "next/image"
import { useRouter } from "next/router"
import { easeInOut, motion } from "framer-motion"
import ParticlesContainer from "@/components/ParticlesContainer"
import Bulb from "@/components/Bulb"
import Avatar from "@/components/Avatar"
import ProjectsBtn from "@/components/ProjectBtn"
import {fadeIn} from '../variants'

export default function Home() {
  return (
    <div className=" bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className=" text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
          variants={fadeIn('down',0.2)}
          initial='hidden'
          animate="show"
          exit="hidden"
          className="h1 my-4">Where Code meets<br /><span className="text-accent uppercase">Creativity</span></motion.h1>
          <motion.p 
          variants={fadeIn('down',0.3)}
          initial='hidden'
          animate="show"
          exit="hidden"
          className=" max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-16">Welcome to my portfolio! I&apos;m a passionate Frontend Web Developer on a journey to become a Fullstack Developer. 
          With a strong foundation in creating dynamic and responsive user-friendly interfaces, I&apos;m always looking for new challenges and opportunities to grow , I thrive on bringing creative ideas 
          to life through code.</motion.p>
          <div className="flex justify-center xl:hidden relative"><ProjectsBtn /></div>
          <motion.div 
          variants={fadeIn('down',0.4)}
          initial='hidden'
          animate="show"
          exit="hidden"
           className=" hidden xl:flex right-10 xl:mb-5"><ProjectsBtn /></motion.div>
        </div>
        </div>
      <div className=" w-[1200px] h-full absolute right-0 bottom-0">
        <div className=" bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          
          <div><ParticlesContainer /></div>

          {/* <motion.div 
           variants={fadeIn('up', 0.5)}
           initial='hidden'
           animate="show"
           exit="hidden"
           transition={{duration: 1, ease: 'easeInOut'}}
          className=" w-full h-full max-w-[800px] max-h-[850px] absolute -bottom-32 lg-bottom-0 lg:right-[8%]">
            <Avatar />
          </motion.div> */}
        </div>
      </div>
    </div>
  )
}
