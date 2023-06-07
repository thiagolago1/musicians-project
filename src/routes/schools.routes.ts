import { Router } from "express";

import { createSchoolController } from "../modules/schools/controllers/createSchool";
import { listSchoolsController } from "../modules/schools/controllers/listSchools";

const schoolsRoutes = Router();

// Get School
schoolsRoutes.get("/", (request, response) => {
  return listSchoolsController.handle(request, response);
});

// Create School
schoolsRoutes.post("/", (request, response) => {
  return createSchoolController.handle(request, response);
});

// Update School
schoolsRoutes.put("/edit/:schoolId", (request, response) => {
  const { schoolId } = request.params;
  const { name, adminId, address } = request.body;

  const findSchoolIndex = schools.findIndex((school) => school.schoolId === schoolId);

  if (findSchoolIndex > -1) {
    schools[findSchoolIndex] = {
      ...schools[findSchoolIndex],
      name,
      adminId,
      address,
    };

    return response.status(200).json(schools[findSchoolIndex]);
  }
  return response.status(404).json({ message: "Deu ruim malandro!" });
});

// Delete School
schoolsRoutes.delete("/:schoolId", (request, response) => {
  const { schoolId } = request.params;

  const schoolIndex = schools.findIndex((school) => school.schoolId === schoolId);

  schools.splice(schoolIndex, 1);

  return response.status(200).send({ message: "Escola deletada!" });
});

export { schoolsRoutes };
