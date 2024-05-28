import { Sora } from "next/font/google"
import Navbar from "./Navbar"
import Header from './Header'
import TopRightBulb from './TopRightBulb'

const sora = Sora({
  subsets:['latin'],
  variable: '--font-sora',
  weight: ['100', '200','300', '400', '500', '600', '700', '800']
});

export const metadata ={
  title: 'ByteProwler',
  description: "Coding Ideas to Life",
  keywords: 'html, tailwindcss, js, javascript'
}

export default function Layout({children}) {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} relative`}>
      <TopRightBulb />
        <Navbar />
        <Header />
      {children}
    </div>
  )
}
