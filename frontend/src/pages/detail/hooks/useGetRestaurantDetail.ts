import { useQuery } from "@tanstack/react-query";
export const useGetRestaurantDetail = (id: string) => {
  return useQuery({
    queryKey: ["restaurantDetail", id],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:3000/restaurant/detail/${id}`,
      );
      return response.json();
    },
    enabled: !!id,
  });
};
