import Sequelize from "sequelize";

const db = new Sequelize(
    process.env.DATABASE,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: "localhost",
        dialect: "postgres"
    }
)

export default db