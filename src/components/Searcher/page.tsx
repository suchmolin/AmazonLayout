import { IoMdArrowDropdown } from "react-icons/io";

export default function NavBar() {
  return (
    <form className="w-5/12">
      <div className="flex ">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Your Email
        </label>
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-xs font-medium text-center text-gray-800 bg-gray-200 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-md hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-orange-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          type="button"
        >
          Todos &nbsp;
          <IoMdArrowDropdown />
        </button>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Shopping
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Images
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                News
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Finance
              </a>
            </li>
          </ul>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 placeholder-gray-500 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-2 focus:outline-none focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:border-blue-500"
            placeholder="Buscar Amazon"
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 py-2.5 px-4 h-full text-sm font-medium text-gray-900 bg-orange-300 rounded-e-lg hover:bg-orange-400 focus:ring-2 focus:outline-none focus:ring-orange-500 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
