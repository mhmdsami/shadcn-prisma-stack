import { Button } from "~/components/ui/button";

export default function Hero() {
  return (
    <div className="flex grow flex-col items-center justify-between">
      <main className="flex grow flex-col items-center justify-center gap-3">
        <h1 className="text-5xl font-bold">shadcn-prisma-stack</h1>
        <div className="flex gap-1">
          Start by editing <pre>routes/_index.tsx</pre>
        </div>
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-muted-foreground">Built with</p>
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
        </div>
      </main>
      <footer className="p-10">
        This is{" "}
        <Button variant="link" className="p-0 text-base" asChild>
          <a href="https://github.com/sm-sami">my</a>
        </Button>{" "}
        2023 TechStack. Crafted with ❤️
      </footer>
    </div>
  );
}
