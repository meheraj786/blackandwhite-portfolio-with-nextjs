import React from "react";
import Container from "../ui/Container";
import Flex from "../ui/Flex";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import NavItems from "../ui/NavItems";
import Link from "next/link";
// import resume from "../../../public/resume.pdf";

const Navbar = () => {
  return (
    <div className="py-4 fixed top-0 z-[9999] w-full bg-white px-8 text-primary font-primary">
      <Container>
        <Flex className="flex-col xl:flex-row">
          <Logo />
          <ul className="flex text-[20px] justify-center flex-wrap items-center gap-x-[32px] font-semibold">
            <NavItems />
          </ul>
          <Button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
