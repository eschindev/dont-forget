const sequelize = require('../config/connection');
const { User, Friend, FamilyMember } = require('../models');


const user = require('./user.json');
const friend = require('./friend.json');
const familyMember = require('./FamilyMember.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(user, {
    individualHooks: true,
    returning: true,
  });

  await Friend.bulkCreate(friend);
  await FamilyMember.bulkCreate(familyMember);


  process.exit(0);
};

seedDatabase();