import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <Link href="xyz" legacyBehavior>
      <a>
        <span>A</span> &nbsp; B
      </a>
    </Link>
  );
}
