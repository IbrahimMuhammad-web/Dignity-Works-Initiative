import Card from "@/components/ui/Card";

const stories = [
  {
    name: "Halima",
    role: "Cleaning, Kano",
    quote:
      "Three families now book me every week. My sons are back in school.",
  },
  {
    name: "Musa",
    role: "Errands, Kaduna",
    quote:
      "My imam vouched for me. Six months later, I am training two others.",
  },
  {
    name: "Fatima",
    role: "Cooking, Zaria",
    quote:
      "I cook the way my grandmother taught me. Patience, then more patience.",
  },
];

export const metadata = { title: "Stories — DWI" };

export default function StoriesPage() {
  return (
    <div>
      <header className="bg-green-700 p-6 text-center text-white">
        <h1 className="text-2xl font-bold">Stories from the network</h1>
        <p className="mt-2 text-sm">Real people, real work.</p>
      </header>
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-3 md:grid-cols-3">
          {stories.map((s) => (
            <Card key={s.name}>
              <p className="text-sm text-gray-800">&ldquo;{s.quote}&rdquo;</p>
              <div className="mt-3 text-sm font-semibold">{s.name}</div>
              <div className="text-xs text-gray-500">{s.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
