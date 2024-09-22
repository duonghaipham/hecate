import { getUser } from "@/apis/user.api";
import { useQuery } from "@tanstack/react-query";

export const useGetUser = () => {
  const { data } = useQuery({
    queryKey: ["GET_USERS"],
    queryFn: getUser,
  });

  return { data: data?.results[0] };
};
