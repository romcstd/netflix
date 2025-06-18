import Image from "next/image";

export default function Header() {
  return (
    <header className="header bg-header">
      <div className="header-container">
        <div className="mr-auto">
          <Image src="/img/brand/netflix-logo.svg" alt="Netflix Logo" width={148} height={40} />
        </div>
        <div className="ml-auto">
          <button className="header-sign-in-button" type="submit">Sign In</button>
        </div>
      </div>
    </header>
  );
}