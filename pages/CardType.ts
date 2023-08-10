
export interface ILobbyCardRes {
  img: string;
  account: string;
  full_name: string;
  nick_name: string;
}

export interface ILobbyCard {
  img: string;
  account: string;
  full_name: string;
  nick_name: string;
  price: number;
}

class LobbyCard implements ILobbyCard {
  img: string;
  account: string;
  full_name: string;
  nick_name: string;
  price: number;
  constructor(payload: ILobbyCardRes) {
    this.img = payload.img || '';
    this.account = payload.account || '';
    this.full_name = payload.full_name || '';
    this.nick_name = payload.nick_name || '';
    this.price = 123; // TODO: 另一支api處理
  }
}

export function ParseLobbyCard(res: ILobbyCardRes[]): LobbyCard[] {
  if (!Array.isArray(res)) {
    return []
  }
  return res.map(i => new LobbyCard(i))
}
