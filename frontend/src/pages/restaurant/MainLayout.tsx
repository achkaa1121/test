import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useGetRestaurant } from "./hooks/useGetRestaurant";
import { useState } from "react";
import type { Props } from "./hooks/useGetRestaurant";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
export default function MainLayout() {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("");
  const { data } = useGetRestaurant({
    page,
    nameQuery: searchName,
    cuisineQuery: searchCuisine,
  } as Props);
  const maxVisiblePages = 5;
  const totalPages = data?.totalPages || 1;

  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = startPage + maxVisiblePages - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  const handleClick = () => {
    <Link to={`/restaurant/detail/${data?.restaurants._id}`}>
      {data?.restaurants.name}
    </Link>;
  };
  return (
    <div className="mx-10 mt-10 max-w-full h-screen">
      <div className="bg-slate-50 h-full w-full pl-16">
        <h1 className="text-3xl mb-4">Restaurant</h1>
        <p className="mb-4">{data?.total} results</p>
        <span className="flex gap-4 mb-4">
          <Input
            className="w-54"
            placeholder="Search by name..."
            onChange={(e) => setSearchName(e.target.value)}
          ></Input>
          <Input
            className="w-54"
            placeholder="Filter by cuisine..."
            onChange={(e) => setSearchCuisine(e.target.value)}
          ></Input>
        </span>
        <table className="w-5/6 outline-3 rounded-sm border-gray-500 border-separate text-sm whitespace-nowrap ">
          <thead className="bg-slate-50 ">
            <tr>
              <th className="border border-gray-300 px-2 py-1 w-60">Name</th>
              <th className="border border-gray-300 px-2 py-1 max-w-md">
                Cuisine
              </th>
              <th className="border border-gray-300 px-2 py-1">Borough</th>
              <th className="border border-gray-300 px-2 py-1">Address</th>
            </tr>
          </thead>
          <tbody>
            {data?.restaurants?.map((restaurant: any) => (
              <tr key={restaurant._id}>
                <td
                  onClick={handleClick}
                  className="border border-gray-300 px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  {restaurant.name}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {restaurant.cuisine}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {restaurant.borough}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {restaurant.address?.building} {restaurant.address?.street}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-4 mt-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                />
              </PaginationItem>

              {pages.map((p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    isActive={page === p}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
