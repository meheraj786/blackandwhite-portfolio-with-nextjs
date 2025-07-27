import { FiExternalLink } from "react-icons/fi";
import Container from "../ui/Container";
import Flex from "../ui/Flex";

const projects = [
  {
    id: 1,
    title: "Crypto Screener Application",
    desc: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link: "#",
    tags:["React", "Tailwind", "Firebase"]
  },
  {
    id: 2,
    title: "Euphoria - Ecommerce (Apparels) Website Template",
    desc: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link: "#",
    tags:["React", "Tailwind",]
  },
  {
    id: 3,
    title: "Blog Website Template",
    desc: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
    link: "#",
    tags:["React", "Tailwind",]
  },
];

export default function Projects() {
  return (
    <section className="py-16 bg-black text-white">
      <h2 className="text-[40px] text-center mb-12">
        My <span className="font-black">Projects</span>
      </h2>
      <Container>
        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {/* Project 1 */}
          <Flex className="gap-8 items-center flex-col md:flex-row">
            <div className="w-full md:w-[380px] h-[240px] rounded-xl bg-gray-300" />
            <div className="flex-1">
              <div className="text-[32px] font-black mb-2">01</div>
              <h3 className="text-[22px] font-bold mb-2">{projects[0].title}</h3>
              <p className="text-[#bdbdbd] mb-4">{projects[0].desc}</p>
              <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="inline-block text-white">
                <Flex className="gap-x-5">
                <FiExternalLink size={24} />
                {
                  projects[0].tags.map((tag)=>(
                    <span className="px-2 py-1 rounded-2xl border text-[12px] border-white">{tag}</span>

                  ))
                }

                </Flex>
              </a>
            </div>
          </Flex>
          {/* Project 2 */}
          <Flex className="gap-8 items-center flex-col md:flex-row-reverse">
            <div className="w-full md:w-[380px] h-[240px] rounded-xl bg-gray-300" />
            <div className="flex-1">
              <div className="text-[32px] font-black mb-2">02</div>
              <h3 className="text-[22px] font-bold mb-2">{projects[1].title}</h3>
              <p className="text-[#bdbdbd] mb-4">{projects[1].desc}</p>
              <a href={projects[1].link} target="_blank" rel="noopener noreferrer" className="inline-block text-white">
                <Flex className="gap-x-5">
                <FiExternalLink size={24} />
                {
                  projects[1].tags.map((tag)=>(
                    <span className="px-2 py-1 rounded-2xl border text-[12px] border-white">{tag}</span>

                  ))
                }

                </Flex>
              </a>
            </div>
          </Flex>
          {/* Project 3 */}
          <Flex className="gap-8 items-center flex-col md:flex-row">
            <div className="w-full md:w-[380px] h-[240px] rounded-xl bg-gray-300" />
            <div className="flex-1">
              <div className="text-[32px] font-black mb-2">03</div>
              <h3 className="text-[22px] font-bold mb-2">{projects[2].title}</h3>
              <p className="text-[#bdbdbd] mb-4">{projects[2].desc}</p>
              <a href={projects[2].link} target="_blank" rel="noopener noreferrer" className="inline-block text-white">
                <Flex className="gap-x-5">
                <FiExternalLink size={24} />
                {
                  projects[2].tags.map((tag)=>(
                    <span className="px-2 py-1 rounded-2xl border text-[12px] border-white">{tag}</span>

                  ))
                }

                </Flex>
              </a>
            </div>
          </Flex>
        </div>
        <div className="flex justify-center mt-10">
          <button className="px-6 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
            View More
          </button>
        </div>
      </Container>
    </section>
  );
}