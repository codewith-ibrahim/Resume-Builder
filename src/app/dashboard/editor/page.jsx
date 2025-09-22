import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionList from "./components/SectionList";
import LivePreview from "./components/LivePreview";

export default function EditorPage() {
  return (
    <>
      <Navbar />
      <main className="p-8 grid grid-cols-2 gap-6">
        <div>
          <h1 className="text-xl font-bold mb-4">Edit Sections</h1>
          <SectionList />
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4">Live Preview</h1>
          <LivePreview />
        </div>
      </main>
      <Footer />
    </>
  );
}
