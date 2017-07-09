const express = require('express');
const router = express.Router();

//Ruta de la raiz, redirecciona a index.html
router.get('/', function(req, res, next) {
    res.redirect('/index.html');
});

//Ruta que hace la llamada a la bd, devuelve la lista de los estudiantes
router.get('/students', function(req, res, next) {

    const students = req.app.locals.db.get('students')
    .value();
    //console.log("students", students);
    res.json(students);

});

module.exports = router;
