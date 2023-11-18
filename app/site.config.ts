type SiteConfig = {
  name: string;
  description: string;
  navLinks: {
    [key: string]: {
      text: string;
      to: string;
    };
  };
};

const siteConfig = {
  name: "Remix Template",
  description: "Remix with shadcn/ui, TailwindCSS, MongoDB, Prisma and more",
  navLinks: {
    "/": {
      text: "Dashboard",
      to: "/dashboard",
    },
    "/dashboard": {
      text: "Home",
      to: "/",
    },
    "/sign-in": {
      text: "Sign Up",
      to: "/sign-up",
    },
    "/sign-up": {
      text: "Sign In",
      to: "/sign-in",
    },
  },
};

export default siteConfig as SiteConfig;
