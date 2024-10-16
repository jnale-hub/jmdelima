import Link from "next/link";
import Logo from "./Logo";

export default function BlogHeader() {
    return (
        <header className="w-full flex justify-between items-center px-1 py-2 mb-2">
        <div>
            <Logo />
        </div>
        <nav>
            <ul className="flex items-center text-xs gap-3">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/blogs">Blogs</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}
