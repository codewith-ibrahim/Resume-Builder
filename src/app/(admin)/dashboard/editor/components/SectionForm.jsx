"use client";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAbout,
  addSkill, updateSkill, removeSkill,
  addExperience, updateExperience, removeExperience,
  addEducation, updateEducation, removeEducation,
  updateContact,
} from "@/features/editor/editorSlice";

import { PlusCircle, Trash2, Download } from "lucide-react";

export default function ResumeForm() {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.editor.sections);

  const getSection = (title) =>
    sections.find((s) => s.title.toLowerCase() === title.toLowerCase());

  const about = getSection("About");
  const skills = getSection("Skills");
  const exp = getSection("Experience");
  const edu = getSection("Education");
  const contact = getSection("Contact");

  const baseField =
    "w-full p-2 border rounded text-sm text-gray-900 " +
    "focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 focus:text-indigo-600";

  return (
    <form className="space-y-10">
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <h5 className="text-sm font-semibold pb-4 text-gray-900">About</h5>
        <textarea
          rows={4}
          className={`${baseField} resize-none`}
          placeholder="Write a short professional summary..."
          value={about.content}
          onChange={(e) => dispatch(updateAbout(e.target.value))}
        />
      </div>
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-sm font-semibold pb-4 text-gray-900">Skills</h5>
          <button
            type="button"
            onClick={() => dispatch(addSkill(""))}
            className="flex items-center gap-1 text-indigo-600"
          >
            <PlusCircle size={18} /> Add Skill
          </button>
        </div>
        {skills.content.map((skill, i) => (
  <div key={i} className="flex items-center gap-2 mb-2">
    <input
      className={baseField}
      value={skill}
      onChange={(e) =>
        dispatch(updateSkill({ index: i, value: e.target.value }))
      }
      placeholder="e.g. React"
    />
    <button
      type="button"
      onClick={() => dispatch(removeSkill(i))}
      className="text-red-500"
    >
      <Trash2 size={16} />
    </button>
  </div>
))}

      </div>
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-sm font-semibold pb-4 text-gray-900">Experience</h5>
          <button
            type="button"
            onClick={() =>
              dispatch(addExperience({ title: "", company: "", years: "", desc: "" }))
            }
            className="flex items-center gap-1 text-indigo-600"
          >
            <PlusCircle size={18} /> Add Job
          </button>
        </div>
        {exp.content.map((job) => (
          <div key={job.id} className="border p-4 rounded-lg mb-3 space-y-2">
            <input
              className={baseField}
              placeholder="Job Title"
              value={job.title}
              onChange={(e) =>
                dispatch(updateExperience({ id: job.id, field: "title", value: e.target.value }))
              }
            />
            <input
              className={baseField}
              placeholder="Company"
              value={job.company}
              onChange={(e) =>
                dispatch(updateExperience({ id: job.id, field: "company", value: e.target.value }))
              }
            />
            <input
              className={baseField}
              placeholder="Years (e.g. 2021-2024)"
              value={job.years}
              onChange={(e) =>
                dispatch(updateExperience({ id: job.id, field: "years", value: e.target.value }))
              }
            />
            <textarea
              className={`${baseField} resize-none`}
              placeholder="Description"
              value={job.desc}
              onChange={(e) =>
                dispatch(updateExperience({ id: job.id, field: "desc", value: e.target.value }))
              }
            />
            <button
              type="button"
              onClick={() => dispatch(removeExperience(job.id))}
              className="text-red-500 flex items-center gap-1"
            >
              <Trash2 size={16} /> Remove
            </button>
          </div>
        ))}
      </div>
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-sm font-semibold text-gray-900 pb-4">Education</h5>
          <button
            type="button"
            onClick={() =>
              dispatch(addEducation({ degree: "", school: "", years: "" }))
            }
            className="flex items-center gap-1 text-indigo-600"
          >
            <PlusCircle size={18} /> Add Degree
          </button>
        </div>
        {edu.content.map((ed) => (
          <div key={ed.id} className="border p-4 rounded-lg mb-3 space-y-2">
            <input
              className={baseField}
              placeholder="Degree / Program"
              value={ed.degree}
              onChange={(e) =>
                dispatch(updateEducation({ id: ed.id, field: "degree", value: e.target.value }))
              }
            />
            <input
              className={baseField}
              placeholder="University / School"
              value={ed.school}
              onChange={(e) =>
                dispatch(updateEducation({ id: ed.id, field: "school", value: e.target.value }))
              }
            />
            <input
              className={baseField}
              placeholder="Years"
              value={ed.years}
              onChange={(e) =>
                dispatch(updateEducation({ id: ed.id, field: "years", value: e.target.value }))
              }
            />
            <button
              type="button"
              onClick={() => dispatch(removeEducation(ed.id))}
              className="text-red-500 flex items-center gap-1"
            >
              <Trash2 size={16} /> Remove
            </button>
          </div>
        ))}
      </div>
      <div className="p-6 bg-white rounded-xl border shadow-sm">
        <h5 className="text-sm font-semibold mb-4 text-gray-900 pb-4">Contact</h5>
        {["name", "email", "phone", "link"].map((field) => (
          <input
            key={field}
            className={`${baseField} mb-2`}
            placeholder={field === "link" ? "LinkedIn / Portfolio" : field}
            value={contact.content[field] || ""}
            onChange={(e) =>
              dispatch(updateContact({ [field]: e.target.value }))
            }
          />
        ))}
      </div>
    </form>
  );
}
