import Logo from "../assets/logo.svg";
import { ShoppingCartIcon } from "@heroicons/react/solid";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-[#CC45F2]">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
          <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            SearchedText
          </span>
        </a>
       
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <ShoppingCartIcon
              className="h-7 mr-2 text-white "
              >
              </ShoppingCartIcon>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
