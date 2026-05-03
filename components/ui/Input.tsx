import { forwardRef, useId } from "react";
import { cn } from "@/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, className, id, ...props },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-caption text-ink-700">
        {label}
      </label>
      <input
        id={inputId}
        ref={ref}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy}
        className={cn(
          "h-12 rounded-btn border bg-white px-4 text-body text-ink-900",
          "placeholder:text-ink-500",
          "transition duration-[240ms] ease-dwi",
          error
            ? "border-clay-500 focus:border-clay-500"
            : "border-sand-200 focus:border-forest-600",
          className,
        )}
        {...props}
      />
      {hint && !error && (
        <span id={`${inputId}-hint`} className="text-caption text-ink-500">
          {hint}
        </span>
      )}
      {error && (
        <span id={`${inputId}-error`} className="text-caption text-clay-500">
          {error}
        </span>
      )}
    </div>
  );
});
