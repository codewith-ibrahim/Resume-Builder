import React from "react";
import ResumeTemplate from "@/components/Resume";
import { resumeTemplates } from "@/data/resumeTemplates";
import Hero from "@/components/Hero";

const Page = () => {
  return (
    <>
      <Hero
        badge="📄 Why Choose Our Resume Templates?"
        title={
          <>
            Professionally designed {" "}
            <span className="text-[var(--primary-indigo)]">Resume Templates</span>
          </>
        }
        description="Our resume templates are built to highlight your skills, achievements, and career journey in a way that hiring managers notice. Har template ATS-friendly hai, easy to customize hai, aur proven design follow karta hai."
        primaryBtn={{ label: "Try for Free", href: "/dashboard" }}
      />

      <section className="resume-template-sec w-full min-h-screen bg-gray-50 py-8">
        <div className="customContainer max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Resume Templates
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our collection of professionally designed resume
              templates that help you stand out to employers
            </p>
          </div>

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

          {/* <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 mb-4">
              We're constantly adding new templates. Check back soon or contact us for custom templates.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request Custom Template
            </button>
          </div>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default Page;
