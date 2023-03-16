import { db } from "../../utils/db.server";

export type Category = {
  id: string;
  name: string;
}

export const createCategory = async (category: Omit<Category, "id">): Promise<Category> => {
  const { name } = category;
  console.log("🚀 ~ file: category.services.ts ~ line 10 ~ createCategory ~ category", category)
  return db.category.create({
    data: {
      name,
    },
    select: {
      id: true,
      name: true
    },
  });
};