import { Suspense } from "react";
import Loading from "../loading";

export default function DashboardLayout({children}){
    return( 
        <section>
           {children}
         </section>
    )
}