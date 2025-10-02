"use client";
import { useSelector } from "react-redux";

export default function LivePreview({ sections: propSections }) {
  const reduxSections = useSelector((state) => state.editor.sections);
  const sections = propSections ?? reduxSections;

  if (!sections || sections.length === 0) {
    return (
      <div className="p-6 border rounded-lg bg-gray-50 text-gray-500 text-center">
        ✨ Start typing in the editor to see a live preview here.
      </div>
    );
  }

  const getSection = (title) =>
    sections.find((s) => s.title.toLowerCase() === title.toLowerCase());

  const about = getSection("About");
  const skills = getSection("Skills");
  const exp = getSection("Experience");
  const edu = getSection("Education");
  const contact = getSection("Contact");

  return (
    // IMPORTANT: id used by html2canvas
    <div id="resume-preview" className="p-6 border rounded-lg bg-white shadow-sm space-y-8">
      {about && about.content && (
        <section>
          <h4 className="text-xl text-black font-bold pb-2">About</h4>
          <p className="text-gray-700 whitespace-pre-wrap">{about.content}</p>
        </section>
      )}

      {skills && skills.content.length > 0 && (
        <section>
          <h4 className="text-xl text-black font-bold pb-2">Skills</h4>
          <ul className="flex flex-wrap gap-2">
            {skills.content.map((skill, i) => (
              <li key={i} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                {skill || "—"}
              </li>
            ))}
          </ul>
        </section>
      )}

      {exp && exp.content.length > 0 && (
        <section>
          <h4 className="text-xl text-black font-bold pb-2">Experience</h4>
          {exp.content.map((job) => (
            <div key={job.id} className="mb-4">
              <h6 className="font-extralight pb-2 text-indigo-600">{job.title || "Untitled Role"}</h6>
              <p className="text-sm text-gray-600">
                {job.company} • {job.years}
              </p>
              <p className="text-gray-700 whitespace-pre-wrap">{job.desc}</p>
            </div>
          ))}
        </section>
      )}

      {edu && edu.content.length > 0 && (
        <section>
          <h4 className="text-xl text-black font-bold pb-2">Education</h4>
          {edu.content.map((ed) => (
            <div key={ed.id} className="mb-4">
              <h6 className="font-extralight pb-2 text-indigo-600">{ed.degree}</h6>
              <p className="text-sm text-gray-600">{ed.school} • {ed.years}</p>
            </div>
          ))}
        </section>
      )}

      {contact && Object.keys(contact.content || {}).length > 0 && (
        <section>
          <h4 className="text-xl text-black font-bold pb-2">Contact</h4>
          <div className="space-y-1 text-gray-700">
            {contact.content.name && <p>{contact.content.name}</p>}
            {contact.content.email && <p>Email: {contact.content.email}</p>}
            {contact.content.phone && <p>Phone: {contact.content.phone}</p>}
            {contact.content.link && (
              <p>
                Portfolio:{" "}
                <a href={contact.content.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">
                  {contact.content.link}
                </a>
              </p>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
