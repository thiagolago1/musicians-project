import { Request, Response } from "express";

import { CreateSchoolUseCase } from "./CreateSchoolUseCase";

class CreateSchoolController {
  constructor(private createSchoolUseCase: CreateSchoolUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, address } = request.body;

    this.createSchoolUseCase.execute({ name, address });

    return response.status(201).send();
  }
}

export { CreateSchoolController };
