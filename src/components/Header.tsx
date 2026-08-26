
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

interface NavItem {
    label: string;
    href: string;
}

interface ContactLink {
    label: string;
    href: string;
    external?: boolean;
}

const navItems: NavItem[] = [
    { label: "Games / Interactive Experience", href: "/" },
    { label: "iOS Projects", href: "/ios" }
]

const contactLinks: ContactLink[] = [
    { label: "GitHub", href: "https://github.com/jemui", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/YOUR-HANDLE", external: true },
];

const email = "jeanettemui101@gmail.com";

export default function Header() {
    const pathname = usePathname();

    const [copied, setCopied] = useState(false);

    async function handleCopyEmail() {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <header className="flex flex-col items-center gap-4 py-8 px-4 text-center">
            <h1 className="text-2xl font-semibold tracking-wide">Jeanette Mui</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Game Developer & Growth Engineer
            </p>

            {/* email */}
            <div className="flex items-center gap-2">
                <span>{email}</span>
                <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
                >
                    {copied ? <Check size={16} /> : <Clipboard size={16} />}
                </button>
            </div>

            {/* email */}
            <div className="flex gap-4">
                {contactLinks.map((link) => (
                    <a key={link.href}
                        href={link.href}
                        {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                        className="underline hover:text-zinc-500"
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <nav className="flex gap-2 border rounded-full p-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`px-4 py-2 rounded-full ${pathname === item.href
                            ? "bg-zinc-200 dark:bg-zinc-800 font-medium"
                            : "hover:bg-zinc-100 dark:hover:bg-zinc-900"
                            }`}
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </header>
    );
}