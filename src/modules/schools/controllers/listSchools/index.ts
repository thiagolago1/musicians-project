import { SchoolsRepository } from "../../respositories/SchoolsRepository";
import { ListSchoolsController } from "./ListSchoolsController";
import { ListSchoolsUseCase } from "./ListSchoolsUseCase";

const schoolsRepository = SchoolsRepository.getInstance();
const listSchoolsUseCase = new ListSchoolsUseCase(schoolsRepository);
const listSchoolsController = new ListSchoolsController(listSchoolsUseCase);

export { listSchoolsController };
