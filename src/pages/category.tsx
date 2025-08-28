import type React from "react";
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
interface PropLi {
  title: string;
  icon: React.ReactNode;
}
export default function Category() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [active, setActive] = useState<number | null>(0);
  const [height, setHeight] = useState<string[]>([]);
  const ref = useRef<(HTMLUListElement | null)[]>([]);
  const CateRef = useRef<(HTMLLIElement | null)[]>([]);
  const list: PropLi[] = [
    {
      title: "Fashion",
      icon: (
        <svg
          className="w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ShirtLineIcon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1"
            d="M5.777 10.296v7.969c0 1.323 0 1.985.449 2.547c.448.562.985.66 2.058.858c.992.182 2.249.33 3.716.33s2.724-.148 3.716-.33c1.073-.198 1.61-.296 2.059-.858c.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326c.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118c.004-.69-.465-1.122-1.401-1.988a8 8 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.05 2.05 0 0 0-1.567-.205l-.49.129a1.6 1.6 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0a1.6 1.6 0 0 0-.948-.703l-.49-.129a2.05 2.05 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a8 8 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716s.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968c.132.3.132.643.132 1.327Z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Electronics",
      icon: (
        <svg
          className="w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="LaptopMobileIcon"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path
              strokeLinecap="round"
              d="M22 10c0-3.771 0-5.657-1.172-6.828S17.772 2 14 2S8.343 2 7.172 3.172C6.229 4.115 6.045 5.52 6.009 8M22 14c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"
            ></path>
            <path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></path>
            <path strokeLinecap="round" d="M17 19h-5"></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Home & Garden",
      icon: (
        <svg
          className="w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
          >
            <path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3"></path>
            <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path>
          </g>
        </svg>
      ),
    },
    {
      title: "Gifts",
      icon: (
        <svg
          className="w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4 11v4c0 3.3 0 4.95 1.025 5.975S7.7 22 11 22h2c3.3 0 4.95 0 5.975-1.025S20 18.3 20 15v-4M3 9c0-.748 0-1.122.201-1.4a1.4 1.4 0 0 1 .549-.44C4.098 7 4.565 7 5.5 7h13c.935 0 1.402 0 1.75.16c.228.106.417.258.549.44C21 7.878 21 8.252 21 9s0 1.121-.201 1.4a1.4 1.4 0 0 1-.549.44c-.348.16-.815.16-1.75.16h-13c-.935 0-1.402 0-1.75-.16a1.4 1.4 0 0 1-.549-.44C3 10.121 3 9.748 3 9m3-5.214C6 2.799 6.8 2 7.786 2h.357A3.857 3.857 0 0 1 12 5.857V7H9.214A3.214 3.214 0 0 1 6 3.786m12 0C18 2.799 17.2 2 16.214 2h-.357A3.857 3.857 0 0 0 12 5.857V7h2.786A3.214 3.214 0 0 0 18 3.786M12 11v11"
            color="currentColor"
          ></path>
        </svg>
      ),
    },
    {
      title: "Health & Beauty",
      icon: (
        <svg
          className="w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="m5.654 21l-3.462-9.577l4.77-2.846V3h2v5.577l4.769 2.846L10.269 21zm10.885 0q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h3.5v-2.77h-3.5q-.213 0-.357-.143q-.143-.144-.143-.357t.143-.356t.357-.143h3.5v-2.77h-3.5q-.213 0-.357-.143q-.143-.144-.143-.357t.143-.356t.357-.143h3.5v-2.77h-3.5q-.213 0-.357-.144q-.143-.143-.143-.356t.143-.356t.357-.144h3.5V5.923h-3.5q-.213 0-.357-.144q-.143-.144-.143-.356q0-.213.143-.357t.357-.143h3.653q.69 0 1.153.463t.463 1.153v12.846q0 .69-.463 1.153T20.192 21zM6.36 20h3.2l2.95-8.15l-3.677-2.196H7.088L3.412 11.85zm1.6-5.173"
          ></path>
        </svg>
      ),
    },
    {
      title: "Baby Toys",
      icon: (
        <svg
          className="w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 576 512"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M144 64c0 16.8 8.6 31.6 21.7 40.2c2.7 1.8 4 4.9 3.5 8.1c-.8 4.5-1.2 9.3-1.2 14.4C168 188 220.4 240 288 240s120-52 120-113.3c0-5.2-.4-10-1.2-14.4c-.6-3.1 .8-6.3 3.5-8.1C423.4 95.6 432 80.8 432 64c0-26.5-21.5-48-48-48c-20.3 0-37.8 12.7-44.7 30.6c-1.4 3.6-5.1 5.6-8.9 5C316.3 49 301.7 48 288 48s-28.3 1-42.4 3.5c-3.8 .7-7.5-1.4-8.9-5C229.8 28.7 212.3 16 192 16c-26.5 0-48 21.5-48 48zM192 0c24.8 0 46.3 14.1 56.9 34.8c13.2-2 26.5-2.8 39.1-2.8s25.8 .8 39.1 2.8C337.7 14.1 359.2 0 384 0c35.3 0 64 28.7 64 64c0 20.5-9.7 38.8-24.7 50.5c.5 3.9 .7 7.9 .7 12.1C424 197.4 363.8 256 288 256s-136-58.6-136-129.3c0-4.2 .2-8.2 .7-12.1c-15-11.7-24.7-30-24.7-50.5c0-35.3 28.7-64 64-64zm72 168c0 3.5 1.9 7.4 6.2 10.6s10.6 5.4 17.8 5.4s13.5-2.2 17.8-5.4s6.2-7 6.2-10.6s-1.9-7.4-6.2-10.6s-10.6-5.4-17.8-5.4s-13.5 2.2-17.8 5.4s-6.2 7-6.2 10.6zm24-32c10.4 0 20.1 3.2 27.4 8.6s12.6 13.7 12.6 23.4s-5.3 17.9-12.6 23.4s-17 8.6-27.4 8.6s-20.1-3.2-27.4-8.6s-12.6-13.7-12.6-23.4s5.3-17.9 12.6-23.4s17-8.6 27.4-8.6zm148.3 69c19.3-24.2 54.6-28.1 78.7-8.7s28.1 54.6 8.7 78.7c-30.9 38.6-67.7 68.2-107.7 88.1l0 36.9 48.6 0c3.9-27.1 27.2-48 55.4-48c30.9 0 56 25.1 56 56c0 33.7-14.7 66.8-24.3 85c-6.6 12.4-19.5 19-32.8 19L472 512c0 0 0 0-.1 0l-367.9 0c0 0 0 0-.1 0l-46.9 0c-13.3 0-26.2-6.7-32.8-19C14.7 474.8 0 441.7 0 408c0-30.9 25.1-56 56-56c28.2 0 51.6 20.9 55.4 48l48.6 0 0-36.9c-40.1-20-76.8-49.5-107.7-88.1C33 250.8 36.9 215.6 61 196.3s59.4-15.4 78.7 8.7c42 52.6 96.3 76.5 148.3 76.5s106.2-23.9 148.3-76.5zM103.9 496c0 0 0 0 .1 0l112 0 0-24c0-30.9-25.1-56-56-56c0 0 0 0 0 0l-56 0c-4.4 0-8-3.6-8-8c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 29.6 13.2 59.9 22.5 77.5C41.9 492 49 496 57.1 496l46.8 0zM176 401.8c9.1 2.1 17.5 5.8 24.9 10.9c5.4-34.4 35.2-60.7 71.1-60.7l32 0c35.9 0 65.7 26.3 71.1 60.7c7.4-5.1 15.8-8.9 24.9-10.9l0-43.7c0-3.1 1.8-5.9 4.6-7.2c39.6-18.9 76.1-47.7 106.7-85.9c13.8-17.3 11-42.4-6.2-56.2s-42.4-11-56.2 6.2c-44.9 56.1-103.7 82.5-160.8 82.5s-115.9-26.4-160.8-82.5c-13.8-17.3-39-20-56.2-6.2s-20 39-6.2 56.2c30.6 38.3 67.1 67 106.7 85.9c2.8 1.3 4.6 4.1 4.6 7.2l0 43.7zm40 25c10 12.4 16 28.1 16 45.3l0 24 112 0 0-24c0-17.1 6-32.9 16-45.3l0-2.7c0-30.9-25.1-56-56-56l-32 0c-30.9 0-56 25.1-56 56l0 2.7zM416 416c-30.9 0-56 25.1-56 56l0 24 112 0c0 0 0 0 .1 0l46.8 0c8.1 0 15.2-4 18.7-10.5c9.3-17.6 22.5-47.8 22.5-77.5c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 4.4-3.6 8-8 8l-56 0s0 0 0 0zM240 100a12 12 0 1 1 0 24 12 12 0 1 1 0-24zm84 12a12 12 0 1 1 24 0 12 12 0 1 1 -24 0z"></path>
        </svg>
      ),
    },
    {
      title: "Pets",
      icon: (
        <svg
          className="w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            d="M7.57 15.376c1.586-3.228 2.38-4.842 3.52-5.227a2.85 2.85 0 0 1 1.82 0c1.14.385 1.934 1.999 3.52 5.227l.878 1.79c.41.833.614 1.25.663 1.534c.201 1.179-.67 2.265-1.846 2.3c-.283.008-.725-.113-1.61-.356a17 17 0 0 0-1.01-.259a7.6 7.6 0 0 0-3.01 0c-.252.051-.505.12-1.01.26c-.885.242-1.327.363-1.61.355c-1.175-.035-2.047-1.121-1.846-2.3c.048-.284.253-.7.663-1.535zM6.145 5.527c.412 1.631 1.576 2.717 2.6 2.426c1.025-.292 1.522-1.85 1.11-3.48c-.412-1.631-1.576-2.717-2.6-2.426c-1.025.292-1.522 1.85-1.11 3.48Zm11.71 0c-.412 1.631-1.576 2.717-2.6 2.426c-1.025-.292-1.522-1.85-1.11-3.48c.412-1.631 1.576-2.717 2.6-2.426c1.025.292 1.522 1.85 1.11 3.48Zm-15.653 6.77c.45 1.205 1.508 1.937 2.363 1.635s1.183-1.524.733-2.73c-.45-1.204-1.508-1.936-2.363-1.634s-1.183 1.524-.733 2.73Zm19.596 0c-.45 1.205-1.508 1.937-2.363 1.635s-1.183-1.524-.733-2.73c.45-1.204 1.508-1.936 2.363-1.634s1.183 1.524.733 2.73Z"
          ></path>
        </svg>
      ),
    },
  ];
  const menuProducts = [
    { title: "Man Clothes", prod: ["Shirt", "T- shirt", "Pant", "Underwear"] },
    {
      title: "Accessories",
      prod: ["Belt", "Hat", "Watches", "Sunglasses"],
    },
    {
      title: "Shoes",
      prod: ["Sneakers", "Sandals", "Formal", "Casual"],
    },
    {
      title: "Bags",
      prod: ["Backpack", "Crossbody Bags", "Side Bags", "Slides"],
    },
    {
      title: "Woman Clothes",
      prod: ["Shirt", "T- shirt", "Pant", "Underwear"],
    },
  ];
  const gifts = [
    "Electronics & Gadget",
    "Music Instruments",
    "Fashion",
    "Home & Garden",
    "Bikes",
    "Gifts",
    "Beauty Care",
    "Dog Food",
  ];
  useEffect(() => {
    list.map((_, i) => {
      if (active === i && CateRef.current[i]) {
        return `${CateRef.current[i]!.classList.add(
          "border-l-4",
          "border-l-head"
        )}`;
      }
      return `${CateRef.current[i]!.classList.remove(
        "border-l-4",
        "border-l-head"
      )}`;
    });
    // Update heights when openIndex changes
    const newHeights = menuProducts.map((_, i) => {
      if (openIndex === i && ref.current[i]) {
        return `${ref.current[i]!.scrollHeight}px`;
      }
      return "0px";
    });
    setHeight(newHeights);
  }, [openIndex, active]);

  return (
    <section className="flex ">
      <div className={`w-1/4 h-full text-head`}>
        <ul className="*:border-b *:border-r *:bg-accent">
          {list.map((item, i) => (
            <li
              onMouseDown={() => setActive(i)}
              key={i}
              ref={(el) => {
                CateRef.current[i] = el;
              }}
              className={`px-2 py-3 text-center flex flex-col items-center space-y-1 max-w-[87.2px] cursor-pointer`}
            >
              {item.icon}
              <p className="text-[11px] w-full truncate">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full text-head px-4 py-3 text-sm">
        <ul className="*:py-1 *:w-full">
          {active !== 3 &&
            menuProducts.map((item, i) => (
              <li className="flex flex-col" key={i}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex items-center justify-between w-full cursor-pointer"
                >
                  <span className="font-semibold">{item.title}</span>
                  {openIndex === i ? (
                    <ChevronRight
                      size={16}
                      className="transform rotate-90 transition-transform duration-150"
                    />
                  ) : (
                    <ChevronRight
                      size={16}
                      className="transform rotate-0 transition-transform duration-300"
                    />
                  )}
                </button>
                <ul
                  key={i}
                  ref={(el) => {
                    ref.current[i] = el;
                  }}
                  style={{ height: height[i] }}
                  className={`border-l border-gray-300 pl-2 *:pl-1 *:py-1  overflow-hidden transition-[height] duration-300 ease-in-out`}
                >
                  {item.prod.map((p) => (
                    <li key={p} className="cursor-pointer">
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          {active === 3 && (
            <ul className="*:py-1 *:w-full">
              {gifts.map((item) => (
                <li className="font-semibold">{item}</li>
              ))}
            </ul>
          )}
        </ul>
      </div>
    </section>
  );
}
