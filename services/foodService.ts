import SQLiteManager from "../db/db";
import { FoodList } from "../db/food";
import { Food } from "../models/Food";

export default class FoodService {
  db: SQLiteManager;

  constructor() {
    this.db = new SQLiteManager();
  }

  async getAll(): Promise<Food[] | any> {
    const query = "SELECT * FROM Food ORDER BY name";
    const result = await this.db.runQuery(query);
    return result[0].rows;
  }

  async search(term: string): Promise<Food[] | any> {
    const query = "SELECT * FROM Food WHERE name LIKE ? ORDER BY name";
    const arg = `%${term}%`;
    const result = await this.db.runQuery(query, [arg]);
    console.log(result);
    return result[0].rows;
  }

  async populate() {
    for (let f of FoodList) {
      const stmt = `INSERT INTO Food(name,measure,carbs,calories) VALUES("${f.name}","${f.measure}",${f.carbs},${f.calories})`;
      const r = await this.db.runQuery(stmt);
      console.log(r);
    }
  }
}