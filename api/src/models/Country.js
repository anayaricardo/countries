const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "country",
    {
      id: {
        type: DataTypes.STRING, // ! "cca3" es el id del pais
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING, // ! "common" es el nombre del pais
        allowNull: false,
      },
      flags: {
        type: DataTypes.STRING, // todo probar png o svg
        allowNull: false,
      },
      continents: {
        type: DataTypes.STRING, // ! Es un array de strings
        allowNull: false,
      },
      capital: {
        type: DataTypes.STRING, // ! Es un array de strings, algunos no tienen capital
        allowNull: false,
      },
      subregion: {
        type: DataTypes.STRING, // ! Es un string con el nombre de la subregion, algunos no tienen
        allowNull: false,
      },
      area: {
        type: DataTypes.INTEGER, // * Es un numero
        allowNull: false,
      },
      population: {
        type: DataTypes.INTEGER, // * Es un numero
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};


