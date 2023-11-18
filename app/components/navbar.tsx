import { Button } from "~/components/ui/button";
import siteConfig from "~/site.config";
import { Form, Link } from "@remix-run/react";

interface NavbarProps {
  isLoggedIn: boolean;
  path: string;
}

export default function Navbar({ isLoggedIn, path }: NavbarProps) {
  const { to, text } =
    siteConfig.navLinks[path in siteConfig.navLinks ? path : "/"];

  return (
    <nav className="flex flex justify-between items-center px-10 h-20">
      <Link to="/" className="text-3xl font-bold text-primary">
        remix
      </Link>
      <div className="flex gap-3">
        {isLoggedIn ? (
          <Button className="font-semibold text-base" asChild>
            <Link to={to}>{text}</Link>
          </Button>
        ) : (
          <Button className="font-semibold text-base" asChild>
            <Link to="/sign-in">Sign In</Link>
          </Button>
        )}
        {isLoggedIn && (
          <Form method="POST" action="/sign-out">
            <Button type="submit" className="font-semibold text-base">
              Sign Out
            </Button>
          </Form>
        )}
      </div>
    </nav>
  );
}
