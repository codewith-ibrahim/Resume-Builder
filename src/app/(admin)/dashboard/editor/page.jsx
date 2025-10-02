"use client";

import ResumeForm from "./components/SectionForm";
import LivePreview from "./components/LivePreview";
import Button from "@/components/ui/buttons"; // aapke repo me ye filename maujood hai
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function EditorPage() {
  const sections = useSelector((state) => state.editor.sections);
  const router = useRouter();

  // Export visible preview to PDF
  const handleExportPDF = async () => {
    const preview = document.getElementById("resume-preview");
    if (!preview) return alert("Preview element not found.");

    // increase scale for better quality
    const canvas = await html2canvas(preview, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  // Save the redux sections to localStorage and navigate to export page
  const handleSaveAndView = () => {
    if (!sections) return alert("Nothing to save.");
    localStorage.setItem("resumeData", JSON.stringify(sections));
    // adjust path if your route is different
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

      {/* Buttons row spans both columns */}
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
