import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center mt-20">
      <div className="w-4/6">
        <h1 className="text-4xl">Welcome to the First Horizon Coding Test!</h1>
        <div className="flex flex-col gap-4 mt-4">
          <Link href="/test1">
            <div className="border-white border-2 w-full">Test 1</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
