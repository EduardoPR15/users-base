const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) =>{
    return bcrypt.hashSync(plainPassword, 10)
}
//console.log(hashPassword('12345'));

const comparePassword = (plainPassword, hashPassword) =>{
    return bcrypt.compareSync(plainPassword,hashPassword)
}
//console.log(comparePassword('12345', '$2b$10$bG/xoNpNqwEPas.qC1oZ6OBfCy2VLDMJDMnrxE38vUnUFDhbmsV4m'))

module.exports ={
    hashPassword,
    comparePassword
}