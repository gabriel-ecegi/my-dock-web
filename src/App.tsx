import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Infrastructure/Routing/AppRouter";
import { AppWrapper } from "Infrastructure/Configuration/AppWrapper";
import { AuthenticatedLayoutContext } from "Shared/Layouts/AuthenticatedLayout";

function App() {
  return (
    <AppWrapper>
      <AuthenticatedLayoutContext.Provider value={{ isMenuShown: true }}>
        <RouterProvider router={appRouter} />
      </AuthenticatedLayoutContext.Provider>
    </AppWrapper>
  );
}

export default App;
