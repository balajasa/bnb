export interface IRoomResp {
  room_id: string;
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
export interface IRoom extends IRoomResp {
  enough: boolean;
  totalPrice: number;
}

export interface IInfo {
  account:   string;
  full_name: string;
  nick_name: string;
  email:     string;
  tel:       string;
  address:   string;
  map_link:  string;
  fb_link:   string;
  line_link: string;
  ig_link:   string;
}
export interface ISearchPayload {
  start: string 
  end: string 
}
export interface IRoomStock {
  date: string
  price: number
  remaining: number
  room_id: string
  total: number
}