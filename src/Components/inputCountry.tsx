import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useEffect, useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
countries.registerLocale(enLocale);
export default function InputCountry() {
  const [allCountries, setAllCountries] = useState<string[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    const countryList = countries.getNames("en", { select: "official" });
    const sortedCountries = Object.values(countryList).sort();
    setAllCountries(sortedCountries);
    setFilteredCountries(sortedCountries);
  }, []);

  const handleChange = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredCountries(
      allCountries.filter((country) =>
        country.toLowerCase().includes(value.toLowerCase())
      )
    );
    setShowDropdown(true);
  };

  const handleSelect = (country: string) => {
    setInputValue(country);
    setShowDropdown(false);
  };

  return (
    <form
      className="w-full flex items-center px-4 relative group space-y-6 rounded-lg border hover:border-head focus-within:outline focus-within:border-0 focus-within:outline-primary"
      onFocus={() => {
        setIsFocused(true);
        setShowDropdown(true);
      }}
      onBlur={() => {
        setTimeout(() => {
          setIsFocused(false);
          setShowDropdown(false);
        }, 200);
      }}
    >
      {/* Floating Label */}
      <label
        htmlFor="country"
        className={`absolute z-10 transition-all duration-300 px-2 w-fit h-fit left-5 text-head capitalize bg-white text-sm ${
          isFocused || inputValue
            ? "-top-2 left-0 text-xs text-primary"
            : "top-3 left-6"
        }`}
      >
        country
      </label>

      {/* Input */}
      <input
        type="text"
        name="country"
        value={inputValue}
        onChange={handleChange}
        placeholder="Select Country"
        className="relative top-3 outline-0 w-full h-full px-3 placeholder:text-white group-focus-within:placeholder:text-gray-400"
        autoComplete="off"
      />
      {isFocused ? (
        <IoMdArrowDropup className={`text-dark-gray transform -mb-[1px]`} />
      ) : (
        <IoMdArrowDropdown className={`text-dark-gray transform`} />
      )}

      {/* Dropdown */}
      {showDropdown && filteredCountries.length > 0 && (
        <ul className="absolute top-11 left-0 z-20 bg-white border border-gray-200 mt-1 w-full max-h-60 overflow-y-auto rounded-md shadow-md">
          {filteredCountries.map((country, idx) => (
            <li
              key={idx}
              onMouseDown={() => handleSelect(country)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
