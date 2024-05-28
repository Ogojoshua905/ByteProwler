import Image from "next/image"

export default function Bulb() {
  return (
    <div className=" absolute -left-36 -bottom-12 rotate-12 animate-pulse mix-blend-color-dodge duration-75 z-10 w-[310px] xl:w-[300px]">
      <Image src={'/bulb3.png'} width={300} height={240} className="w-full h-full" alt="Bulb" />
    </div>
  )
}

