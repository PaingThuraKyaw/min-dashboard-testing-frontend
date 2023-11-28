import { useQuery } from "@tanstack/react-query";
import { axios } from ".";
import { Item, ItemRespone } from "./interface";

const Items = async (int: number): Promise<ItemRespone<Item[]>> => {
  const { data } = await axios.get(`item?page=${int}`);
  return data;
};

export const useItem = (int: number) => {
  return useQuery({
    queryKey: ["get-items", int],
    queryFn: () => Items(int),
    select: (data): { data: Item[]; count: number } => ({
      count : data.meta.last_page,
      data: data.data.map((item) => ({
        id: item.id,
        name: item.name,
        age: item.age,
        company: item.company,
        position: item.position,
        phNumber: item.phNumber,
        created_at : item.created_at
      })),
    }),
  });
};
