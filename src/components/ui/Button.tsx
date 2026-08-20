import Link from "next/link";
import type { ReactNode } from "react";
export function Button({href,children,variant="primary",className=""}:{href:string;children:ReactNode;variant?:"primary"|"outline"|"light";className?:string}) {
  const variants={primary:"bg-[var(--brand)] text-white border-[var(--brand)] hover:bg-[#0f3221]",outline:"border-[var(--brand)] text-[var(--brand)] hover:bg-[var(--surface)]",light:"border-white bg-white text-[var(--brand)] hover:bg-[#f0eee8]"};
  return <Link href={href} className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-[var(--radius)] border px-6 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}>{children}</Link>;
}
