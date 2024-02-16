import { Box, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { useResource, Resources } from "Infrastructure/Translations/Resources";
import { BlButton } from "Shared/Buttons/BlButton";
import { UnauthenticatedLayout } from "Shared/Layouts/UnauthenticatedLayout";
import { UnstyledLink } from "Shared/Routing/UnstyledLink";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const StyledIcon = styled(NotInterestedIcon)`
  margin: 20px;
  font-size: 120px;
`;

export const Error403Page: React.FunctionComponent = (_) => {
  const { t } = useResource();

  const navigate = useNavigate();

  const signOut = () => {
    navigate("/sign-out");
  };

  return (
    <UnauthenticatedLayout title={"403"}>
      <Box>
        <Typography variant="h1">Error 403</Typography>
        <Typography variant="h2">
          {t(Resources.Errors.Error403.Subtitle)}
        </Typography>
        <StyledIcon />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <UnstyledLink to="/">
            <BlButton
              startIcon={<HomeIcon />}
              size="large"
              variant="contained"
              color="primary"
            >
              {t(Resources.Errors.Error404.Home)}
            </BlButton>
          </UnstyledLink>

          <BlButton onClick={signOut}>Odhlásit</BlButton>
        </Stack>
      </Box>
    </UnauthenticatedLayout>
  );
};
