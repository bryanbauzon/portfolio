import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-pages h-screen flex justify-center items-center text-center">
      <div className="error404">
        {/* <h1>404</h1> */}
        <h1 className="gradient text-[3rem]">
          404 <span>NOT FOUND</span>
        </h1>
        <h5 className="text-white font-mono mb-5">The page you're looking for doesn't seem to exist.</h5>
        <Link href="/" className="underline text-white font-serif p-3">
          Return to home
        </Link>
      </div>
      
    </div>
  );
}
