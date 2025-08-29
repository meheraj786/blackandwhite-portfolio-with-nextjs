import { FiExternalLink } from "react-icons/fi";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import bug from '../../../public/bug.png'
import collabrix from '../../../public/collabrix.png'
import chat from '../../../public/chat.png'
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "BUG-Social App",
    desc: "A full-stack social networking platform built with React, Tailwind CSS, and Firebase. Features include user authentication, profile management, posts (text, image, events, jobs, products), likes, comments, messaging, notifications, pages, and groups. Designed with protected routes, responsive UI, and real-time interactions.",
    gitlink: "#",
    livelink: "#",
    img: bug,
    tags: ["React", "Tailwind", "Firebase", "Redux", "Motion"],
  },
  {
    id: 2,
    title: "Collabrix- A project management Application",
    desc: "A collaborative project management platform built with React, Redux, Tailwind, and Firebase. It includes secure authentication, task & subtask tracking, project dashboards with charts, real-time chat with team members, and role-based group management. Designed with a responsive UI and Kanban-style productivity flow.",
    gitlink: "#",
    livelink: "#",
    img: collabrix,
    tags: ["React", "Tailwind", "Firebase", "Redux", "Chart js"],
  },
  {
    id: 3,
    title: "Top Chat- a chatting application",
    desc: "A chatting application with many features like send friend request, accept or reject friend request, make friends and also block your friends. You can create group, add friends to your group, remove member or send join request to other group. Notification feature also included. ",
    gitlink: "#",
    livelink: "#",
    img:chat,
    tags: ["React", "Tailwind", "Firebase", "Redux"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-black text-white">
      <h2 className="text-[38px] text-center mb-12">
        My <span className="font-black">Projects</span>
      </h2>
      <Container>
        <div className="flex flex-col gap-12 max-w-6xl mx-auto">
          {/* Project 1 */}
          {
            projects.map((project, idx)=>(
          <Flex key={idx} className="gap-8 items-center flex-col md:flex-row">
            <div className="w-full md:w-[380px] h-[240px] rounded-xl ">
              <Image 
  src={project.img}
  className="w-full h-full object-cover rounded-xl object-center" 
  alt={project.title} 
/>

            </div>
            <div className="flex-1">
              <div className="text-[32px] font-black mb-2">{idx+1}</div>
              <h3 className="text-[22px] font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-[#bdbdbd] mb-4">{project.desc}</p>
                <Flex className="gap-x-4 justify-start">
                  <Link href={project.livelink}>
                  <FaLink size={20} />
                  </Link>
                  <Link className="mr-5" href={project.gitlink}>
                  <FaGithub size={20} />
                  </Link>
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 rounded-2xl border text-[12px] hover:bg-white hover:text-black cursor-pointer border-white">
                      {tag}
                    </span>
                  ))}
                </Flex>
            </div>
          </Flex>
            ))
          }
          {/* Project 2 */}
          {/* <Flex className="gap-8 items-center flex-col md:flex-row-reverse">
            <div className="w-full md:w-[380px] h-[240px] rounded-xl bg-gray-300" />
            <div className="flex-1">
              <div className="text-[32px] font-black mb-2">02</div>
              <h3 className="text-[22px] font-bold mb-2">
                {projects[1].title}
              </h3>
              <p className="text-[#bdbdbd] mb-4">{projects[1].desc}</p>
              <a
                href={projects[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white"
              >
                <Flex className="gap-x-5">
                  <FiExternalLink size={24} />
                  {projects[1].tags.map((tag) => (
                    <span className="px-2 py-1 rounded-2xl border text-[12px] border-white">
                      {tag}
                    </span>
                  ))}
                </Flex>
              </a>
            </div>
          </Flex> */}
          {/* Project 3 */}
          {/* <Flex className="gap-8 items-center flex-col md:flex-row">
            <div className="w-full md:w-[380px] h-[240px] rounded-xl bg-gray-300" />
            <div className="flex-1">
              <div className="text-[32px] font-black mb-2">03</div>
              <h3 className="text-[22px] font-bold mb-2">
                {projects[2].title}
              </h3>
              <p className="text-[#bdbdbd] mb-4">{projects[2].desc}</p>
              <a
                href={projects[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white"
              >
                <Flex className="gap-x-5">
                  <FiExternalLink size={24} />
                  {projects[2].tags.map((tag) => (
                    <span className="px-2 py-1 rounded-2xl border text-[12px] border-white">
                      {tag}
                    </span>
                  ))}
                </Flex>
              </a>
            </div>
          </Flex> */}
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
