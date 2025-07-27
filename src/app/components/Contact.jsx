import Button from "../ui/Button";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import { FaFacebookF, FaGithub, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 relative z-[999]">
      <Container>
        <Flex className="gap-x-12 flex-col md:flex-row justify-center items-start">
          {/* Left: Contact Form */}
          <form className="flex-1 flex flex-col gap-4 w-1/2">
            <input
              type="text"
              placeholder="Your name"
              className="border border-black rounded px-3 py-2 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-black rounded px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder="Your website (if exists)"
              className="border border-black rounded px-3 py-2 outline-none"
            />
            <textarea
              placeholder="How can I help?*"
              rows={4}
              className="border border-black rounded px-3 py-2 outline-none resize-none"
            />
            <div className="flex items-center gap-2 mt-2">
              <Button
                type="submit"
              >
                Get In Touch
              </Button>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-black rounded text-black hover:bg-black hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-black rounded text-black hover:bg-black hover:text-white transition">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-black rounded text-black hover:bg-black hover:text-white transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-black rounded text-black hover:bg-black hover:text-white transition">
                <FaDiscord />
              </a>
            </div>
          </form>
          {/* Right: Info */}
          <div className="flex-1 flex flex-col text-left items-start justify-center w-1/2">
            <h2 className="text-[32px] font-normal mb-2">
              Let’s <span className="font-black border-2 border-black px-1">talk</span> for
            </h2>
            <h3 className="text-[32px] font-black mb-4">Something special</h3>
            <p className="text-[#71717A] mb-6 max-w-md">
              I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
            </p>
            <div className="font-bold mb-1">Youremail@gmail.com</div>
            <div className="font-bold">1234567890</div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}