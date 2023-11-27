import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl text-orange-500 mb-4">404 - Not Found</h2>
      <p className="text-lg text-gray-700 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
