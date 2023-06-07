import { SchoolsRepository } from "../../respositories/SchoolsRepository";
import { CreateSchoolController } from "./CreateSchoolController";
import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

const schoolsRepository = SchoolsRepository.getInstance();
const createSchoolUseCase = new CreateSchoolUseCase(schoolsRepository);
const createSchoolController = new CreateSchoolController(createSchoolUseCase);

export { createSchoolController };
