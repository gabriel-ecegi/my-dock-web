import { Typography } from "@mui/material";

// const StyledIcon = styled(NotInterestedIcon)`
//   margin: 20px;
//   font-size: 120px;
// `;

export const Error403Page: React.FunctionComponent = (_) => {
  // const { t } = useResource();
  // const dispatch = useDispatch();

  // const navigate = useNavigate();

  // const signOut = () => {
  //   dispatch(resetSession({}));
  //   navigate(getPath(AppRouting.SignIn));
  // };

  // return (
  //   <UnauthenticatedLayout title={"403"}>
  //     <StyledPage>
  //       <Typography variant="h1">Error 403</Typography>
  //       <Typography variant="h2">
  //         {t(Resources.Errors.Error403.Subtitle)}
  //       </Typography>
  //       <StyledIcon />
  //       <Stack
  //         direction="row"
  //         justifyContent="center"
  //         alignItems="center"
  //         spacing={2}
  //       >
  //         <UnstyledLink to="/">
  //           <BlButton
  //             startIcon={<HomeIcon />}
  //             size="large"
  //             variant="contained"
  //             color="primary"
  //           >
  //             {t(Resources.Errors.Error404.Home)}
  //           </BlButton>
  //         </UnstyledLink>

  //         <BlButton onClick={signOut}>Odhlásit</BlButton>
  //       </Stack>
  //     </StyledPage>
  //   </UnauthenticatedLayout>
  // );

  return <Typography variant="h1">Error 403</Typography>;
};
