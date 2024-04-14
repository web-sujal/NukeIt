import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-light p-10 text-dark md:px-20 md:py-10 dark:bg-dark dark:text-white">
      <Header />

      <div className="flex h-full w-full items-center justify-center gap-6">
        {/* left side */}
        <Sidebar />

        {/* right side */}
        <MainContent />
      </div>
    </div>
  );
}
