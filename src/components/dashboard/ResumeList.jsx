import Link from "next/link";
import { FileText, Pencil, Download, Plus } from "lucide-react";

export default function ResumeList() {
  // Later you’ll fetch resumes from database
  const resumes = [
    { id: 1, name: "Frontend Developer Resume" },
    { id: 2, name: "Backend Developer Resume" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {resumes.map((resume) => (
        <div
          key={resume.id}
          className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition-all group"
        >
          {/* Icon + Name */}
          <div className="flex items-center gap-3">
            <FileText className="text-indigo-600 group-hover:scale-110 transition-transform" size={28} />
            <h5 className="font-semibold text-lg text-gray-800">{resume.name}</h5>
          </div>

          {/* Actions */}
          <div className="mt-4 flex gap-4 text-sm font-medium">
            <Link
              href={`/dashboard/editor?id=${resume.id}`}
              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-800 transition"
            >
              <Pencil size={16} /> Edit
            </Link>
            <Link
              href={`/dashboard/export?id=${resume.id}`}
              className="flex items-center gap-1 text-green-600 hover:text-green-800 transition"
            >
              <Download size={16} /> Export
            </Link>
          </div>
        </div>
      ))}

      {/* Create New Resume */}
      <Link
        href="/dashboard/editor"
        className="p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-gray-500 hover:text-indigo-600 hover:border-indigo-600 transition group"
      >
        <Plus size={32} className="mb-2 group-hover:scale-110 transition-transform" />
        <span className="font-medium">Create New Resume</span>
      </Link>
    </div>
  );
}
