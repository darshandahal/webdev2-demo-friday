import Heading from "./heading";
import Link from "next/link";

export default function Page() {
    let a = 25;
    let b = 35;

    
    return(
        <main>
            <Heading />
            <p>These are the demos for week-2</p>
            <p>The sum of two numbers a and b is {a + b}.</p>
            <p>Lets go back to the home page -- <Link href= "/">The home page</Link></p>
        </main>
    )
}