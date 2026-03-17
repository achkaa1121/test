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
import { Link, useNavigate } from "react-router-dom";
import "../detail/style.css";
export default function MainLayout() {
  const [page, setPage] = useState(1);
  const [searchName, setSearchName] = useState("");
  const [searchCuisine, setSearchCuisine] = useState("");
  const navigate = useNavigate();
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
  return (
    <div className="mx-auto mt-10 w-[1000px] h-screen">
      <div className="bg-slate-50 h-full w-full p-[20px] rounded-lg">
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
        <table className="w-full rounded-sm border-gray-500 text-sm whitespace-nowrap bg-white rest-list">
          <thead className="bg-slate-50 ">
            <tr>
              <th className="border border-gray-300 px-2 py-1 w-[200px]">
                Name
              </th>
              <th className="border border-gray-300 px-2 py-1 w-auto">
                Cuisine
              </th>
              <th className="border border-gray-300 px-2 py-1 w-[150px]">
                Borough
              </th>
              <th className="border border-gray-300 px-2 py-1 w-[200px]">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.restaurants?.map((restaurant: any) => (
              <tr
                key={restaurant._id}
                onClick={() => navigate(`/restaurant/detail/${restaurant._id}`)}
              >
                <td>{restaurant.name}</td>
                <td>{restaurant.cuisine}</td>
                <td>{restaurant.borough}</td>
                <td>
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
