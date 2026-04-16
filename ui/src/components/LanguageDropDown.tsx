import { useMemo, useState } from "react";
import { countries } from "../utils/countries";

export const LanguageDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("rus");

  const currentCountry = useMemo(() => {
    return countries.find((country) => country.id === selectedCountry);
  }, [selectedCountry]);

  const CurrentIcon = currentCountry?.icon;

  return (
    <div className="relative inline-block">
      {/* Кнопка */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer gap-1 flex items-center px-3 py-1 min-w-35 rounded-lg bg-(--header) hover:bg-(--hover-card) transition-colors"
      >
        <img src={CurrentIcon} alt="" className="w-6 h-6" />
        <p className="text-(--text) text-base">{currentCountry?.title}</p>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full bg-(--header) rounded-lg shadow-lg z-50 overflow-hidden">
          {countries.map((country) => {
            const isSelected = country.id === selectedCountry;

            return (
              <div
                key={country.id}
                onClick={() => {
                  setSelectedCountry(country.id);
                  setIsOpen(false);
                }}
                className={`
                    cursor-pointer flex items-center gap-2 px-3 py-1 transition-colors
                    ${isSelected ? "bg-(--selected-card)" : "hover:bg-(--hover-card)"}
                `}
              >
                <img src={country.icon} className="w-5 h-5" />
                <span className="text-(--text)">{country.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  //   return (
  //     <div className="min-w-35 rounded-lg bg-(--header) flex flex-col">
  //       {countries.map((country) => {
  //         const Icon = country.icon;

  //         return (
  //           <div
  //             key={country.id}
  //             onClick={() => {
  //               setSelectedCountry(country.id);
  //               setIsOpen(false);
  //             }}
  //             className="pointer gap-1 flex items-center justify-start px-3 py-1 min-w-35 rounded-lg bg-(--header) hover:bg-(--hover-card) transition-colors"
  //           >
  //             <img src={Icon} alt="" className="w-6 h-6" />
  //             <p className="text-(--text) text-base">{country.title}</p>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
};
