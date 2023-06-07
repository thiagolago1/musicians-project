import { Request, Response } from "express";

import { ListSchoolsUseCase } from "./ListSchoolsUseCase";

class ListSchoolsController {
  constructor(private listSchoolsUseCase: ListSchoolsUseCase) {}
  handle(request: Request, response: Response): Response {
    const allSchools = this.listSchoolsUseCase.execute();

    return response.status(201).send(allSchools);
  }
}

export { ListSchoolsController };
