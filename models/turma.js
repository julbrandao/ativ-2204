// models/turma.js
module.exports = (sequelize, DataTypes) => {
  const Turma = sequelize.define("Turma", {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
 
  });


  return Turma;
};
