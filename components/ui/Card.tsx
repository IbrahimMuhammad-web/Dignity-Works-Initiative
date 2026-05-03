import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "article" | "section";
  tone?: "sand" | "white" | "forest";
};

export function Card({
  as: Tag = "div",
  tone = "sand",
  className,
  children,
  ...props
}: CardProps) {
  const tones: Record<NonNullable<CardProps["tone"]>, string> = {
    sand: "bg-sand-100 text-ink-900",
    white: "bg-white text-ink-900",
    forest: "bg-forest-900 text-sand-50",
  };
  return (
    <Tag
      className={cn(
        "rounded-card p-6 shadow-soft transition duration-[240ms] ease-dwi",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
