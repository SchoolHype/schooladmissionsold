import HeroSection from '../Components/Hero Section/HeroSection'
import Section from '../Components/Section/Section'
import Services from '../Components/Services/Services'

export default function Home() {
  return (
    <>
      <HeroSection imgSrc="/Images/hero.jpg">
        <h4><strong>Welcome to SchoolHype&apos;s School Admisssions</strong></h4>
        <h1>Your Search For The Perfect School Ends Here</h1>
        <h3>Just register here and get all you wanted to know about schools. It&apos;s absolutely free.</h3>
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
