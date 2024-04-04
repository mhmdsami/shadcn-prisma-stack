import Hero from "~/components/hero";
import siteConfig from "~/site.config";
import type { MetaFunction } from "@remix-run/node";

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
  return <Hero />;
}
