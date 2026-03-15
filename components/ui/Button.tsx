import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  className?: string;
  size?: "default" | "large";
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  size = "default",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer";

  const sizeStyles = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  const variantStyles = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25 active:scale-[0.98]",
    secondary:
      "bg-surface-800 text-surface-100 border border-surface-700 hover:bg-surface-700 hover:border-surface-600 active:scale-[0.98]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <button className={combinedStyles}>{children}</button>;
}
