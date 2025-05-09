import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
  ariaLabel,
  type = "button",
  disabled = false,
  external = false,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    px-6 py-2 rounded
    font-ibmPlexMono
    transition-all duration-200
    bg-[#0065A9] hover:bg-[#00528a] text-white
    mt-4
    ${className}
  `;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={baseClasses}
          onClick={onClick}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={baseClasses}
        onClick={onClick as any}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick as any}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
