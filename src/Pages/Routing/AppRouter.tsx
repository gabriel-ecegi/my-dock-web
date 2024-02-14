import { SignInPage } from "Pages/Auth/SignInPage";
import { DashboardPage } from "Pages/Dashboard/DashboardPage";
import { Error403Page } from "Pages/Error/Error403Page";
import { Error404Page } from "Pages/Error/Error404Page";
import { AppRouting, getRoute } from "Utils/UrlUtils";
import { createBrowserRouter } from "react-router-dom";

const appRoutes = [
  {
    path: getRoute(AppRouting.SignIn),
    element: <SignInPage />,
  },
  {
    path: getRoute(AppRouting.Error403),
    element: <Error403Page />,
  },
  {
    path: getRoute(AppRouting.Error404),
    element: <Error404Page />,
  },
  {
    path: getRoute(AppRouting.Dashboard),
    element: <DashboardPage />,
  },
];

export const appRouter = createBrowserRouter(appRoutes);
