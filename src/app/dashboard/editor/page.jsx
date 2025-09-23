// app/dashboard/editor/page.jsx
import LivePreview from "./components/LivePreview";
import SectionForm from "./components/SectionForm";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function EditorPage() {
  return (
    <div className="grid grid-cols-2 gap-6 h-[calc(100vh-88px)]">
      <div className="space-y-6 overflow-y-auto pr-4">
        <SectionForm />
        <ThemeSwitcher />
      </div>
      <div className="relative">
        <div className="sticky top-6">
          <LivePreview />
        </div>
      </div>
    </div>
  );
}
