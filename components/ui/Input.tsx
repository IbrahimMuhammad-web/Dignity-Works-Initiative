import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...rest }: Props) {
  return <input className={`input ${className}`} {...rest} />;
}
