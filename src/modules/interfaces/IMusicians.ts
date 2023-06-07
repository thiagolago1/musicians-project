import { Musician } from "../teachers/Musician";

interface IMusiciansDTO {
  name: string;
  instrument: string;
  age: number;
  companyID: string;
}

interface IMusiciansRepository {
  findByName(name: string): Musician;
  list(): Musician[];
  create({ name, instrument, age, companyID }: IMusiciansDTO): void;
}

export { IMusiciansDTO, IMusiciansRepository };
