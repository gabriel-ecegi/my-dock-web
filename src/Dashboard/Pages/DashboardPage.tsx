import { Typography } from "@mui/material";
import { ClientsTable } from "Clients/Components/ClientsTable";

export const DashboardPage: React.FunctionComponent = (_) => {
  return (
    <>
      <Typography variant="h1">Dashboard</Typography>

      <ClientsTable />
    </>
  );
};
