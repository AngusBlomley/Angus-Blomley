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
    px-4 py-1.5 rounded-md text-sm
    font-ibmPlexMono
    border border-gray-300 dark:border-gray-600
    bg-transparent hover:bg-gray-100 dark:hover:bg-white/10
    text-theme-text-light dark:text-theme-text-dark
    transition-colors
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
