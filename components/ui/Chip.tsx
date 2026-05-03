import { forwardRef } from "react";
import { cn } from "@/lib/cn";

type ChipProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  as?: "button" | "span";
};

export const Chip = forwardRef<HTMLButtonElement, ChipProps>(function Chip(
  { selected, className, children, as = "button", ...props },
  ref,
) {
  const cls = cn(
    "inline-flex items-center gap-1.5 rounded-full border px-4 py-2",
    "text-caption font-medium transition duration-[240ms] ease-dwi",
    selected
      ? "border-forest-600 bg-forest-600 text-sand-50"
      : "border-forest-600/30 bg-transparent text-forest-600 hover:border-forest-600",
    className,
  );

  if (as === "span") {
    return (
      <span className={cls}>
        {children}
      </span>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      aria-pressed={selected}
      className={cls}
      {...props}
    >
      {children}
    </button>
  );
});
