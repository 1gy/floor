import { Outlet, Route, Router, useLocation, useResolvePath, useRouter } from "@tanstack/react-location";
import { VFC } from "react";
import { Play } from "./components/Play";
import { QuizPage } from "./components/QuizPage";
import { SelectContestsPage } from "./components/SelectContestsPage";

const routes: Route[] = [
  {
    path: "/",
    element: <QuizPage />,
  },
  {
    path: "/contests",
    element: <SelectContestsPage />,
  },
  {
    path: "/play/:info",
    element: <Play />,
  },
];

export const QuizRoutes: VFC = () => {
  const location = useLocation();
  const basepath = useResolvePath()("");
  return (
    <Router basepath={basepath} location={location} routes={routes}>
      <Outlet />
    </Router>
  );
};
