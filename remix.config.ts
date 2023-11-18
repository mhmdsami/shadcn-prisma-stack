import type { AppConfig } from "@remix-run/dev";

export default {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  postcss: true,
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
} satisfies AppConfig;
