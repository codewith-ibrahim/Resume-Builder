"use client";
import Link from "next/link";
import Button from "@/components/ui/buttons";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen py-20 bg-white flex flex-col justify-center overflow-hidden">
      <div className="customContainer text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 shadow-sm">
          🎓 Resume Builder
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Build a Professional <span className="text-indigo-600">Resume</span>{" "}
          in Minutes
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Create professional, ATS-friendly resumes in minutes. Choose from
          stunning templates, add your details, and let AI optimize your words
          for impact.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link href="/create-resume">
            <Button variant="primary">Create My Resume</Button>
          </Link>
          <Link href="/templates">
            <Button variant="secondary">View Templates</Button>
          </Link>
        </div>

        <div className="mt-8">
          <Image
            src="/hero-bg.png"
            alt="Resume Illustration"
            width={1200}
            height={400}
            className="w-full max-w-4xl mx-auto h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
