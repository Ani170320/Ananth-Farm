export interface Product {
  id: string;
  name: string;
  weight: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "box-3kg",
    name: "Classic Box",
    weight: "3 KG",
    description: "Perfect for couples or small families. Contains hand-picked Benishan or Kesar mangoes based on the season.",
    price: 899,
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "box-5kg",
    name: "Family Box",
    weight: "5 KG",
    description: "Our most popular choice. A generous box of premium, naturally ripened mangoes perfect for sharing.",
    price: 1399,
    image: "/family-box-v3.jpg",
  },
  {
    id: "box-10kg",
    name: "Harvest Box",
    weight: "10 KG",
    description: "For true mango lovers. A large crate bringing the authentic taste of the farm straight to your home.",
    price: 2599,
    image: "/harvest-box-v3.jpg",
  },
  {
    id: "box-gift",
    name: "Premium Gift Box",
    weight: "Custom",
    description: "An elegantly packaged selection of our finest mangoes, perfect for corporate gifting or special occasions.",
    price: 1999,
    image: "/gift-box-v3.jpg",
  },
];
