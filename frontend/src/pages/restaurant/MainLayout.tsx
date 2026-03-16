import { Button } from "../../components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function MainLayout() {
  return (
    <div className="mx-10 mt-10 max-w-full h-screen">
      <div className="bg-slate-50 h-full w-full pl-16">
        <h1 className="text-3xl">Restaurant</h1>
        <table className="w-5/6 outline-1 rounded-sm border-separate">
          <thead className="bg-slate-50 ">
            <tr className="border-separate">
              <th>Name</th>
              <th>Cuisine</th>
              <th>Borough</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name?</td>
              <td>cuisine?</td>
              <td>boroough?</td>
              <td>address?</td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-between gap-4 bottom-1">
          <Field orientation="horizontal" className="w-fit">
            <FieldLabel htmlFor="select-rows-per-page">
              Rows per page
            </FieldLabel>
            <Select defaultValue="25">
              <SelectTrigger className="w-20" id="select-rows-per-page">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="start">
                <SelectGroup>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
