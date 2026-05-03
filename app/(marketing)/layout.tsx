import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";
import { WhatsAppFab } from "@/components/patterns/WhatsAppFab";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">{children}</main>
      <WhatsAppFab />
      <BottomNav />
    </>
  );
}
