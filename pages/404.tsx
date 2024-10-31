import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-[#007AFF] text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="text-lg font-medium border-b-2 border-[#007AFF] hover:text-blue-600 transition"
      >
        Go back to Home
      </Link>
    </div>
  );
}
