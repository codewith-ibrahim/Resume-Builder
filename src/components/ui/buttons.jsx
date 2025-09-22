"use client";

export default function Button({ children, variant = "primary", ...props }) {
  const baseStyles =
    "px-4 py-2 rounded-full font-semibold transition shadow text-center";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-transparent border border-indigo-600 hover:text-indigo-600 cursor-pointer",
    secondary: "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white cursor-pointer",
    outline:
      "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50 cursor-pointer",
  };

  return (
    <button {...props} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
