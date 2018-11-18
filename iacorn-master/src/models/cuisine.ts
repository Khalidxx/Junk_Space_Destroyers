interface Option {
  name: string;
  plusPrice: number;
  id: string;
}

export interface Addition {
  name: string;
  default: string;
  options: Option[];
}

export interface Cuisine {
  imageLink: string;
  name: string;
  basePrice: number;
  additions: Addition[];
  id: string;
}

export interface Category {
  name: string;
  cuisines: Cuisine[];
  id: string;
}

export interface CuisineCart {
  quantity: number;
  cuisine: Cuisine;
}
