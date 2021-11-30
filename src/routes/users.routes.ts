import { Router } from "express";

// Turn v4 method to uuidV4
import { v4 as uuidV4 } from "uuid";

const usersRoutes = Router();

const users: {
  userId: string;
  name: string;
  instrument: string;
  age: number;
  companyId?: string;
  isAdmin: boolean;
  created_at: Date;
  updated_at: Date;
}[] = [];

// Create users
usersRoutes.post("/", (request, response) => {
  const { name, instrument, age, companyId, isAdmin } =
    request.body;

  const user = {
    userId: uuidV4(),
    name,
    instrument,
    age,
    companyId,
    isAdmin,
    created_at: new Date(),
    updated_at: new Date(),
  };

  users.push(user);

  return response.status(201).send(user);
});

// Get users
usersRoutes.get("/", (request, response) => {
  const usersArray = users;

  return response.status(201).json(usersArray);
});

// Get user by userId
usersRoutes.get("/:userId", (request, response) => {
  const { userId } = request.params;

  let userFinded = {};

  const findUserIndex = users.findIndex((user) => user.userId === userId);

  if (findUserIndex > -1) {
    userFinded = users[findUserIndex];
  }

  return response.status(201).json(userFinded);
});

// Update user
usersRoutes.put("/edit/:userId", (request, response) => {
  const { userId } = request.params;
  const { name, instrument, age, companyId, isAdmin } = request.body;

  const findUserIndex = users.findIndex((user) => user.userId === userId);

  if (findUserIndex > -1) {
    users[findUserIndex] = {
      ...users[findUserIndex],
      userId,
      name,
      instrument,
      age,
      companyId,
      isAdmin,
    };

    return response.status(200).json(users[findUserIndex]);

  } else {

    return response.status(404).json({ message: 'Deu ruim malandro!'});

  }

  
});

// Delete user
usersRoutes.delete("/:userId", (request, response) => {
  const { userId } = request.params;

  const findUserIndex = users.findIndex((user) => user.userId === userId);

  users.splice(findUserIndex, 1);

  return response.status(200).send({ message: "Usário deletado!" });
});

export { usersRoutes };
