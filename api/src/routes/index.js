const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Country = require("./Country");
const Activity = require("./Activity");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/country", Country);
router.use("/activity", Activity);

module.exports = router;
