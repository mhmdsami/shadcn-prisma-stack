import { Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex flex justify-between items-center px-10 h-20">
      <Link to="/" className="text-3xl font-bold text-primary">
        remix
      </Link>
      <Button>
        <Link to="/sign-in" className="font-semibold text-base">
          Sign In
        </Link>
      </Button>
    </nav>
  );
}
