const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

module.exports = {
  addNewActivity: async (req, res) => {
    const { name, difficulty, duration, season, country } = req.body;
    const newActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    let countries = country;
    if (typeof country === "string") {
      countries = country.split(",");
    }
    const countryIds = await Country.findAll({
      where: {
        name: {
          [Op.in]: Array.isArray(countries) ? countries : [countries],
        },
      },
    });
    await newActivity.setCountries(countryIds);
    res.send(newActivity);
  },

  getAllActivities: async (req, res) => {
    let activities = await Activity.findAll({
      include: [
        {
          model: Country,
        },
      ],
    });
    res.send(activities);
  },
};
