import { Box } from "@mui/material";
import { ClientDto } from "Api/Api";
import { useClientsQuery } from "Api/Clients/Queries/useClientsQuery";
import { BlDataTable } from "Components/Shared/DataTable/BlDataTable";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { AppRouting, getPath } from "Utils/UrlUtils";
import { UnstyledLink } from "Components/Routing/UnstyledLink";
import { ExpandArrowIcon } from "Components/Shared/Icons";
import { BlDefaultButton } from "Components/Shared/Buttons/BlDefaultButton";

const StyledButton = styled(BlDefaultButton)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme.palette.text.secondary};
    width: 12px;
    height: auto;
    transform: rotate(-90deg);
  }
`;

const StyledCell = styled(Box)``;

type Props = {};

export const ClientsTable: React.FunctionComponent<Props> = () => {
  const { data, isLoading, error } = useClientsQuery();

  const clients: ClientDto[] = data?.data || [];
  console.log(error);
  const navigate = useNavigate();

  return (
    <>
      <BlDataTable
        rows={clients.map((x) => ({ data: x }))}
        rowEntityID="id"
        isLoading={isLoading}
        columns={[
          { id: "id", label: "ID" },
          { id: "name", label: "Name" },
          { id: "email", label: "Email" },
          { id: "phone", label: "Phone" },
          { id: "address", label: "Address" },
          { id: "action", label: "", maxWidth: 0, justifySelf: "flex-end" },
        ]}
        onRowClick={(row) => {
          navigate(getPath(AppRouting.ClientDetail, row.id));
        }}
        getCell={(id, data) => {
          switch (id) {
            case "id":
              return <StyledCell>{data.id}</StyledCell>;
            case "name":
              return <StyledCell>{data.name}</StyledCell>;
            case "email":
              return <StyledCell>{data.email}</StyledCell>;
            case "phone":
              return <StyledCell>{data.phone}</StyledCell>;
            case "address":
              return <StyledCell>{data.address}</StyledCell>;
            case "action":
              return (
                <StyledCell>
                  <UnstyledLink to={getPath(AppRouting.ClientDetail, data.id)}>
                    <StyledButton>
                      <ExpandArrowIcon />
                    </StyledButton>
                  </UnstyledLink>
                </StyledCell>
              );
            default:
              return <StyledCell>{data[id as keyof ClientDto]}</StyledCell>;
          }
        }}
      />
    </>
  );
};
