import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "gold";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium " +
  "whitespace-nowrap " +
  "transition duration-[240ms] ease-dwi select-none " +
  "disabled:opacity-50 disabled:cursor-not-allowed " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600";

const sizes: Record<Size, string> = {
  md: "h-12 px-5 text-[15px]",
  lg: "h-14 px-6 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-600 text-sand-50 shadow-soft hover:bg-forest-700 active:bg-forest-900",
  outline:
    "border border-forest-600 text-forest-600 bg-transparent hover:bg-forest-600/5 active:bg-forest-600/10",
  ghost: "text-forest-600 hover:bg-sand-100 active:bg-sand-200",
  gold: "bg-gold-400 text-forest-900 hover:bg-gold-500 active:bg-gold-500/90",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, children, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
});

type LinkButtonProps = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className" | "children">;

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
