import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "gold" | "ghost";
type Size = "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-medium " +
  "transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] select-none " +
  "disabled:opacity-50 disabled:cursor-not-allowed " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[14px]",
  lg: "h-[3.25rem] px-6 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-600 text-sand-50 shadow-soft hover:bg-forest-700 active:bg-forest-900",
  outline:
    "border border-forest-600/70 text-forest-600 bg-transparent hover:bg-forest-600/5 active:bg-forest-600/10",
  gold: "bg-gold-400 text-forest-900 shadow-soft hover:bg-gold-500 active:bg-gold-500/90",
  ghost: "text-forest-600 hover:bg-sand-100 active:bg-sand-200",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
