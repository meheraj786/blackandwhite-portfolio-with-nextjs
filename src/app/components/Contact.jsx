"use client";

import Link from "next/link";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.message) {
  //     toast.error("Please fill in all required fields!");
  //     return;
  //   }

  //   toast.success("Message sent successfully!");

  //   setFormData({
  //     name: "",
  //     email: "",
  //     website: "",
  //     message: "",
  //   });
  // };
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uw8pal3", "template_r7ldq0n", form.current, {
        publicKey: "TFKsrYym6xqMKgLp2",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            website: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("FAILED...!");
        }
      );
  };

  return (
    <section id="contact" className="py-16 relative z-[999]">
      <Toaster position="bottom-right" />
      <Container>
        <Flex className="gap-x-12 flex-col-reverse text-center xl:text-left md:flex-row justify-center items-start">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="xl:flex-1 px-3 xl:px-0 flex flex-col gap-4 w-full xl:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="border border-black rounded px-3 py-2 outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="border border-black rounded px-3 py-2 outline-none"
            />
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Your website (if exists)"
              className="border border-black rounded px-3 py-2 outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help?*"
              rows={4}
              required
              className="border border-black rounded px-3 py-2 outline-none resize-none"
            />
            <div className="flex items-center gap-2 mt-2">
              <Button type="submit">Get In Touch</Button>
              <Link
                href="https://www.facebook.com/mehrajh786/"
                className="w-10 h-10 flex items-center justify-center border border-black rounded text-black hover:bg-black hover:text-white transition"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://github.com/meheraj786"
                className="w-10 h-10 flex items-center justify-center border border-black rounded text-black hover:bg-black hover:text-white transition"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://x.com/MeherajHosen786"
                className="w-10 h-10 flex items-center justify-center border border-black rounded text-black hover:bg-black hover:text-white transition"
              >
                <FaTwitter />
              </Link>
            </div>
          </form>

          <div className="flex-1 flex flex-col xl:text-left text-center items-center xl:items-start justify-center xl:w-1/2">
            <h2 className="text-[32px] text-center xl:text-left font-normal mb-2">
              Let’s{" "}
              <span className="font-black text-center xl:text-left border-2 border-black px-1">
                talk
              </span>{" "}
              for
            </h2>
            <h3 className="text-[32px] font-black mb-4">Something special</h3>
            <p className="text-[#71717A] mb-6 max-w-md">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </p>
            <div className="font-bold mb-1">meherajhosen786@gmail.com</div>
            <div className="font-bold">01989162543</div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}
