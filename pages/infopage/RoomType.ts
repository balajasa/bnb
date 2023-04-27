export interface IRoom {
  room_id: number;
  title: string;
  total: number;
  remaining: number;
  price: number;
  max: number;
  size: string;
  bed: string;
  facilities: string;
  description: string;
  images: string[];
}
