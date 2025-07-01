import { Inter } from 'next/font/google';
import "@/styles/globals.css"

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Only load what you need
  variable: '--font-inter',      // Optional CSS variable
  display: 'swap',
});

export const metadata = {
  title: "Netflix - Watch TV Shows Online, Watch Movies Online",
  description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" app-version="release-v2.5">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
