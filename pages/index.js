import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import HomeContainer from '@/containers/home'
import Page from './page'
import Header from '@/components/header'
import Footer from '@/components/footer'
import BackgroundImage from '@/components/background-image'
import Filler from '@/components/something'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header/>
      <Filler/>
      <Footer/>
    </div>
  )
}
