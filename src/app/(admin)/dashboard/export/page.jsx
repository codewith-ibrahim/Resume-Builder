"use client";
import { useEffect, useState } from "react";
import LivePreview from "../editor/components/LivePreview"; // relative path from export folder -> editor/components

export default function ExportPage() {
  const [savedSections, setSavedSections] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("resumeData");
    if (data) setSavedSections(JSON.parse(data));
  }, []);

  if (!savedSections) {
    return (
      <div className="p-6 text-gray-500 text-center">
        ⚠️ No saved resume found.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Saved Resume</h2>
      {/* pass savedSections as prop so LivePreview uses that instead of redux */}
      <LivePreview sections={savedSections} />
    </div>
  );
}
