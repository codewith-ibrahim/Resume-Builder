import Link from "next/link";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/30 bg-[var(--primary-indigo)]">
      <div className="customContainer py-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">🎓 Resume Builder</h2>
          <p className="mt-2 text-sm text-white/80">
            Build your professional resume in minutes.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-white/90 transition">
            <Facebook size={22} />
          </a>
          <a href="#" className="hover:text-white/90 transition">
            <Twitter size={22} />
          </a>
          <a href="#" className="hover:text-white/90 transition">
            <Linkedin size={22} />
          </a>
          <a href="#" className="hover:text-white/90 transition">
            <Github size={22} />
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="border-t border-white/30 py-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} Resume Builder. All rights reserved.
      </div>
    </footer>
  );
}
