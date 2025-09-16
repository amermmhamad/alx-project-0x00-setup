export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  size: "sm" | "md" | "lg";
  shape: "sm" | "md" | "full";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}
