'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function (models) {
    // associations can be defined here
    Matriculas.belongsTo(models.Pessoas, {
      foreingKey: "estudante_id"
    })
    Matriculas.belongsTo(models.Turmas, {
      foreingKey: "turma_id"
    })
  };
  return Matriculas;
};