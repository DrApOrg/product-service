export interface CategoryPayload extends Omit<Category, "id"> {}
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories?: Subcategory[];
}

export interface Subcategory {
  id?: string;
  name: string;
  description: string;
  image: string;
}
