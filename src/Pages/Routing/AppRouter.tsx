import { SignInPage } from "Pages/Auth/SignInPage";
import { DashboardPage } from "Pages/Dashboard/DashboardPage";
import { Error403Page } from "Pages/Error/Error403Page";
import { Error404Page } from "Pages/Error/Error404Page";
import { AuthenticatedRoute } from "Components/Routing/AuthenticatedRoute";
import { UnauthenticatedRoute } from "Components/Routing/UnauthenticatedRoute";
import { AppRouting, getRoute } from "Utils/UrlUtils";
import { createBrowserRouter } from "react-router-dom";
import { ClientDetailPage } from "Pages/Clients/ClientDetailPage";

const appRoutes = [
  {
    path: getRoute(AppRouting.SignIn),
    element: (
      <UnauthenticatedRoute>
        <SignInPage />
      </UnauthenticatedRoute>
    ),
  },
  {
    path: getRoute(AppRouting.Dashboard),
    element: (
      <AuthenticatedRoute>
        <DashboardPage />
      </AuthenticatedRoute>
    ),
  },
  {
    path: getRoute(AppRouting.ClientDetail),
    element: (
      <AuthenticatedRoute>
        <ClientDetailPage />
      </AuthenticatedRoute>
    ),
  },
  {
    path: getRoute(AppRouting.Error403),
    element: <Error403Page />,
  },
  {
    path: getRoute(AppRouting.Error404),
    element: <Error404Page />,
  },
];

export const appRouter = createBrowserRouter(appRoutes);
