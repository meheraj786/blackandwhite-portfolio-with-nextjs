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
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </p>
              <p>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </p>
              <p>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}
