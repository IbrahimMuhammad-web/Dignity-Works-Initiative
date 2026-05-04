import type { SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
};

export default function Select({ options, className = "", ...rest }: Props) {
  return (
    <select className={`input ${className}`} {...rest}>
      <option value="">Select…</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
