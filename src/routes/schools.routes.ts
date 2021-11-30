import { request, Router } from "express";

// Turn v4 method to uuidV4
import { v4 as uuidV4 } from "uuid";

const schoolsRoutes = Router();

const schools : {
    schoolId: string;
    name: string;
    adminId: string;
    musiciansNumber: number;
    address: string;
    isActive: boolean;
    musiciansRecord: Array<Object>;
    createdAt: Date;
    updatedAt: Date
}[] = [];

// Get School
schoolsRoutes.get("/", (request, response) => {
    
    const schoolsArray = schools;

    return response.status(201).json(schoolsArray);
});

// Create School
schoolsRoutes.post("/", (request, response) => {

    const { name, adminId, address } = request.body;

    const school = {
        schoolId: uuidV4(),
        name,
        adminId,
        musiciansNumber: 0,
        address,
        isActive: true,
        musiciansRecord: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    schools.push(school);

    return response.status(201).send(school);
});

// Update School
schoolsRoutes.put("/edit/:schoolId", (request, response) => {
    const { schoolId } = request.params;
    const { name, adminId, address } = request.body;

    const findSchoolIndex = schools.findIndex((school) => school.schoolId === schoolId);

    if ( findSchoolIndex > -1) {
        schools[findSchoolIndex] = {
          ...schools[findSchoolIndex],
          name,
          adminId,
          address,
        };

    return response.status(200).json(schools[findSchoolIndex]);

    } else {

    return response.status(404).json({ message: 'Deu ruim malandro!'});

    }

});

// Delete School
schoolsRoutes.delete("/:schoolId", (request, response) => {
    const { schoolId } = request.params;

    const schoolIndex = schools.findIndex((school) => school.schoolId === schoolId);

    schools.splice(schoolIndex, 1);

    return response.status(200).send({ message: "Escola deletada!" });
});

export { schoolsRoutes };