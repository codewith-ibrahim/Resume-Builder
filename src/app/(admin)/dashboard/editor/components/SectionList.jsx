"use client";
import { useSelector } from "react-redux";
import SectionForm from "./SectionForm";

export default function SectionList() {
  const sections = useSelector((state) => state.editor.sections);

  return (
    <div>
      {sections.map((section) => (
        <SectionForm key={section.id} section={section} />
      ))}
    </div>
  );
}
