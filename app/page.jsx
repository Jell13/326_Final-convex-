"use client"

export default function Home() {
  return (
    <div className="h-screen w-screen grainy px-32">
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h2>Using Convex</h2>
          <div className="flex gap-3">
            <input className="rounded-md bg-gray-300" type="text" />
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
