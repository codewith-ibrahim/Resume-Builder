import Hero from "@/components/Hero";
import Testimonial from "@/components/testimonial/Testimonial";

export default function HomePage() {
  return (
    <>
      <Hero
        badge="🎓 Resume Builder"
        title={
          <>
            Build a Professional{" "}
            <span className="text-[var(--primary-indigo)]">Resume</span> in
            Minutes
          </>
        }
        description="Create professional, ATS-friendly resumes in minutes. Choose from stunning templates, add your details, and let AI optimize your words for impact."
        primaryBtn={{ label: "Resume Example", href: "/resume-example" }}
        secondaryBtn={{ label: "View Templates", href: "/resume-template" }}
        image={{ src: "/hero-bg.png", alt: "Resume Illustration" }}
      />

      <Testimonial />
    </>
  );
}
