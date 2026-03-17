import { useQuery } from "@tanstack/react-query";
export interface Props {
  nameQuery: string;
  cuisineQuery: string;
  page: number;
}
const getRestaurant = async (props?: Props) => {
  const params = new URLSearchParams();

  if (props?.nameQuery) params.append("name", props.nameQuery);
  if (props?.cuisineQuery) params.append("cuisine", props.cuisineQuery);
  if (props?.page) params.append("page", props.page.toString());

  const queryString = params.toString();

  const url = queryString
    ? `http://localhost:3000/restaurant/list?${queryString}`
    : "http://localhost:3000/restaurant/list";

  const response = await fetch(url);
  return response.json();
};
export const useGetRestaurant = (props?: Props) => {
  return useQuery({
    queryKey: ["restaurant", props],
    queryFn: () => getRestaurant(props),
  });
};
