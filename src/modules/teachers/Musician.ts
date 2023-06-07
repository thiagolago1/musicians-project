import { v4 as uuidV4 } from "uuid";

class Musician {
  id?: string;
  name: string;
  instrument: string;
  age: number;
  isActive: boolean;
  isAdmin: boolean;
  companyID: string;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Musician };
