import Image from "next/image";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import itemsPrincipal from "@/itemsPrincipal";

export default function PageContent() {
  return (
    <div className="relative h-screen">
      <div className=" h-full w-full absolute top-0 left-0 z-0">
        <Image
          src="/imagen1.jpg"
          width={1600}
          height={600}
          alt="fondo carousel"
        />
      </div>
      <div className=" h-full w-full absolute top-0 left-0 bg-gradient-to-t from-white to-transparent z-20"></div>
      <div className=" flex justify-between border">
        <div className="flex px-5 h-60 text-4xl items-center hover:border z-30 cursor-pointer">
          <SlArrowLeft />
        </div>
        <div className="flex px-5 h-60 text-4xl items-center hover:border z-30 cursor-pointer">
          <SlArrowRight />
        </div>
      </div>
      {itemsPrincipal.map((itemSide, i) => (
        <div
          key={`field${i}`}
          className="flex h-96 mb-5 gap-5 w-full z-40 px-6"
        >
          {itemSide.map((item, index) => {
            return (
              <div
                key={index}
                className="relative flex-col align-text-bottom w-1/4 h-full bg-white p-5 z-30"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <div className="w-full flex justify-center cursor-pointer">
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                  />
                </div>
                <p>{item.subtitle}</p>
                <a
                  href="#"
                  className="absolute bottom-3 text-sm text-blue-600 font-sans hover:text-orange-500 hover:underline"
                >
                  {item.a}
                </a>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
