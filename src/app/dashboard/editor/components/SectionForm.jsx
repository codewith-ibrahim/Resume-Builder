"use client";
import { useDispatch, useSelector } from "react-redux";
import { updateSection } from "@/features/editor/editorSlice";
import { PlusCircle } from "lucide-react";

export default function ResumeForm() {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.editor.sections);

  if (!sections || sections.length === 0) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
        ⚠️ No resume sections found
      </div>
    );
  }

  return (
    <form className="space-y-8">
      {sections.map((section) => (
        <div
          key={section.id}
          className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
        >
          {/* Section Title */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {section.title}
            </h3>

            {section.title.toLowerCase() === "skills" && (
              <button
                type="button"
                className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 font-medium"
              >
                <PlusCircle size={18} /> Add Skill
              </button>
            )}
          </div>

          {/* === Dynamic Inputs for Each Section === */}
          {section.title.toLowerCase() === "about" && (
            <textarea
              rows={4}
              className="w-full text-gray-900 p-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         focus:border-indigo-500 transition-all duration-200 resize-none"
              placeholder="Write a short professional summary about yourself..."
              value={section.content}
              onChange={(e) =>
                dispatch(updateSection({ id: section.id, content: e.target.value }))
              }
            />
          )}

          {section.title.toLowerCase() === "skills" && (
            <input
              type="text"
              className="w-full text-gray-900 p-3 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         focus:border-indigo-500 transition-all duration-200"
              placeholder="Add your key skills (e.g. React, Node.js, UI/UX)"
              value={section.content}
              onChange={(e) =>
                dispatch(updateSection({ id: section.id, content: e.target.value }))
              }
            />
          )}

          {section.title.toLowerCase() === "experience" && (
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Job Title"
              />
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Company Name"
              />
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Years (e.g. 2020 - 2023)"
              />
              <textarea
                rows={3}
                className="w-full p-3 border rounded-lg resize-none"
                placeholder="Describe your role and achievements..."
              />
            </div>
          )}

          {section.title.toLowerCase() === "education" && (
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Degree / Program"
              />
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="University / School"
              />
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Years (e.g. 2019 - 2023)"
              />
            </div>
          )}

          {section.title.toLowerCase() === "contact" && (
            <div className="space-y-4">
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="w-full p-3 border rounded-lg"
                placeholder="Email Address"
              />
              <input
                type="tel"
                className="w-full p-3 border rounded-lg"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="w-full p-3 border rounded-lg"
                placeholder="LinkedIn / Portfolio URL"
              />
            </div>
          )}

          {/* Footer (helper text + char count) */}
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <span className="italic">Tip: Keep it short and relevant</span>
            <span>{section.content?.length || 0} chars</span>
          </div>
        </div>
      ))}
    </form>
  );
}
