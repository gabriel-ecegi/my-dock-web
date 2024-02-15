import { useClientDetailQuery } from "Clients/Api/Queries/useClientDetailQuery";

type Props = { id: number };

export const ClientDetail: React.FunctionComponent<Props> = (props) => {
  const { id } = props;

  const { data, isLoading, error } = useClientDetailQuery(id);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (!data?.data || !!error) {
    return <>Client nenalezen: {error?.message}</>;
  }

  return (
    <>
      <div>
        <h1>{data?.data.name}</h1>
        <p>{data?.data.email}</p>
        <p>{data?.data.phone}</p>
        <p>{data?.data.address}</p>
      </div>
    </>
  );
};
