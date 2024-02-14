import * as React from "react";
import { Typography } from "@mui/material";

export const Error404Page: React.FunctionComponent = (_) => {
  // const location = useLocation();

  // return (
  //   <UnauthenticatedLayout title={"404"}>
  //     <StyledPage>
  //       <Typography variant="h1">Error 404</Typography>
  //       <Typography variant="h2">{location.pathname}</Typography>
  //       <Typography variant="h2">
  //         {/* {t(Resources.Errors.Error404.Subtitle)} */}
  //         Error 404
  //       </Typography>
  //       <StyledIcon />
  //       <UnstyledLink to="/">
  //         <BlButton
  //           startIcon={<HomeIcon />}
  //           size="large"
  //           variant="contained"
  //           color="primary"
  //         >
  //           {t(Resources.Errors.Error404.Home)}
  //         </BlButton>
  //       </UnstyledLink>
  //     </StyledPage>
  //   </UnauthenticatedLayout>
  // );

  return <Typography variant="h1">Error 404</Typography>;
};
