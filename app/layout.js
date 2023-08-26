import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/client/Navbar/Navbar'
import Footer from '@/components/client/footer/Footer'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const inter = Poppins({ weight:["400","500","700"], subsets: ['latin'] })

export const metadata = {
  title: 'FitnessHub',
  description: 'Say Fit Stay Fit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <ToastContainer />
        {children}
        <Footer />
      </body>
    </html>
  )
}
