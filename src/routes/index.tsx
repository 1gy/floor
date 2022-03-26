import { Navigate, Outlet, ReactLocation, Route, Router } from "@tanstack/react-location";
import { VFC } from "react";
import { lazyImport } from "../libs/lazyImport";

const { MainRoutes } = lazyImport(() => import("../features/main"), "MainRoutes");

const { LibraryRoutes } = lazyImport(() => import("../features/library"), "LibraryRoutes");

const routes: Route[] = [
  {
    path: "/",
    element: <MainRoutes />,
  },
  {
    path: "/library",
    element: <LibraryRoutes />,
  },
  {
    path: "/quiz",
    element: <div>quiz</div>,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

const location = new ReactLocation();

export const AppRoutes: VFC = () => {
  return (
    <Router location={location} routes={routes}>
      <Outlet />
    </Router>
  );
};