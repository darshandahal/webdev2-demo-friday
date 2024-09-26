import Link from "next/link";

export default function Page() {
  return( 
    <main>
    <h1>web dev 2 demos</h1>
    <p>Demos for Web Dev2</p>
    <li>
      {/* <a href="/week-2">Week-2</a> this one is the older version of going to the next page , so we use link method. first e have import the link and then do coding */}
      <Link href="/week-2">Week 2 demos click</Link>
      <Link href="/week-3">Week 3 demos click</Link>
    </li>
    </main>
  );
}