import Header from "@/components/Header/page";
import PageContent from "@/components/PageContent/page";
import NavBar from "@/components/NavBar/page";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <NavBar />
      <PageContent />
    </div>
  );
}
