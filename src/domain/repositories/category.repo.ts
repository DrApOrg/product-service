import { Category, CategoryPayload } from "../../domain/models/category";

export interface ICategoryRepository {
  find(): Promise<Category[] | null>;
  findById(id: string): Promise<Category | null>;
  update(id: string, body: CategoryPayload): Promise<Category | null>;
  create(body: CategoryPayload): Promise<Category>;
  delete(id: string): Promise<boolean>;
}
