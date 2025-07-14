import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-zinc-400 text-sm px-6 sm:px-12 py-10">
      <div className="max-w-7xl mx-auto space-y-6 grid place-items-center">
        <div className="flex gap-6 text-xl text-zinc-400">
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaFacebook />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaInstagram />
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaYoutube />
          </Link>
          <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <FaXTwitter />
          </Link>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <Link href="#" className="hover:underline">Privacy</Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">Terms of Use</Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">Cookie Preferences</Link>
          </li>
        </ul>
        <div className="text-sm text-zinc-400 text-opacity-80">© {new Date().getFullYear()} Netflix Clone. All rights reserved.</div>
      </div>
    </footer>
  );
}