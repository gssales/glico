import { Asset } from "expo-asset";
import * as SQLite from "expo-sqlite";
import { WebSQLDatabase } from "expo-sqlite";
import { Platform } from "react-native";
import { Schemas } from './schemas';


export default class SQLiteManager {

  openConnection(): WebSQLDatabase | { exec: (queries: SQLite.Query[], readOnly: boolean, callback: SQLite.SQLiteCallback) => void}{
    if (Platform.OS === 'web') {
      return {
        exec: (queries: SQLite.Query[], readOnly: boolean, callback: SQLite.SQLiteCallback) => {},
      };
    }
    const db = SQLite.openDatabase('db.db');
    return db;
  }

  async runQuery(query: string, args: string[] = []): Promise<any> {
    return new Promise<any> ((resolve, reject) => {
      try {
        const db = this.openConnection();
        db.exec([{ sql: query, args: args }], false, (error, resultSet) => {
          if (resultSet)
            resolve(resultSet);
          else
            reject(error);
        })
      } catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  createTable(table: { tableName: string, columns: { name: string, type: string }[] }) {
    let sql = `CREATE TABLE ${table.tableName} `;
    const createColumns = [];
    for (const c of table.columns) {
      createColumns.push(`${c.name} ${c.type}`);
    }
    sql += `(${createColumns.join(', ')});`;
    this.runQuery(sql);
  }

  createTablesFromSchema() {
    for (const table of Schemas)
      this.createTable(table);
  }
}