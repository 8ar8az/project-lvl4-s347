export default () => (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  Tag.associate = (models) => {
    Tag.belongsToMany(models.Task, { through: 'TaskTags' });
  };

  return Tag;
};
