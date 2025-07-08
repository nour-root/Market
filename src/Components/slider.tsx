import { useState, type ChangeEvent } from "react";
import "../customSlider.css";
export default function Slider() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  const min = 0;
  const max = 300;
  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };
  const getPercent = (value: number) => ((value - min) / (max - min)) * 100;
  return (
    <div className="w-full max-w-md">
      <h3 className="font-medium text-gray-800 mb-4 text-sm">Price Range</h3>

      <div className={`relative h-6`}>
        <div className="relative group">
          <input
            type="range"
            min={min}
            max={max}
            value={minPrice}
            onChange={handleMinChange}
            className="absolute w-full appearance-none h-1 bg-transparent z-20 left-0"
          />
          <div
            className="absolute -top-10 -translate-x-1/2 z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
            style={{ left: `${getPercent(minPrice)}%` }}
          >
            <div className="relative bg-dark-gray text-white rounded-md text-xs px-2 py-1 shadow">
              ${minPrice}
              <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-dark-gray" />
            </div>
          </div>
        </div>
        <div className="relative group">
          <input
            type="range"
            max={max}
            min={min}
            value={maxPrice}
            onChange={handleMaxChange}
            className="absolute w-full appearance-none  h-1 bg-transparent z-20 right-0"
          />
          <div
            className="absolute -top-10 -translate-x-[30px] z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition"
            style={{ left: `${getPercent(maxPrice)}%` }}
          >
            <div className="relative bg-dark-gray text-white rounded-md text-xs px-2 py-1 shadow">
              ${maxPrice}
              <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-dark-gray" />
            </div>
          </div>
        </div>

        <div className="absolute w-full h-[2px] bg-primary/40 z-10 rounded" />

        <div
          className="absolute h-[2px] bg-primary z-20 rounded"
          style={{
            left: `${getPercent(minPrice)}%`,
            right: `${100 - getPercent(maxPrice)}%`,
          }}
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          type="number"
          max={max}
          min={min}
          value={minPrice}
          onChange={handleMinChange}
          className="border rounded-md px-3 py-1 w-full"
        />
        <span>-</span>
        <input
          type="number"
          max={max}
          min={min}
          value={maxPrice}
          onChange={handleMaxChange}
          className="border rounded-md px-3 py-1 w-full"
        />
      </div>
    </div>
  );
}
