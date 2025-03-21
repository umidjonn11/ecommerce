import { QueryResult } from "pg";
import { pool } from "../config";
import { ICreateCountry, IUpdateCountry, ICountry } from "../constants/country";
export async function createCountry(dto: ICreateCountry): Promise<ICountry> {
  try {
    const query = `
    INSERT INTO countries (name,continent) VALUES ($1,$2) RETURNING *;
    `;
    const country: QueryResult = await pool.query(query, [
      dto.name,
      dto.continent,
    ]);
    return country.rows[0];
  } catch (error) {
    console.error("Failed to create a country", error);
    throw new Error("Failed to create country");
  }
}
export async function FindByID(id: number): Promise<ICountry | null> {
  try {
    const query = `SELECT FROM countries WHERE id=$1`;
    const result: QueryResult<ICountry> = await pool.query(query, [id]);
    return result.rows.length ? result.rows[0] : null;
  } catch (error) {
    console.error("Failed finding user by id", error);
    throw new Error("failed finding user by id");
  }
}

export async function UpdateCountry(
  id: number,
  dto: IUpdateCountry
): Promise<void> {
  try {
    const country = await FindByID(id);
    if (!country) throw new Error("User not found");
    const updateData: IUpdateCountry = {
      name: dto.name || country.name,
      continent: dto.continent || country.continent,
    };
    const query = `
    UPDATE countries SET name=$1,continent=$2 WHERE id=$3
    `;
    await pool.query(query, [updateData.name, updateData.continent, id]);
  } catch (error) {
    console.error("Error updating user", error);
    throw new Error("Failed to update user");
  }
}

export async function deleteCountry(id: number): Promise<void> {
  try {
    const query = `
        DLETE FROM countries WHERE id =$1
        `;
    await pool.query(query, [id]);
  } catch (error) {
    console.error("failed deleting country", error);
    throw new Error("Failed deleting country");
  }
}
