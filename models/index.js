const User = require('./User');
const Friend = require('./Friend');
const FamilyMember = require('./FamilyMember');


User.hasMany(Friend, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  Friend.belongsTo(User, {
    foreignKey: 'user_id'
  });

  Friend.hasMany(FamilyMember, {
    foreignKey: 'friend_id',
    onDelete: 'CASCADE'
  });

  FamilyMember.belongsTo(Friend, {
    foreignKey: 'friend_id'
  });



module.exports = { User, Friend, FamilyMember };