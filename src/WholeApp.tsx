import AppBootstrapper from "Infrastructure/Configuration/AppBootstrapper";
import { appRouter } from "Infrastructure/Routing/AppRouter";
import { AuthenticatedLayoutContext } from "Shared/Layouts/AuthenticatedLayout";
import { RouterProvider } from "react-router-dom";

function WholeApp() {
  return (
    <AppBootstrapper>
      <AuthenticatedLayoutContext.Provider value={{ isMenuShown: true }}>
        <RouterProvider router={appRouter} />
      </AuthenticatedLayoutContext.Provider>
    </AppBootstrapper>
  );
}

export default WholeApp;
