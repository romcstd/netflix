// Define types
export type Country = {
  id: number;
  name: string;
  value: string;
};

export type Entertainment = {
  id: number;
  name: string;
  value: string;
  country: string;
};

export type ShowItem = {
  id: number;
  name: string;
  year: number;
  duration: string;
  description: string;
  genre?: string[];
  cast?: string[];
  rating: string;
  link?: string;
  imgCard: string;
  imgCardLogo: string;
};