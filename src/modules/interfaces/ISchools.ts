import { School } from "../schools/School";

interface ISchoolsDTO {
  name: string;
  address: string;
}

interface ISchoolsRepository {
  findByName(name: string): School;
  list(): School[];
  create({ name, address }: ISchoolsDTO): void;
}

export { ISchoolsDTO, ISchoolsRepository };
