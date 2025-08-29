import { FaFacebookF, FaRedditAlien, FaTwitter, FaDiscord } from "react-icons/fa";

const iconClass = "text-2xl";
const boxClass = "w-16 h-16 flex items-center justify-center border-2 border-black rounded-md mx-2";

export default function SocialIcons() {
  return (
    <div className="flex relative z-[10]">
      <div className={`${boxClass} bg-white text-black hover:text-white hover:bg-black cursor-pointer`}>
        <FaFacebookF className={iconClass} />
      </div>
      <div className={`${boxClass} bg-white text-black hover:text-white hover:bg-black cursor-pointer`}>
        <FaRedditAlien className={iconClass} />
      </div>
      <div className={`${boxClass} bg-white text-black hover:text-white hover:bg-black cursor-pointer`}>
        <FaTwitter className={iconClass} />
      </div>
    </div>
  );
}