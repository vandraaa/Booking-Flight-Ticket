import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Andra Airlines",
};

export default function Home() {
  return (
    <main>
      <div>
        <Button>
          <Link href="/dashboard/signin">
          Sign In
          </Link>
        </Button>
      </div>
    </main>
  );
}
