const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "activity",
    { // todo probar que el id lo genere sequelize
      // id: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      //   primaryKey: true,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"), // * Son opciones del ENUM
        allowNull: false,
      },
      duration: {
        type: DataTypes.STRING, 
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM("Spring", "Summer", "Autumn", "Winter"), // * Son opciones del ENUM
        allowNull: false,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      }
    },
    {
      timestamps: false,
    }
  );
};
