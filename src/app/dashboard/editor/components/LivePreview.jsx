"use client";
import { useSelector } from "react-redux";

export default function LivePreview() {
  const sections = useSelector((state) => state.editor.sections);

  return (
    <div className="p-4 border rounded bg-gray-50">
      {sections.map((section) => (
        <div key={section.id} className="mb-4">
          <h2 className="font-bold text-lg">{section.title}</h2>
          <p>{section.content || "No content yet."}</p>
        </div>
      ))}
    </div>
  );
}
