import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import EducationExperience from "./components/EducationExperience";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
    <Banner/>
    <Skills/>
    <EducationExperience/>
    <About/>
    <Projects/>
     {/* <Testimonial/> */}
     <Contact/>
    </>
  );
}
