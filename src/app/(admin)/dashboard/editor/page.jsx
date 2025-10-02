"use client";

import ResumeForm from "./components/SectionForm";
import LivePreview from "./components/LivePreview";
import Button from "@/components/ui/buttons";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export default function EditorPage() {
  const sections = useSelector((state) => state.editor.sections);
  const router = useRouter();

  const handleExportPDF = async () => {
    const preview = document.getElementById("resume-preview");
    if (!preview) return alert("Preview element not found.");

    if (preview.innerHTML.trim() === "") {
      return alert(
        "Resume preview is empty, please add content before exporting."
      );
    }

    try {
      const imgData = await toPng(preview, { cacheBust: true });

      if (!imgData) {
        return alert("Failed to generate image from preview.");
      }

      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();

      const img = new Image();
      img.src = imgData;

      img.onload = () => {
        const pdfHeight = (img.height * pdfWidth) / img.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("my-resume.pdf");
      };
    } catch (err) {
      console.error("PDF export failed:", err);
      alert("Something went wrong while exporting PDF.");
    }
  };
  const handleSaveAndView = () => {
    if (!sections) return alert("Nothing to save.");
    localStorage.setItem("resumeData", JSON.stringify(sections));
    router.push("/dashboard/export");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div>
        <ResumeForm />
      </div>

      <div>
        <LivePreview />
      </div>
      <div className="col-span-2 flex justify-center gap-4 mt-4">
        <Button variant="primary" onClick={handleExportPDF}>
          Export as PDF
        </Button>
        <Button variant="secondary" onClick={handleSaveAndView}>
          Save & View
        </Button>
      </div>
    </div>
  );
}
