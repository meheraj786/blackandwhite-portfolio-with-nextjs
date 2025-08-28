import { FaGoogle, FaYoutube, FaApple } from "react-icons/fa";
import Container from "../ui/Container";

const experiences = [
  {
    icon: "",
    title: "MERN Stack Development - Creative IT institute",
    date: "Nov 2024 – Present",
    desc: `I'm still studying MERN stack development in Creative IT institute.`,
  },
];

export default function EducationExperience() {
  return (
    <section className="py-16 bg-black text-white">
      <h2 className="text-[38px] text-center mb-16">
        My <span className="font-black">Education and Experience</span>
      </h2>
      <Container>
      <div className="flex flex-col gap-6">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-[#18181b] border border-[#333] rounded-lg p-6 flex flex-col gap-2 relative"
          >
            <div className="flex items-center gap-3 mb-2">
              {exp.icon}
              <span className="font-semibold text-lg">{exp.title}</span>
              <span className="ml-auto text-sm text-gray-300">{exp.date}</span>
            </div>
            <p className="text-gray-300 text-[15px]">{exp.desc}</p>
          </div>
        ))}
      </div>

      </Container>
    </section>
  );
}