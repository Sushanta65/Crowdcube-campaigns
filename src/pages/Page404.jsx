import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className="flex items-center justify-center  py-40  text-center">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold ">404</h1>
        <p className="text-xl ">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
