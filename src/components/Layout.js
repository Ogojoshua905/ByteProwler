import { Sora } from "next/font/google";
import Head from "next/head";
import Navbar from "./Navbar";
import Header from './Header';
import TopRightBulb from './TopRightBulb';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

export default function Layout({ children }) {
  return (
    <div className={`page bg-site min-h-[100vh] text-white bg-cover bg-no-repeat ${sora.variable} absolute`}>
      <Head>
        <title>ByteProwler</title>
        <meta name="description" content="Coding Ideas to Life" />
        <meta name="keywords" content="html, tailwindcss, js, javascript" />
      </Head>
      <TopRightBulb />
      <Navbar />
      <Header />
      {children}
    </div>
  );
}
