import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell">
      <Header />

      <div className="site-page">
        <main className="site-main">{children}</main>
        <Footer />
      </div>
    </div>
  );
}