export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 text-sm px-6 sm:px-12 py-10">
      <div className="max-w-7xl mx-auto space-y-4">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href="/" className="hover:underline">Home</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Privacy</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Terms of Use</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Cookie Preferences</a>
          </li>
        </ul>
        <p className="text-xs text-gray-500">© {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}