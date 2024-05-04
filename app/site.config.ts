type SiteConfig = {
  name: string;
  description: string;
  navLinks: {
    [key: string]: {
      text: string;
      to: string;
    };
  };
  sessionName: string;
};

const siteConfig = {
  name: "Remix + shadcn/ui + Prisma Starter",
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
  sessionName: "__remix_shadcn_primsa_session",
};

export default siteConfig as SiteConfig;
