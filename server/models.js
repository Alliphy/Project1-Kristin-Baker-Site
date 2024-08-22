import { DataTypes, Model } from "sequelize";
import util from "util";
import db from "./db.js";

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

export class Post extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Post.init(
  {
    postId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
    },
    authorId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
  },
  {
    modelName: "post",
    sequelize: db,
  }
);

export class Session extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}
Session.init(
  {
    userId: {
      type: DataTypes.INTEGER,
    },
    cookieId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    modelName: "session",
    sequelize: db,
  }
);

User.hasMany(Post, { foreignKey: "userId" });
Post.belongsTo(User, { foreignKey: "userId" });
