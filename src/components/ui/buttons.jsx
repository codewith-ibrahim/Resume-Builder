"use client";

export default function Button({ children, variant = "primary", ...props }) {
  const baseStyles =
    "px-4 py-2 rounded-full font-semibold transition shadow text-center";

  const variants = {
    primary: "bg-[var(--primary-indigo)] text-white hover:bg-transparent border border-[var(--primary-indigo)] hover:text-[var(--primary-indigo)] cursor-pointer",
    secondary: "bg-white text-[var(--primary-indigo)] border border-[var(--primary-indigo)] hover:bg-[var(--primary-indigo)] hover:text-white cursor-pointer",
    outline:
      "bg-transparent border border-[var(--primary-indigo)] text-[var(--primary-indigo)] hover:bg-indigo-50 cursor-pointer",
  };

  return (
    <button {...props} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
