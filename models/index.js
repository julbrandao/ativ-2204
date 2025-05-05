const { Sequelize, DataTypes } = require("sequelize");
const config = require(__dirname + '/../config/config.js')[env];
const sequelize = new Sequelize(config.development);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Categoria = require("./categoria")(sequelize, DataTypes);
db.Aluno = require("./aluno")(sequelize, DataTypes);
db.Produto = require("./produto")(sequelize, DataTypes);
db.Curso = require("./curso")(sequelize, DataTypes);
db.Professor = require("./professor")(sequelize, DataTypes);
db.Turma = require("./turma")(sequelize, DataTypes);


Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db; 