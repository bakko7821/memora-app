import { useMemo, useState } from "react";
import { countries } from "../utils/countries";

export const LanguageDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("rus");

  const currentCountry = useMemo(() => {
    return countries.find((country) => country.id === selectedCountry);
  }, [selectedCountry]);

  const CurrentIcon = currentCountry?.icon;

  if (!isOpen)
    return (
      <div
        onClick={() => setIsOpen(true)}
        className="pointer gap-1 flex items-center justify-start px-3 py-1 min-w-35 rounded-lg bg-(--header) hover:bg-(--hover-card) transition-colors"
      >
        <img src={CurrentIcon} alt="" className="w-6 h-6" />
        <p className="text-(--text) text-base">{currentCountry?.title}</p>
      </div>
    );

  return <div className=""></div>;
};
