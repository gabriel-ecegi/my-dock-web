import { Typography } from "@mui/material";
import { ClientsTable } from "Components/Clients/ClientsTable";

export const DashboardPage: React.FunctionComponent = (_) => {
  return (
    <>
      <Typography variant="h1">Dashboard</Typography>

      <ClientsTable />
    </>
  );
};
