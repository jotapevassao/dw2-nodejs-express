// importando a Orm Sequelize
import Sequelize from "sequelize";

// Definindo os dados de conexâo com de dados 
const connection = new Sequelize({
    // tipo do banco 
    dialect: 'mysql',
    // Endereço do banco
    host: 'localhost',
    // nome de usuario do banco
    username:'root',
//Senha
    password: "",
        
    timezone: "-03:00",
})
export default connection