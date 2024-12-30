import { Look } from "../types/types";

const looksData: Look[] = [
  {
    id: "1",
    media: [
      {
        id: "img1",
        type: "image",
        src: "/images/look1.jpeg",
        products: [
          {
            id: "p1",
            name: "Product 1",
            x: 40,
            y: 30,
            price: 16,
            image: "/images/look1.jpeg",
            shopLink: "https://example.com/product1",
          },
          {
            id: "p2",
            name: "Product 2",
            x: 60,
            y: 50,
            price: 24,
            image: "/images/look2.jpeg",
            shopLink: "https://example.com/product2",
          },
          {
            id: "p3",
            name: "Product 3",
            x: 80,
            y: 60,
            price: 24,
            image: "/images/look2.jpeg",
            shopLink: "https://example.com/product3",
          },
        ],
      },
      {
        id: "vid1",
        type: "video",
        src: "/videos/vid1.mp4",
        products: [
          {
            id: "p1",
            name: "Product 1",
            x: 40,
            y: 30,
            price: 16,
            image: "/images/look1.jpeg",
            shopLink: "https://example.com/product1",
          },
          {
            id: "p2",
            name: "Product 2",
            x: 60,
            y: 70,
            price: 24,
            image: "/images/look2.jpeg",
            shopLink: "https://example.com/product2",
          },
        ],
      },
      {
        id: "img2",
        type: "image",
        src: "/images/look2.jpeg",
        products: [
          {
            id: "p1",
            name: "Product 1",
            x: 40,
            y: 30,
            price: 16,
            image: "/images/look1.jpeg",
            shopLink: "https://example.com/product1",
          },
          {
            id: "p2",
            name: "Product 2",
            x: 60,
            y: 50,
            price: 24,
            image: "/images/look2.jpeg",
            shopLink: "https://example.com/product2",
          },
        ],
      },
    ],
  },
];

export default looksData;
