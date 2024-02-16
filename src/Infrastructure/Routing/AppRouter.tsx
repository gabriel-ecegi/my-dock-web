import { SignInPage } from "Auth/Pages/SignInPage";
import { DashboardPage } from "Dashboard/Pages/DashboardPage";
import { Error403Page } from "Infrastructure/Pages/Error403Page";
import { Error404Page } from "Infrastructure/Pages/Error404Page";
import { AuthenticatedRoute } from "Infrastructure/Routing/AuthenticatedRoute";
import { UnauthenticatedRoute } from "Infrastructure/Routing/UnauthenticatedRoute";
import { AppRouting, getRoute } from "Infrastructure/Utils/UrlUtils";
import { createBrowserRouter } from "react-router-dom";
import { ClientDetailPage } from "Clients/Pages/ClientDetailPage";
import { ClientsPage } from "Clients/Pages/ClientsPage";
import { TasksPage } from "Tasks/Pages/TasksPage";

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
    path: getRoute(AppRouting.Clients),
    element: (
      <AuthenticatedRoute>
        <ClientsPage />
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
    path: getRoute(AppRouting.Tasks),
    element: (
      <AuthenticatedRoute>
        <TasksPage />
      </AuthenticatedRoute>
    ),
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

export const appRouter = createBrowserRouter(appRoutes);
