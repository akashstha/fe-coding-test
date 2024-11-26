import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col gap-8 items-center mt-20`}
    >
      <div className="w-4/6">
        <h1 className="text-4xl">Welcome to the First Horizon Coding Test!</h1>
        <div className="flex flex-col gap-4 mt-4">
          <Link href="/codeReview">
            <div className="border-black border w-full p-4">Code Review</div>
          </Link>
          <Link href="/fetch">
            <div className="border-black border w-full p-4">Fetch</div>
          </Link>
          <Link href="/form">
            <div className="border-black border w-full p-4">Form</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
