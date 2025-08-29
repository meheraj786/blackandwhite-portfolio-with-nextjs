import Flex from "../ui/Flex";
import Container from "../ui/Container";
import ParralaxEffect from "../ui/ParralaxEffect";

export default function About() {
  return (
    <section id="about" className="py-16 relative">
      <ParralaxEffect />
      <Container>
        <Flex className="items-center gap-12">
          <div className="w-[400px] h-[400px] border-2 border-black rounded-xl flex items-center justify-center">
            <div className="w-[400px] h-[400px] border-2 border-black rounded-xl flex items-center justify-center">
              <img
                src="/myImg.jpg"
                className="w-full h-full rounded-xl object-cover object-center"
                alt="myImg"
              />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-[38px] font-normal mb-6">
              About <span className="font-black">Me</span>
            </h2>
            <div className="text-[#71717A] text-[16px] leading-7 relative z-[10] space-y-5">
              <p>
                Hi, I’m Meheraj Hosen — a passionate MERN stack developer from
                Dhaka, Bangladesh. I love building modern, responsive web
                applications and exploring new technologies. Skilled in HTML,
                CSS, JavaScript, React, Tailwind, Node.js, Express, and MongoDB.
                Always eager to learn, create, and share ideas through
                real-world projects.
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}
