/**
 * PRODUCT CATALOG — edit this file to add, remove or change products.
 *
 * To add a product: copy one block { ... }, paste it, and give it a new unique `id`.
 * To use your own image: put the file in src/assets/, import it at the top, and set `image`.
 * Only sell products you own or have the right to resell.
 */
import guide from "@/assets/guide.jpg";
import wallpapers from "@/assets/wallpapers.jpg";
import music from "@/assets/music.jpg";
import pixel from "@/assets/pixel.jpg";

export type Product = {
  id: string; // used in the web address, e.g. /product/strategy-guide
  name: string;
  tagline: string;
  description: string;
  price: number; // in US dollars
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: "strategy-guide",
    name: "Realm Master Strategy Guide",
    tagline: "120 pages of original tactics",
    description:
      "An original e-book packed with strategy tips for open-world RPGs: build planning, resource farming routes and boss-fight checklists. Delivered as a PDF.",
    price: 2,
    image: guide,
    category: "E-book",
  },
  {
    id: "neon-wallpapers",
    name: "Neon Drive Wallpaper Pack",
    tagline: "25 original 4K wallpapers",
    description:
      "A hand-made collection of synthwave wallpapers for desktop and mobile. Sizes for 4K, ultrawide and phone screens included.",
    price: 2,
    image: wallpapers,
    category: "Art",
  },
  {
    id: "retro-sound-pack",
    name: "Retro Arcade Sound Pack",
    tagline: "60 royalty-free loops & effects",
    description:
      "Original chiptune loops and sound effects you can use in your own games, streams and videos. WAV + MP3 formats.",
    price: 2,
    image: music,
    category: "Audio",
  },
  {
    id: "pixel-assets",
    name: "Pixel Heroes Asset Kit",
    tagline: "100+ sprites for game makers",
    description:
      "Original pixel-art heroes, monsters, items and effects ready to drop into your indie game. PNG sprite sheets with a commercial-use license.",
    price: 2,
    image: pixel,
    category: "Game assets",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);
