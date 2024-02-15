import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { useSignInMutation } from "Auth/Api/Mutations/useSignInMutation";
import { BlFormInput } from "Forms/Components/BlFormInput";
import { Resources, useResource } from "Infrastructure/Translations/Resources";
import { BlButton } from "Shared/Buttons/BlButton";
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

  const signInMutation = useSignInMutation();

  const submit = (data: SignUpSchemaType) => {
    signInMutation.mutate(data);
  };

  return (
    <Layout>
      <Typography variant="h1" mb={4}>
        {t(PageResources.Title)}
      </Typography>

      <form onSubmit={handleSubmit(submit)}>
        <BlFormInput
          control={control}
          name="login"
          autoComplete="login"
          errors={errors}
          label={t(PageResources.Login.Label)}
        />

        <BlFormInput
          control={control}
          name="password"
          errors={errors}
          type="password"
          autoComplete="password"
          label={t(PageResources.Password.Label)}
        />

        <BlButton type="submit" fullWidth color="primary">
          {t(PageResources.Button)}
        </BlButton>
      </form>
    </Layout>
  );
};
