import Link from "next/link"
import {RiYoutubeFill, RiInstagramFill, RiLinkedinFill, RiTiktokFill, RiWhatsappFill} from 'react-icons/ri'

export default function SocialIcons() {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiYoutubeFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiInstagramFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiLinkedinFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiTiktokFill />
      </Link>
      <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiWhatsappFill />
      </Link>
    </div>
  )
}

