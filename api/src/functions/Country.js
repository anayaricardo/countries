const { Country, Activity } = require("../db");
const axios = require("axios");
const sequelize = require("sequelize");

module.exports = {
  getCountries: async (req, res) => {
    try {
    const countriesApi = await axios.get("https://restcountries.com/v3.1/all");
      if (req.query.name) {
        return await Country.findAll({
          include: [
            {
              model: Activity,
            },
          ],
          where: {
            name: { [sequelize.Op.like]: `%${req.query.name}%` },
          },
        })
          .then((country) =>
            country.length
              ? res.send(country)
              : res.status(404).send("No countries found")
          )
          .catch((err) =>
            {error}
          );
      }
      await Promise.all(
        countriesApi.data.map((e) => {
          let {
            cca3,
            name,
            flags,
            continents,
            capital,
            subregion,
            area,
            population,
          } = e;
          let data = {
            id: cca3,
            name: name.common,
            flags: flags.svg,
            // flags: flags.svg, //* probar con svg
            continents:
              continents[0].split(" ").length > 1
                ? continents[0].split(" ")[1]
                : continents[0], // Ternario para que no de error si no tiene continente y para separar los continentes
            capital: capital ? capital[0] : "The country has no capital", // Ternario para que no de error si no tiene capital
            subregion: subregion ? subregion : "The country has no subregion", // Ternario para que no de error si no tiene subregion
            area: Math.round(area), // Math.round para redondear el numero
            population: population,
          };
          Country.findOrCreate({ where: data }).catch((error) => error);
        })
      );
      await Country.findAll({
        include: [
          {
            model: Activity,
          },
        ],
        limit: 250,
      }).then((results) => res.send(results));
    } catch (error) {
      console.error(error)
    }
  },

  getByName: async (req,res) => {
    try {
      // const name = req.params.name;
      const country = await Country.findAll({
        include: [
          {
            model: Activity,
          }
        ],
        where: {
          name: { [sequelize.Op.iLike]: `%${req.params.name}%` },
        },
      });
      if (country) {
        res.send(country);
      } else {
        res.status(404).send("Country not found");
      }
    } catch (error) {
      console.error(error)
    }
  },

  // getByName: async (req, res) => {
  //   if (req.query.name) {
  //     return await Country.findAll({
  //       include: [
  //         {
  //           model: Activity,
  //         },
  //       ],
  //       where: { name: { [sequelize.Op.iLike]: `%${req.query.name}%` } },
  //     })
  //       .then((country) =>
  //         country.length
  //           ? res.send(country)
  //           : res.status(404).send("Country not found")
  //       )
  //       .catch((error) => {
  //         error;
  //       });
  //   }
  // },

  getById: async (req, res, next) => {
    try {
      const id = req.params.id;
      const country = await Country.findAll({
        include: [
          {
            model: Activity,
          },
        ],
        where: {
          id: { [sequelize.Op.iLike]: `${id}` },
        },
      });
      if (country) {
        res.send(country);
      } else {
        res.status(404).send("Country not found");
      }
    } catch (error) {
      console.error(error)
    }
  },

  // getById: async (req, res, next) => {
  //   const id = req.params.id;
  //   return await Country.findAll({
  //     include: [
  //       {
  //         model: Activity,
  //       },
  //     ],
  //     where: { id: { [sequelize.Op.iLike]: `${id}` } },
  //   })
  //     .then((results) =>
  //       results.length
  //         ? res.send(results)
  //         : res.status(404).send("ID not found")
  //     )
  //     .catch((error) => next(error));
  // },

  getAll: async (req, res) => {
    if (req.query.name) {
      return await Country.findAll({
        include: [
          {
            model: Activity,
          },
        ],
        where: { name: { [sequelize.Op.iLike]: `%${req.query.name}%` } },
      })
        .then((country) => (country.length ? res.send(country) : res.send([])))
        .catch((error) => {
          error;
        });
    } else {
      return await Country.findAll({
        include: [
          {
            model: Activity,
          },
        ],
        limit: 250,
      }).then((results) => res.send(results));
    }
  },
};
