import React from "react";
import ResumeTemplate from "@/components/Resume";
import { resumeTemplates } from "@/data/resumeTemplates";
import Testimonial from "@/components/testimonial/Testimonial";
import Hero from "@/components/Hero";


const Page = () => {
  return (
    <>
      <Hero
        badge="📄 Resume Examples & Templates that Get Interviews"
        title={
          <>
            Create an Impactful{" "}
            <span className="text-[var(--primary-indigo)]">Resume</span>
          </>
        }
        description="Whether you're switching careers or aiming for a promotion, use these real-world resume examples to model your own. Har example mein clear achievements, action verbs, aur quantifiable results diye gaye hain — bas copy + personalize karein."
        primaryBtn={{ label: "Try for Free", href: "/dashboard" }}
      />

      <section className="resume-template-sec w-full min-h-screen bg-gray-50 py-8">
        <div className="customContainer max-w-7xl mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resumeTemplates.map((template) => (
              <ResumeTemplate
                key={template.id}
                id={template.id}
                name={template.name}
                category={template.category}
                image={template.image}
                description={template.description}
                isPremium={template.isPremium}
                isPopular={template.isPopular}
              />
            ))}
          </div>

          <div className="mt-12">
            <div className="bg-[#fafafa] rounded-lg shadow-sm p-6 border border-gray-300">
              <p className="text-[1.5rem] font-bold text-[#425061] mb-4">
                Are our resume templates ATS-friendly?
              </p>
              <p className="text-[#425061] mb-4">
                <span className="font-[700]">Absolutely</span> — all our resume
                templates are entirely ATS-friendly. We ensure that each
                template uses a clean layout, simple fonts, and clear headings,
                making it easy for Applicant Tracking Systems (ATS) to read and
                process your information.
              </p>
              <p className="text-[#425061] mb-4">
                Our templates are optimized to include proper keyword placement
                and avoid complex graphics, so you can be confident that your
                resume will pass through ATS filters and reach recruiters.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Page;
