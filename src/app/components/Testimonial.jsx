import Container from "../ui/Container";
import Flex from "../ui/Flex";

const testimonials = [
  {
    img: "/avatar1.png",
    name: "Evren Shah",
    role: "Designer",
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
  },
  {
    img: "/avatar2.png",
    name: "Flora Sheen",
    role: "Designer",
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
  },
  {
    img: "/avatar1.png",
    name: "Evren Shah",
    role: "Designer",
    text: "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
  },
];

export default function Testimonial() {
  return (
    <section className="py-16">
      <h2 className="text-[40px] text-center mb-12">
        My <span className="font-black">Testimonial</span>
      </h2>
      <Container>
        <Flex className="gap-8 justify-center flex-col md:flex-row">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl shadow-md p-8 flex flex-col items-center w-full md:w-[320px] bg-white text-black transition duration-200 hover:bg-black hover:text-white`}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-gray-200 flex items-center justify-center">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-center mb-6 text-[15px]">{item.text}</p>
              <div className="w-12 h-[2px] bg-gray-300 mb-4" />
              <div className="text-center">
                <div className="font-bold">{item.name}</div>
                <div className="text-gray-400 text-[15px]">{item.role}</div>
              </div>
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
}