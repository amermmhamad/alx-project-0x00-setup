import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const shapeClasses = {
  sm: "rounded-sm",
  md: "rounded-md",
  full: "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  title,
  size = "md",
  shape = "md",
  className,
}) => {
  const sizeClass = sizeClasses[size];
  const shapeClass = shapeClasses[shape];

  const baseClass =
    "inline-flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 transition";

  return (
    <button
      className={`${baseClass} ${sizeClass} ${shapeClass} ${className || ""}`}
    >
      {title}
    </button>
  );
};

export default Button;
