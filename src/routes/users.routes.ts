import { Router } from "express";

// Turn v4 method to uuidV4
import { v4 as uuidV4 } from "uuid";

const usersRoutes = Router();

const users = [];

usersRoutes.post("/", (request, response) => {
  const { name, instrument, age, companyId, isAdmin, created_at, updated_at } =
    request.body;

  const user = {
    userId: uuidV4(),
    name,
    instrument,
    age,
    companyId,
    isAdmin,
    created_at,
    updated_at,
  };

  users.push(user);

  return response.status(201).send(user);
});

export { usersRoutes };
