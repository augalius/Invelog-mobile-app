import { Link } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-white text-center px-4 py-50">
      <ExclamationTriangleIcon className="w-16 h-16 text-yellow-400 mb-4" />
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-4 text-gray-300">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
        Go back home
      </Link>
    </div>
  );
}

export default NotFound;
