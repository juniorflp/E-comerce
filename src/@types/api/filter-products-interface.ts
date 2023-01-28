export interface FilterProducts {
  page: number;
  rows: number;
  sortBy: "id" | "name" | "price";
  orderBy: "DESC" | "ASC";
}
