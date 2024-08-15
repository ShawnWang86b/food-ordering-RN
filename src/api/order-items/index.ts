import { supabase } from "@/src/lib/supabase";
import { InsertTables } from "@/src/types";
import { useMutation } from "@tanstack/react-query";

/**
 * @desc: insert each of order items into order_items table
 *
 * **/
export const useInsertOrderItems = () => {
  return useMutation({
    async mutationFn(items: InsertTables<"order_items">[]) {
      const { error, data: newOrderItems } = await supabase
        .from("order_items")
        .insert(items)
        .select();

      if (error) {
        throw new Error(error.message);
      }
      return newOrderItems;
    },
  });
};
