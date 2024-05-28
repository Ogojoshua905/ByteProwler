// icons
import {
    RxPencil2,
    RxDesktop,
    RxReader,
    RxRocket,
    RxArrowTopRight,
    RxGlobe,
    RxHome,
    RxGear,
    RxLaptop,
  } from "react-icons/rx";
  import { AiOutlineMobile } from "react-icons/ai";
  import {BsTools, BsLaptop } from "react-icons/bs"
import {IoMdColorPalette, IoMdSearch} from 'react-icons/io'
  import { Swiper, SwiperSlide } from "swiper/react";
  import 'swiper/css'
  import 'swiper/css/free-mode'
  import 'swiper/css/pagination'
  import { motion } from "framer-motion";
  import {FreeMode, Pagination} from 'swiper'
import { FaAccessibleIcon, FaLaptop } from "react-icons/fa";
  
  
  // data
  export const serviceData = [
    {
      icon: <RxGlobe />,
      title: 'Website Design and Development',
      description: 'Create stunning, responsive websites that look great on any device, tailored to meet your business needs.',
    },
    {
      icon: <IoMdColorPalette />,
      title: 'UI/UX Design',
      description: 'Design intuitive and engaging user interfaces that provide an exceptional user experience through thoughtful research and testing.',
    },
    {
      icon: <RxDesktop />,
      title: 'Web App Development',
      description: 'Build dynamic and interactive web applications that offer seamless performance and integrate smoothly with backend services.',
    },
    {
      icon: <RxReader />,
      title: 'Copywriting',
      description: 'Craft compelling and persuasive content that engages your audience, enhances your brand voice, and drives conversions.',
    },
    {
      icon: <IoMdSearch />,
      title: 'SEO Optimization',
      description: 'Improve your website’s search engine rankings through effective keyword research, on-page and technical SEO, and quality content creation.',
    },
    {
      icon: <RxRocket />,
      title: 'Performance Optimization',
      description: 'Enhance website speed and performance through comprehensive audits and optimizations to ensure fast loading times and smooth user experience.',
    },
    {
      icon: <AiOutlineMobile />,
      title: 'Responsive Design',
      description: 'Ensure your website is fully responsive and mobile-friendly, providing an optimal viewing experience across all devices.',
    },
    {
      icon: <RxHome />,
      title: 'Landing Page Design',
      description: 'Develop high-converting landing pages optimized for marketing campaigns to drive user engagement and conversions.',
    },
    {
      icon: <RxPencil2 />,
      title: 'HTML/CSS Development',
      description: 'Convert design mockups into clean, efficient HTML and CSS code, ensuring your website is visually appealing and functional.',
    },
    {
      icon: <RxGear />,
      title: 'JavaScript Development',
      description: 'Convert design mockups into clean, efficient HTML and CSS code, ensuring your website is visually appealing and functional.',
    },
    {
      icon: <BsTools />,
      title: 'Website Maintenance',
      description: 'Provide ongoing website maintenance and support, including regular updates, security checks, and bug fixes to keep your site running smoothly.',
    },
    {
      icon: <FaAccessibleIcon />,
      title: 'Accessibility Optimization',
      description: 'Ensure your website meets accessibility standards, making it usable for everyone, including people with disabilities. ',
    },
    
    {
      icon: <RxLaptop />,
      title: 'Freelance',
      description: 'Flexible and professional freelance web development services tailored to meet the specific needs and timelines of your projects.',
    },
  ];
  
  export default function ServiceSlider() {
    return (
      <Swiper breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween: 15
        },
  
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
  
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={{FreeMode, Pagination}}
      className=" h-[240px] sm:h-[340px]">
        {
          serviceData.map((item, index) =>{
            return (
              <SwiperSlide key={index}>
                <div className=" bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                  <div className=" text-4xl text-accent">{item.icon}</div>
                  <div>
                    <div className="mb-2 text-lg">{item.title}</div>
                    <p className=" max-w-[350px] leading-normal">{item.description}</p>
                  </div>
                  <div className=" text-3xl">
                    <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent  transition-all duration-300" />
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    )
  }
  