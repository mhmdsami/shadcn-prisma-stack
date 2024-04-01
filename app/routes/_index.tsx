import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import siteConfig from "~/site.config";

export const meta: MetaFunction = () => {
  return [
    { title: siteConfig.name },
    {
      name: "description",
      content: siteConfig.description,
    },
  ];
};

export default function Index() {
  return (
    <div className="grow flex flex-col items-center justify-between">
      <main className="grow flex flex-col gap-2 items-center justify-center">
        <h1 className="text-5xl font-bold">Remix Template</h1>
        <p className="text-lg">Built with</p>
        <div className="flex">
          <Button variant="link" className="text-xl">
            <a href="https://remix.run">Remix</a>
          </Button>
          <Button variant="link" className="text-xl">
            <a href="https://ui.shadcn.com/">shadcn/ui</a>
          </Button>
          <Button variant="link" className="text-xl">
            <a href="https://tailwindcss.com/">tailwindcss</a>
          </Button>
          <Button variant="link" className="text-xl">
            <a href="https://www.mongodb.com/">MongoDB</a>
          </Button>
          <Button variant="link" className="text-xl">
            <a href="https://prisma.io/">Prisma</a>
          </Button>
        </div>
        <div className="flex">
          <Button variant="link" className="text-base">
            <a href="https://valibot.dev/">Valibot</a>
          </Button>
          <Button variant="link" className="text-base">
            <a href="https://react-hot-toast.com/">react-hot-toast</a>
          </Button>
        </div>
      </main>
      <footer className="p-10">
        This is{" "}
        <Button variant="link" className="p-0 text-base" asChild>
          <a href="https://mhmdsami.me">my</a>
        </Button>{" "}
        2023 TechStack. Crafted with ❤️
      </footer>
    </div>
  );
}
