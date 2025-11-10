import { LuMenu } from "react-icons/lu";
import { Dialog, DialogContent, DialogTrigger } from "@/Components/ui/dialog";
import { Link } from "react-router";
export default function Menu() {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.className = "ripple"; //

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <button
            className="hover:bg-[#4b566b0a] p-2 rounded-2xl lg:hidden relative overflow-hidden"
            onClick={(e) => handleClick(e)}
          >
            <LuMenu className="text-icons-light-gray text-2xl" />
          </button>
        </DialogTrigger>
        <DialogContent className="left-1/3 w-[67%] origin-top-left h-full rounded-l-none [&_[data-slot=dialog-close]]:left-5">
          <ul className="w-full text-black mt-10 ml-auto *:p-2 *:text-right *:hover:bg-accent *:w-full">
            <li>
              <Link className="w-full" to={""}>
                Home
              </Link>
            </li>
            <li>
              <Link className="w-full" to={"cart"}>
                cart
              </Link>
            </li>
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
