import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../assets/icons/arrow-narrow-left-svgrepo-com.svg?react";
interface BackButtonProps {
  path?: string;
}

export const BackButton = ({ path }: BackButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        if (path !== undefined) {
          navigate(`/${path}`);
        } else {
          navigate(-1);
        }
      }}
      className="cursor-pointer flex gap-1 items-center justify-center group"
    >
      <BackArrowIcon
        width={24}
        height={24}
        className="text-(--text-secondary) group-hover:text-(--hover-primary) transition-colors"
      />
      <p className="text-(--text-secondary) text-base group-hover:text-(--hover-primary) transition-colors">
        Назад
      </p>
    </button>
  );
};
