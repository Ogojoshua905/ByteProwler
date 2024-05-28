import { useRouter } from "next/router"
import Link from "next/link"
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';
import index from "@/pages/contact";

export const navData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'work', path: '/work', icon: <HiViewColumns /> },
    {
      name: 'testimonials',
      path: '/testimonials',
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: 'contact',
      path: '/contact',
      icon: <HiEnvelope />,
    },
]

export default function Navbar() {
    const router = useRouter();
    const pathname = router.pathname

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:left-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
        <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px:40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">

      {
          navData.map((link, index) => {
            return <Link className={`${link.path === pathname && 'text-accent'} relative items-center group hover:text-accent transition-all duration-300`} key={index} href={link.path}>
                <div className=" absolute pr-14 left-5 hidden xl:group-hover:flex">
                    <div className=" bg-white relative flex items-center p-[6px] rounded-[3px]">
                    <div className=" text-[12px] leading-none font-semibold capitalize">
                        {link.name}
                    </div>
                    <div className=" border-solid border-l-white border-r-8 border-y-transparent border-y-[6px] border-l-0 absolute -left-2">
                    </div>
                    </div>
                </div>
                <div>
                    {link.icon}
                </div>
            </Link>
        })
    }
    </div>
    </nav>
  )
}
