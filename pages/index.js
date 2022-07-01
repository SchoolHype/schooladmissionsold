import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '../Components/Hero Section/HeroSection'
import Section from '../Components/Section/Section'
import Services from '../Components/Services/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <HeroSection imgSrc="/Images/hero.svg">
        <h4><strong>Welcome to SchoolHype&apos;s School Admisssions</strong></h4>
        <h1>Your Search For The Perfect School Ends Here</h1>
        <h3>The Future of School Search, Just Register, <br /> It’s absolutely Free!</h3>
      </HeroSection>

      <Section imgSrc={"/Images/section.svg"} reverse>
        <h2>For Parents</h2>
        <p>The Future of School Search, Just Register, Your Search For The Perfect School Ends Here</p>
      </Section>

      <Section imgSrc={"/Images/section.svg"}>
        <h2>For Parents</h2>
        <p>The Future of School Search, Just Register, Your Search For The Perfect School Ends Here</p>
      </Section>

      <Services />
    </>
  )
}
