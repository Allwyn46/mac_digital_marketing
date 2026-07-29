import type { MouseEventHandler } from "react";

type ServiceButtonProps = {
  ButtonTXT: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  count?: number;
};

const ServiceButton = ({
  ButtonTXT,
  isActive,
  onClick,
  count,
}: ServiceButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full text-sm font-medium border transition-colors duration-200 whitespace-nowrap
        ${
          isActive
            ? "bg-lime-400 border-lime-400 text-black"
            : "bg-transparent border-white/30 text-white hover:border-white/60"
        }`}
    >
      {ButtonTXT}
      {typeof count === "number" && (
        <span className={isActive ? "text-black/70" : "text-white/50"}>
          {" "}
          [{count}]
        </span>
      )}
    </button>
  );
};

export default ServiceButton;
