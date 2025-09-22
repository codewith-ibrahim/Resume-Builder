"use client";
import { useDispatch } from "react-redux";
import { updateSection } from "@/features/editor/editorSlice";

export default function SectionForm({ section }) {
  const dispatch = useDispatch();

  return (
    <div className="mb-4">
      <label className="block font-semibold">{section.title}</label>
      <textarea
        className="w-full p-2 border rounded"
        value={section.content}
        onChange={(e) =>
          dispatch(updateSection({ id: section.id, content: e.target.value }))
        }
      />
    </div>
  );
}
