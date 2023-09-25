import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-darkMode h-screen flex justify-center items-center text-center">
      <div className="error404">
        {/* <h1>404</h1> */}
        <h1 className="defaultFont text-5xl text-theme">
          404 <span>NOT FOUND</span>
        </h1>
        <h5 className="text-darkMode dark:text-white subFont mb-5 text-1xl">The page you're looking for doesn't seem to exist.</h5>
        <Link href="/" className="underline text-darkMode dark:text-white subFont hover:text-theme p-3">
          Return to home
        </Link>
      </div>
      
    </div>
  );
}
