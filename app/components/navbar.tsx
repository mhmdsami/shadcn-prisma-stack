import { Form, Link } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import siteConfig from "~/site.config";

interface NavbarProps {
  isLoggedIn: boolean;
  path: string;
}

export default function Navbar({ isLoggedIn, path }: NavbarProps) {
  const { to, text } =
    siteConfig.navLinks[path in siteConfig.navLinks ? path : "/"];

  return (
    <nav className="flex flex h-20 items-center justify-between px-10">
      <Link to="/" className="text-3xl font-bold text-primary">
        remix
      </Link>
      <div className="flex gap-3">
        {isLoggedIn ? (
          <Button className="text-base font-semibold" asChild>
            <Link to={to}>{text}</Link>
          </Button>
        ) : (
          <Button className="text-base font-semibold" asChild>
            <Link to="/sign-in">Sign In</Link>
          </Button>
        )}
        {isLoggedIn && (
          <Form method="POST" action="/sign-out">
            <Button type="submit" className="text-base font-semibold">
              Sign Out
            </Button>
          </Form>
        )}
      </div>
    </nav>
  );
}
