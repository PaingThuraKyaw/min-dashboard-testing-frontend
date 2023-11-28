import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axios } from ".";
import { createItem } from "./interface";
import { useNavigate } from "react-router-dom";

const create = async (payload: createItem) => {
  const { data } = await axios.post("item", payload);
  return data;
};

export const useCreate = () => {
  const queryClient = useQueryClient();
  const navigator = useNavigate()
  return useMutation({
    mutationFn: (payload: createItem) => create(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-items"],
      });
      navigator('/')
    },
  });
};
