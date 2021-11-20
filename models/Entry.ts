export type Entry = {
  id?: number;
  timestamp: Date;
  glucose: number;
  insulin_br: number;
  insulin_bc: number;
  meal: string;
  meal_carbs: number;
  annotations: string;
};