const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FamilyMember extends Model {}

FamilyMember.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    fam_name: {
      type: DataTypes.STRING,
    },
    fam_rel: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.STRING,
    },
    friend_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "friend",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "FamilyMember",
  }
);

module.exports = FamilyMember;
