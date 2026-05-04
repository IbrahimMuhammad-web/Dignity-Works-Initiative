import type { HTMLAttributes } from "react";

type Tone = "sand" | "white" | "forest";

type Props = HTMLAttributes<HTMLDivElement> & {
  tone?: Tone;
};

const tones: Record<Tone, string> = {
  sand: "bg-sand-100 text-ink-900",
  white: "bg-white text-ink-900",
  forest: "bg-forest-900 text-sand-50",
};

export default function Card({
  tone = "white",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <div
      className={`rounded-card p-6 shadow-soft transition duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] ${tones[tone]} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
