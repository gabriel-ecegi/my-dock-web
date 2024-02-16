import ClientsTable from "Clients/Components/ClientsTable";
import { clientsRouter } from "Clients/Routing/ClientsRouter";
import { AppWrapper } from "Infrastructure/Configuration/AppWrapper";
import { AuthenticatedLayoutContext } from "Shared/Layouts/AuthenticatedLayout";
import { RouterProvider } from "react-router-dom";

export const ClientsTableModule: React.FunctionComponent = () => {
  return (
    <AppWrapper>
      <AuthenticatedLayoutContext.Provider value={{ isMenuShown: false }}>
        <RouterProvider
          router={clientsRouter}
          fallbackElement={<ClientsTable />}
        />
      </AuthenticatedLayoutContext.Provider>
    </AppWrapper>
  );
};

export default ClientsTableModule;
