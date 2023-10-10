import Link from "next/link";
import { ERROR_404,ERROR_404_DESCRIPTION,RETURN_TO_HOME} from "./constants/strings";
export default function NotFound() {
  return (
    <div className="bg-white dark:bg-darkMode h-screen flex justify-center items-center text-center">
      <div className="error404">
        {/* <h1>404</h1> */}
        <h1 className="defaultFont text-5xl text-theme">
         {ERROR_404}
        </h1>
        <h5 className="text-darkMode dark:text-white subFont mb-5 text-1xl">{ERROR_404_DESCRIPTION}</h5>
        <Link href="/" className="underline text-darkMode dark:text-white subFont hover:text-theme p-3">
        {RETURN_TO_HOME}
        </Link>
      </div>
      
    </div>
  );
}
