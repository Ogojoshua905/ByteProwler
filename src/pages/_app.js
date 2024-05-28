import '../styles/globals.css'
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Transition from "@/components/Transition";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
  <Layout>
    <AnimatePresence mode="wait">
    <motion.div key={router.route} className=" h-full"> 
    <Transition />
    <Component {...pageProps} />
    </motion.div>
    </AnimatePresence>
  </Layout>
)
}
