import Link from "next/link";
import { ERROR_404,ERROR_404_DESCRIPTION,RETURN_TO_HOME} from "./constants/strings";
export default function NotFound() {
  return (
    <div className="bg-white dark:bg-darkMode h-screen flex justify-center items-center text-center">
      <div className="error404">
        {/* <h1>404</h1> */}
        <h1 className="defaultFont xl:text-8xl lg:text-7xl md:text-7xl text-6xl font-bold text-theme">
         {ERROR_404}
        </h1>
        <h5 className="text-darkMode dark:text-white subFont mb-5 xl:text-3xl lg:text-3xl md:text-2xl text-2xl ">{ERROR_404_DESCRIPTION}</h5>
        <Link href="/" className="underline subFont text-theme p-3">
        {RETURN_TO_HOME}
        </Link>
      </div>
      
    </div>
  );
}
