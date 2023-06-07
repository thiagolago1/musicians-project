import { v4 as uuidV4 } from "uuid";

import { Musician } from "../teachers/Musician";

class School {
  id?: string;
  name: string;
  adminId: string;
  musiciansNumber: number;
  address: string;
  isActive: boolean;
  musiciansRecord: Array<Musician>;
  createdAt: Date;
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.adminId = "";
    this.musiciansNumber = 0;
    this.musiciansRecord = [];
    this.isActive = true;
  }
}

export { School };
