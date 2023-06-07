import { SchoolsRepository } from "../../respositories/SchoolsRepository";
import { School } from "../../School";

class ListSchoolsUseCase {
  constructor(private schoolsRepository: SchoolsRepository) {}

  execute(): School[] {
    const schoolsList = this.schoolsRepository.list();

    // if (schoolsList) {
    //   throw new Error("List doesn't exist");
    // }
    return schoolsList;
  }
}

export { ListSchoolsUseCase };
