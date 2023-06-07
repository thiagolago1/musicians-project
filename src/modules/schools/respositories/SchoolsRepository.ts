import { ISchoolsRepository, ISchoolsDTO } from "../../interfaces/ISchools";
import { School } from "../School";

class SchoolsRepository implements ISchoolsRepository {
  private schools: School[];

  private static INSTANCE: SchoolsRepository;

  private constructor() {
    this.schools = [];
  }

  public static getInstance(): SchoolsRepository {
    if (!SchoolsRepository.INSTANCE) {
      SchoolsRepository.INSTANCE = new SchoolsRepository();
    }
    return SchoolsRepository.INSTANCE;
  }

  findByName(name: string): School {
    const school = this.schools.find(school => school.name === name);
    return school;
  }

  list(): School[] {
    return this.schools;
  }

  create({ name, address }: ISchoolsDTO): void {
    const school = new School();

    Object.assign(school, {
      name,
      address,
      createAt: new Date(),
      updatedAt: new Date(),
    });

    this.schools.push(school);
  }
}

export { SchoolsRepository };
