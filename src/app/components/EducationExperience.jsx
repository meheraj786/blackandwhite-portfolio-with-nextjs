import { FaGoogle, FaYoutube, FaApple } from "react-icons/fa";
import Container from "../ui/Container";
import cer1 from "../../../public/cer1.png";
import Image from "next/image";
import Flex from "../ui/Flex";

const experiences = [
  {
    icon: "",
    title: "MERN Stack Development - Creative IT institute",
    date: "Nov 2024 – Present",
    desc: `I'm still studying MERN stack development in Creative IT institute.`,
  },
  {
    icon: "",
    title: "React JS - Interactive Cares",
    date: "Jan 2025 – Mar 2025",
    desc: `It was amazing journey to learn ReactJs with Interactive Cares.`,
    img: cer1,
  },
];

export default function EducationExperience() {
  return (
    <section className="py-16 bg-black text-white">
      <h2 className="xl:text-[38px] text-[28px] text-center mb-16">
        My <span className="font-black">Education and Experience</span>
      </h2>
      <Container>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-[#18181b] hover:bg-[#0e0e0f] border border-[#333] rounded-lg p-6 flex flex-col gap-2 relative"
            >
              <div className="flex items-start gap-3 mb-2">
                {exp.icon}
                <Flex className="flex-col justify-start items-start gap-y-3">
                <span className="font-semibold text-lg">{exp.title}</span>
                <p className="text-gray-300 text-[15px]">{exp.desc}</p>

                </Flex>
                <div className="ml-auto text-sm flex flex-col justify-end items-end gap-y-2 text-gray-300">
                  {exp.date}
                  {
                    exp.img && <Image  src={exp.img} alt={exp.title} width={100}/>
                  }
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
