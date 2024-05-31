
import {
    FaQuoteLeft
    } from 'react-icons/fa'
    import Image from 'next/image';
    import { Swiper, SwiperSlide } from "swiper/react";
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import { motion } from "framer-motion";
    import {Pagination, Navigation} from 'swiper'
  // testimonial data
  export const testimonialSlider = [
    {
      image: '/t-avt-1.png',
      name: 'Anne Smith',
      position: 'Customer',
      message:
        'Anne provided a glowing review of our services, highlighting our commitment to quality and customer satisfaction. She appreciated the timely support and seamless experience.',
      rating: 5,
      date: '2023-01-15',
    },
    {
      image: '/t-avt-2.png',
      name: 'Jane Doe',
      position: 'Customer',
      message:
        'Jane was thrilled with the results of our collaboration. She mentioned that our team went above and beyond to meet her expectations, delivering exceptional value.',
      rating: 4,
      date: '2023-02-10',
    },
    {
      image: '/t-avt-3.png',
      name: 'John Doe',
      position: 'Customer',
      message:
        'John praised our professionalism and expertise. He noted that our innovative solutions significantly improved his business operations and efficiency.',
      rating: 5,
      date: '2023-03-05',
    },
  ];
  
    
    
    export default function TestimonialSlider() {
      return (
        <Swiper
        navigation={true }
        pagination={{
          clickable: true
        }}
        modules={{Navigation, Pagination}}
        className="h-[40 0px]">
          {
            testimonialSlider.map((person, index) =>{
              return (
                <SwiperSlide key={index}>
                    <div className=' flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
                      <div className=' w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                        <div className=' flex flex-col justify-center text-center'>
                          <div className=' mb-2 mx-auto'>
                          <Image src={person.image} width={100} height={100} alt='' />
                          </div>
                        </div>
                        <div className=' text-lg'>{person.name}</div>
                        <div className=' text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                      </div>
                      <div className='flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                        <div className=' mb-4'>
                          <FaQuoteLeft className=' text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                        </div>
                        <div className=' xl:text-lg text-center md:text-left'>{person.message}</div>
                      </div>
                    </div>
                 </SwiperSlide>
              )
            })
          }
        </Swiper>
      )
    }
    
  