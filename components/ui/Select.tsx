import { useId, type SelectHTMLAttributes } from "react";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
};

export default function Select({
  label,
  options,
  placeholder = "Select…",
  id,
  className = "",
  ...rest
}: Props) {
  const reactId = useId();
  const selId = id ?? reactId;

  const field = (
    <select id={selId} className={`input appearance-none ${className}`} {...rest}>
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );

  if (!label) return field;

  return (
    <label htmlFor={selId} className="flex flex-col gap-1.5">
      <span className="text-[12px] font-medium text-ink-700">{label}</span>
      {field}
    </label>
  );
}
