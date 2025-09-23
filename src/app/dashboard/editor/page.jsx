// app/dashboard/editor/page.jsx
import LivePreview from "./components/LivePreview";
import SectionForm from "./components/SectionForm";
import SectionList from "./components/SectionList";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function EditorPage() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="space-y-6">
        <SectionForm />
        <SectionList />
        <ThemeSwitcher />
      </div>
      <LivePreview />
    </div>
  );
}
