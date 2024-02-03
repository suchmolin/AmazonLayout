import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="h-9 flex items-center px-4 bg-[#232f3e] text-white">
      <ul className="inline-flex items-center h-full cursor-pointer gap-3 text-sm">
        <li className="flex h-full px-2 items-center gap-1 hover:border hover:boder-white">
          <span>
            <IoMenu />
          </span>
          Todo
        </li>
        <li className="flex h-full px-1 items-center gap-1 hover:border hover:boder-white">
          Ofertas del Día
        </li>
        <li className="flex h-full px-1 items-center gap-1 hover:border hover:boder-white">
          Comprar de Nuevo
        </li>
        <li className="flex h-full px-1 items-center gap-1 hover:border hover:boder-white">
          Servicio al Cliente
        </li>
        <li className="flex h-full px-1 items-center gap-1 hover:border hover:boder-white">
          Tarjetas de Regalo
        </li>
        <li className="flex h-full px-1 items-center gap-1 hover:border hover:boder-white">
          Listas
        </li>
        <li className="flex h-full px-1 items-center gap-1 hover:border hover:boder-white">
          Vender
        </li>
      </ul>
    </div>
  );
}
