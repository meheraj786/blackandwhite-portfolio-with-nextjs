import { FaGoogle, FaYoutube, FaApple } from "react-icons/fa";
import Container from "../ui/Container";

const experiences = [
  {
    icon: <FaGoogle className="text-2xl text-[#4285F4]" />,
    title: "Lead Software Engineer at Google",
    date: "Nov 2019 – Present",
    desc: `As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.`,
  },
  {
    icon: <FaYoutube className="text-2xl text-[#FF0000]" />,
    title: "Software Engineer at Youtube",
    date: "Jan 2017 – Oct 2019",
    desc: `At Youtube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.`,
  },
  {
    icon: <FaApple className="text-2xl text-white" />,
    title: "Junior Software Engineer at Apple",
    date: "Jan 2016 – Dec 2017",
    desc: `During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.`,
  },
];

export default function EducationExperience() {
  return (
    <section className="py-16 bg-black text-white">
      <h2 className="text-[48px] text-center mb-16">
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