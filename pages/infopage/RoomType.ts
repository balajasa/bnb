export interface IRoomType {
  code: number;
  msg: string;
  res: Res;
}

interface Res {
  rooms: IRoom[];
}

export class XXX implements IRoom {
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
  constructor(data: IRoom) {
    this.room_id = data.room_id;
    this.title = data.title;
    this.total = data.total;
    this.remaining = data.remaining;
    this.price = data.price;
    this.max = data.max;
    this.size = data.size;
    this.bed = data.bed;
    this.facilities = data.facilities;
    this.description = data.description;
    this.images = data.images;
  }
}

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
