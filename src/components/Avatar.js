import Image from "next/image"

export default function Avatar() {
  return (
    <div className=" hidden xl:flex xl:max-w-none">
      <Image src={'/avatar3.png'} width={800} height={678} alt="" className=" translate-z-0 w-full h-full" />      
    </div>
  )
}

