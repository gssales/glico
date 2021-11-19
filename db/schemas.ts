
export const Schemas = [
  { 
    tableName: 'User',
    columns: [
      { name: 'id', type: 'INTEGER PRIMARY KEY AUTOINCREMENT', },
      { name: 'name', type: 'TEXT', },
      { name: 'gender', type: 'TEXT', },
      { name: 'birthday', type: 'NUMERIC', },
      { name: 'diabetes_type', type: 'TEXT', },
      { name: 'max_glucose', type: 'INTEGER', }, 
      { name: 'target_glucose', type: 'INTEGER', }, 
      { name: 'min_glucose', type: 'INTEGER', }, 
      { name: 'carb_ratio', type: 'INTEGER', }, 
      { name: 'sensibility_factor', type: 'REAL', }, 
      { name: 'weight', type: 'REAL', }, 
      { name: 'height', type: 'REAL', }, 
    ],
  },
  { 
    tableName: 'Entry',
    columns: [
      { name: 'id', type: 'INTEGER PRIMARY KEY AUTOINCREMENT', },
      { name: 'timestamp', type: 'NUMERIC', },
      { name: 'glucose', type: 'INTEGER', },
      { name: 'insulin_bc', type: 'REAL', }, 
      { name: 'insulin_br', type: 'REAL', }, 
      { name: 'meal_carbs', type: 'REAL', }, 
      { name: 'annotations', type: 'TEXT', },
    ],
  },
  {
    tableName: 'Meal',
    columns: [
      { name: 'id_entry', type: 'INTEGER REFERENCES Entry(id)', },
      { name: 'id_food', type: 'INTEGER REFERENCES Food(id)', },
      { name: 'amount', type: 'INTEGER, PRIMARY KEY (id_entry,id_food)' },
    ],
  },
  { 
    tableName: 'Food',
    columns: [
      { name: 'id', type: 'INTEGER PRIMARY KEY AUTOINCREMENT', },
      { name: 'name', type: 'TEXT', },
      { name: 'carbs', type: 'INTEGER', },
      { name: 'calories', type: 'INTEGER', },
      { name: 'measure', type: 'TEXT', },
    ],
  },
];
