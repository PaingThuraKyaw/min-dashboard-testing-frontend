import { Item } from "@/store/interface";
import { ColumnDef } from "@tanstack/react-table";
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "phNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey : "created_at",
    header : "Created Date"
  }
  // {
  //   id: "actions",
  //   cell: ({ row }) => {
  //   //   const payment = row.original; 

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 border-none outline-none w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="start" >
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
