import { lazy } from "react";

const HomePage = lazy(async  () =>
  import("../pages/home/index.js")
);

const ProjectPage = lazy(async  () =>
  import("../pages/projects/index.js")
);

const SearchProjects = lazy(async  () =>
  import("../pages/SearchProjects")
);

const ContactPage = lazy(async  () =>
  import("../pages/ContactPage")
);

const SignUp = lazy(async  () =>
  import("../pages/SignUp")
);

const AuthenticateContact = lazy(async  () =>
  import("../pages/AuthenticateContact")
);

export const publicRouteList = [
    {
      path: "/",
      exact: true,
      name: "ProjectPage",
      component: ProjectPage,
      title: "Search Project",
      background: false,
      layout: "default"
    },
    {
      path: "/home",
      exact: true,
      name: "Home Page",
      component: HomePage,
      title: "Home Page",
      background: "default",
      layout: "default"
    },
    {
      path: "/search-projects",
      exact: true,
      name: "SearchProjects",
      component: SearchProjects,
      title: "Search Project",
      background: "default",
      layout: "default"
    },
    {
      path: "/contact",
      exact: true,
      name: "Contact",
      component: ContactPage,
      title: "Be a Freelancer",
      background: "default",
      layout: "default"
    },
    {
      path: "/signup",
      exact: true,
      name: "SignUp",
      component: SignUp,
      title: "SignUp",
      background: false,
      layout: false
    },
    {
      path: "/otp",
      exact: true,
      name: "OTP",
      component: AuthenticateContact,
      title: "OTP",
      background: false,
      layout: false
    },
  ];