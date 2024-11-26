import { tests } from "@/zz_testUtils/instructions";
import { useRouter } from "next/router";

export default function TestPage() {
  const router = useRouter();
  console.log(router.query);
  if (!router.query.test) {
    return <div>Loading...</div>;
  }
  const { instructions, Component } = tests[router.query.test as string];
  return (
    <div className="grid grid-cols-4 gap-8 items-center h-screen">
      <div className="col-span-1 border-r-2 border-black h-full p-4 flex flex-col justify-center">
        <div>{instructions}</div>
      </div>
      <div className="col-span-3">
        <div className="flex flex-col gap-4 mt-4">{<Component />}</div>
      </div>
    </div>
  );
}
