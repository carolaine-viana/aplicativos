export interface ClothesDTO {
  id: string;
  brand: string;
  name: string;
  price: number;
  category: {
    type: string;
    name: string;
  }[];
}
