import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { BlButton } from "Components/Shared/Buttons/BlButton";
import { BlFormInput } from "Components/Shared/Inputs/Form/BlFormInput";
import { Resources, useResource } from "Translations/Resources";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Layout = styled(Box)`
  margin-top: ${(props) => props.theme.spacing(10)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignUpSchema = z.object({
  login: z.string().email(),
  password: z.string().min(3),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

const PageResources = Resources.SignIn;

type Props = {};

export const SignInForm: React.FunctionComponent<Props> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  console.log(errors);
  const { t } = useResource();
  return (
    <Layout>
      <Typography variant="h1" mb={4}>
        {t(PageResources.Title)}
      </Typography>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <BlFormInput
          control={control}
          name="login"
          errors={errors}
          label={t(PageResources.Login.Label)}
        />

        <BlFormInput
          control={control}
          name="password"
          errors={errors}
          type="password"
          label={t(PageResources.Password.Label)}
        />

        <BlButton type="submit" fullWidth color="primary">
          {t(PageResources.Button)}
        </BlButton>
      </form>
    </Layout>
  );
};
