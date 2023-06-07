import { SchoolsRepository } from "../../respositories/SchoolsRepository";

interface IRequest {
  name: string;
  address: string;
}

class CreateSchoolUseCase {
  constructor(private schoolsRepository: SchoolsRepository) {}

  execute({ name, address }: IRequest): void {
    const schoolAlreadyExists = this.schoolsRepository.findByName(name);

    if (schoolAlreadyExists) {
      throw new Error("School already exists");
    }
    this.schoolsRepository.create({ name, address });
  }
}

export { CreateSchoolUseCase };
