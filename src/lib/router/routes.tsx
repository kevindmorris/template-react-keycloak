import { Layout } from "@/components";
import { HomePage, UsersPage } from "@/pages";
import type { RouteObject } from "react-router";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "users", element: <UsersPage /> },
    ],
  },
];

export default routes;
