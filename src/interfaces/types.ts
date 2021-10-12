export type Product = {
  name: string;
  photos: File[];
  price: Price;
  comments: Comment[];
  inStock: number;
  category: string;
};

type Price = {
  [criteria: string]: number;
};

export type Extras = {
  cover?;
};

export type Comment = {
  author: string;
  date: Date;
  text: string;
};

enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
