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
