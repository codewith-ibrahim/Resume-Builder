"use client";
import Link from "next/link";
import Button from "@/components/ui/buttons";
import Image from "next/image";

export default function Hero({
  badge,
  title,
  description,
  primaryBtn,
  secondaryBtn,
  image,
}) {
  return (
    <section className="w-full min-h-full py-20 bg-white flex flex-col justify-center overflow-hidden">
      <div className="customContainer text-center">
        {badge && (
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-[var(--primary-indigo)] text-sm font-medium mb-6 shadow-sm">
            {badge}
          </div>
        )}

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto my-8">{description}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {primaryBtn && (
            <Link href={primaryBtn.href}>
              <Button variant="primary">{primaryBtn.label}</Button>
            </Link>
          )}
          {secondaryBtn && (
            <Link href={secondaryBtn.href}>
              <Button variant="secondary">{secondaryBtn.label}</Button>
            </Link>
          )}
        </div>
        {image?.src && (
          <div className="mt-8">
            <Image
              src={image.src}
              alt={image.alt || "Hero Illustration"}
              width={image.width || 1200}
              height={image.height || 400}
              className="w-full max-w-4xl mx-auto h-auto"
              priority
            />
          </div>
        )}
      </div>
    </section>
  );
}
