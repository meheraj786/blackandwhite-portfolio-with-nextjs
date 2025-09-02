import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, } from "react-icons/fa";

const iconClass = "text-2xl";
const boxClass = "w-16 h-16 flex items-center justify-center border-2 border-black rounded-md mx-2";

export default function SocialIcons() {
  return (
    <div className="flex relative z-[10]">
      <a href="https://www.facebook.com/mehrajh786/">
      <div className={`${boxClass} bg-white text-black hover:text-white hover:bg-black cursor-pointer`}>
        <FaFacebookF className={iconClass} />
      </div>
      </a>
      <a href="https://github.com/meheraj786">
      <div className={`${boxClass} bg-white text-black hover:text-white hover:bg-black cursor-pointer`}>
        <FaGithub className={iconClass} />
      </div>
      </a>
      <a href="https://www.linkedin.com/in/mehraj-h/">
      <div className={`${boxClass} bg-white text-black hover:text-white hover:bg-black cursor-pointer`}>
        <FaLinkedin className={iconClass} />
      </div>

      </a>
    </div>
  );
}