import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
  findAvailable({
    brand,
    category_id,
    name,
  }: {
    brand?: string;
    category_id?: string;
    name?: string;
  }): Promise<Car[]>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  create(data: ICreateCarDTO): Promise<Car>;
}

export { ICarsRepository };
