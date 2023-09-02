import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container404">
      <div className="error404">
        {/* <h1>404</h1> */}
        <h1>
          404 <span>NOT FOUND</span>
        </h1>
        <h5>The page you're looking for doesn't seem to exist.</h5>
        <Link href="/" className="btnHome">
          Home
        </Link>
      </div>
    </div>
  );
}
