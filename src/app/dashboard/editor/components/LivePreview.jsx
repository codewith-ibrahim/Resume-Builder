"use client";
import { useSelector } from "react-redux";

export default function LivePreview() {
  const sections = useSelector((state) => state.editor.sections);

  if (!sections || sections.length === 0) {
    return (
      <div className="p-6 border rounded-lg bg-gray-50 text-gray-500 text-center">
        ✨ Start typing in the editor to see live preview here.
      </div>
    );
  }

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      {sections.map((section) => (
        <div
          key={section.id}
          className="mb-6 last:mb-0 p-4 rounded-lg bg-gray-50"
        >
          <h2 className="font-semibold text-xl text-gray-800 mb-2">
            {section.title}
          </h2>
          <p className="text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
            {section.content?.trim() || "No content yet."}
          </p>
        </div>
      ))}
    </div>
  );
}
