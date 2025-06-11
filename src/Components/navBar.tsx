import { FiHome } from "react-icons/fi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router";
export default function NavBar() {
  return (
    <nav className="Search-wind lg:hidden bg-white py-2 *:cursor-pointer fixed z-10 top-[calc(100%-59.5px)] shadow-[-1px_-1px_10px_rgba(0,0,0,0.2)] w-full flex items-center justify-around text-title-p">
      <Link to={"/"}>
        <div className="flex flex-col items-center gap-1 hover:text-primary group">
          <FiHome className="w-5 h-5 text-head group-hover:text-primary" />
          <p className="text-[13px] capitalize">Home</p>
        </div>
      </Link>
      <div className="flex flex-col items-center gap-1 group">
        <svg
          className="fill-head group-hover:fill-primary"
          height="20"
          width="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 4h5v5H4zm-2 7V2h9v9zm2 4h5v5H4zm-2 7v-9h9v9zM20 4h-5v5h5zm-7-2v9h9V2zm2 13h5v5h-5zm-2 7v-9h9v9z"
            fill=""
            fillRule="evenodd"
          />
        </svg>
        <p className="text-[13px] capitalize group-hover:text-primary">
          categories
        </p>
      </div>
      <div className="flex flex-col items-center gap-1 group">
        <MdOutlineShoppingBag className="w-5 h-5 text-head group-hover:text-primary" />
        <p className="text-[13px] capitalize group-hover:text-primary">cart</p>
      </div>
    </nav>
  );
}
