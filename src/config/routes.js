//Layout pages
import LayoutAdmin from "../layout/LayoutAdmin";
import LayoutBasic from "../layout/LayoutBasic";

//Admin pages
import AdminHome from "../pages/Admin";
import AdminSignIn from "../pages/Admin/SingIn/SignIn";

//Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

//Error404
import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    exact: false,
    component: LayoutAdmin,

    routes: [
      {
        path: "/admin",
        exact: true,
        component: AdminHome,
      },
      {
        path: "/admin/login",
        exact: true,
        component: AdminSignIn,
      },
      {
        component: Error404,
      },
    ],
  },
  {
    path: "/",
    exact: false,
    component: LayoutBasic,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/contact",
        exact: true,
        component: Contact,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
