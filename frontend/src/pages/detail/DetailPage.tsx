import { Link, useParams } from "react-router-dom";
import { useGetRestaurantDetail } from "./hooks/useGetRestaurantDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import "./style.css";
export const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetRestaurantDetail(id || "");
  return (
    <div className="mx-auto mt-10 w-[1000px] h-screen bg-slate-50">
      <div className="p-[20px]">
        <Link to="/">
          <Button
            variant="ghost"
            className="flex items-center justify-center text-md mb-4 cursor-pointer"
          >
            <ArrowLeft className="text-black" />
            Back to Restaurant List
          </Button>
        </Link>
        <div className="rest-card">
          <h1>
            <span>{data?.name?.slice(0, 1)}</span>
            {data?.name}
          </h1>
          <div>
            <p>{data?.cuisine}</p>
            <p>{data?.borough}</p>
          </div>
          <hr />
          <p>
            <b>Address</b>
            <span>{data?.address.building}</span>
            <span>{data?.address.street}</span>
            <span>{data?.address.zipcode}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
