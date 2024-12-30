export interface Product {
  id: string;
  name: string;
  x: number;
  y: number;
  price: number;
  image: string;
  shopLink: string;
}

export interface Media {
  id: string;
  type: "image" | "video";
  src: string;
  products?: Product[];
}

export interface Look {
  id: string;
  media: Media[];
}
