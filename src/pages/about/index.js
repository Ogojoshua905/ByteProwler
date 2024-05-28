import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
import Avatar from "@/components/Avatar";
import Bulb from "@/components/Bulb";
import { useState } from "react";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'
import CountUp from "react-countup";

export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Developer',
        icons: [
          { id: 'html', icon: <FaHtml5 className='text-[#E34F26]' /> },
          { id: 'css', icon: <FaCss3 className=" text-[#38BDF8]" /> },
          { id: 'js', icon: <FaJs className=" text-[#F7DF1E]" /> },
          { id: 'react', icon: <FaReact className=" text-[#61DAFB]" /> },
          { id: 'nextjs', icon: <SiNextdotjs /> },
          { id: 'framer', icon: <SiFramer className=" text-[#0055FF]" /> },
        ],
      },
      {
        title: 'Mobile Engineer'
      }
      // {
      //   title: 'UI/UX Design',
      //   icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      // },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Webby Awards - Honoree',
  //       stage: '2011 - 2012',
  //     },
  //     {
  //       title: 'Adobe Design Achievement Awards - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      // {
      //   title: 'UX/UI Designer - XYZ Company',
      //   stage: '2012 - 2023',
      // },
      {
        title: 'Frontend Developer - Freelance',
        stage: '2024 - current',
      },
      // {
      //   title: 'Intern - DEF Corporation',
      //   stage: '2008 - 2010',
      // },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Mobile Engineer - Samford Dc Phone Hub',
        stage: '2023',
      },
      {
        title: 'Web Development - Univelcity, Yaba, Lagos',
        stage: '2024',
      },
      // {
      //   title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
      //   stage: '2006',
      // },
    ],
  },
];

export default function Index() {

  const [index, setIndex] = useState(0);
  console.log(index)
  
  return (
    <div className=" h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className=" container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className=" flex-1 flex flex-col justify-center">
          <motion.h2 
           variants={fadeIn('right', 0.2)}
           initial='hidden'
           animate='show'
           exit='hidden'
          className="h2">Creative <span className=" text-accent uppercase">Coding </span>brings ideas to <span className=" text-accent uppercase">Life</span></motion.h2>
          <motion.p
           variants={fadeIn('right', 0.4)}
           initial='hidden'
           animate='show'
           exit='hidden'
          className=" max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">3 Months ago, i began my Journey as a Frontend Developer, Since Then I&apos;ve Been Honing My javascript skills, doing all kinds of Project, collaborating with classmates on Projects</motion.p>
          <motion.div
          variants={fadeIn('right', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
            <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={5} end={1} duration={5}/> +
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Months Of experience</div>
            </div>
            {/* clients */}
            <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5}/> +
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
            </div>
            {/* projects */}
            <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2} duration={5}/> +
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">FInished Projects</div>
            </div>
            {/* awards */}
            <div className=" relative flex-1">
              <div className=" text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={30} end={6} duration={6}/> 
              </div>
              <div className=" text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Technologies Used</div>
            </div>
            </div>
          </motion.div>
          </div>

        <motion.div
        variants={fadeIn('right', 0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {
            aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}>
              {item.title}
              </div>
            )
          })}
        </div>

        <div className= " py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex) =>{
            return(
              <div key={itemIndex} className=" flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                  <div className=" font-light mb-2 md:mb-0">{item.title}</div>
                  <div className=" hidden md:flex">-</div>
                  <div  >{item.stage}</div>
                  <div className=" flex gap-x-4">
                  {item.icons?.map((icon) => {
                    return <div key={icon.id} className=" text-2xl text-white">
                        {icon.icon}
                      </div>
                  })}
              </div>
                  </div>
            )
          })}
        </div>
        </motion.div>
      </div>
      <Bulb />
    </div>
  )
}




