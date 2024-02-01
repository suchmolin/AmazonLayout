import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import Searcher from "../Searcher/page";
import { PiShoppingCart } from "react-icons/pi";

export default function Header() {
  return (
    <div className="h-16 flex justify-between items-center pl-2 bg-slate-900 text-white">
      <a href="#">
        <Image
          src="/logo.png"
          width={110}
          min-width={110}
          height={90}
          alt="logoHeader"
        />
      </a>
      <span className="text-2xl ml-3">
        <CiLocationOn />
      </span>
      <div className="flex-row text-sm mr-3">
        <p className="text-xs ">Enviar a</p>
        <p className="font-bold">Venezuela</p>
      </div>
      <Searcher />
      <div className="p-3 ml-2 inline-flex gap-1 items-center cursor-pointer hover:border hover:border-white">
        <Image src="/espana.png" width={20} height={20} alt="epanaIcon" />
        <p>ES</p>
        <IoMdArrowDropdown />
      </div>
      <div className="min-w-36 p-2 flex-row text-sm mr-5 cursor-pointer border-slate-900 hover:border hover:border-white">
        <p className="text-xs ">Hola Usuario</p>
        <p className="font-bold">Cuenta y Listas</p>
      </div>
      <div className="min-w-34 p-2 flex-row text-sm mr-3 cursor-pointer border-slate-900 hover:border hover:border-white">
        <p className="text-xs ">Devoluciones</p>
        <p className="font-bold">y Pedidos</p>
      </div>
      <div className="p-3 flex items-center gap-2 text-sm mr-3 cursor-pointer border-slate-900 hover:border hover:border-white">
        <span className="text-2xl">
          <PiShoppingCart />
        </span>
        <span className="px-2 py-1 rounded-3xl bg-orange-400">2</span>
      </div>
    </div>
  );
}
