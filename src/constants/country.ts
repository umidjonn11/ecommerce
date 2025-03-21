export interface ICountry {
  id: number;
  name: string;
  continent: string;
}

export interface ICreateCountry {
  name: string;
  continent: string;
}

export interface IUpdateCountry{
    name?:string,
    continent?:string,
}
