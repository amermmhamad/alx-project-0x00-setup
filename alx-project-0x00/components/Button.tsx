import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  Small: "px-3 py-1 text-sm",
  Medium: "px-4 py-2 text-base",
  Large: "px-5 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({
  title,
  styles,
  className,
  size = "Medium",
}) => {
  const sizeClass = sizeClasses[size];

  const baseClass =
    "inline-flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 transition";

  return (
    <button
      className={`${baseClass} ${sizeClass} ${styles || ""} ${className || ""}`}
    >
      {title}
    </button>
  );
};

export default Button;
