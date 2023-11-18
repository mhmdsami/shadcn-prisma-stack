import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Template" },
    {
      name: "description",
      content: "Remix with shadcn, PostgreSQL, drizzle and TypeScript",
    },
  ];
};

export default function Index() {
  return <div />;
}
