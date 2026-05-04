import { useId, type InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hint?: string;
};

export default function Input({ label, hint, id, className = "", ...rest }: Props) {
  const reactId = useId();
  const inputId = id ?? reactId;

  if (!label) {
    return <input id={inputId} className={`input ${className}`} {...rest} />;
  }
  return (
    <label htmlFor={inputId} className="flex flex-col gap-1.5">
      <span className="text-[12px] font-medium text-ink-700">{label}</span>
      <input id={inputId} className={`input ${className}`} {...rest} />
      {hint && <span className="text-[12px] text-ink-500">{hint}</span>}
    </label>
  );
}
