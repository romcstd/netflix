import "../globals.css";

export const metadata = {
  title: "Netflix - Sign in",
  description: "",
};

export default function LoginLayout({ children }) {
  return (
    <html lang="en" version="release-v1.0">
      <body>
        {children}
      </body>
    </html>
  );
}
