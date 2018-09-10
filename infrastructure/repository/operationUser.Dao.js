var sequelize = require('../../config/mssql.connect').sequelize;

class OperationUser{

constructor(){}

    addUser(userName){
        return new Promise((resolve, reject) => {
            try{
                let query = `INSERT INTO USERS (name, date_record) VALUES (:userName, GETDATE())`;

                let replacements = {
                    userName: userName
                };
                sequelize.query(query, {
                    replacements :replacements
                }).then(res => {
                    //console.log('success insert');
                    resolve(res);
                }).catch(err => {
                    console.log("something wrong");
                    reject();
                })
            }catch(error){
                console.log("Error on try, caused by: ", error);
            }
        })
    }


    deleteUser(idUser){
        return new Promise((resolve, reject) => {
            try{
                let query = `DELETE FROM USERS WHERE idUser = :idUser`;

                let replacements = {
                    idUser: idUser
                };
                sequelize.query(query, {
                    replacements : replacements
                }).then(res => {
                    //console.log('success deleted');
                    resolve(res);
                }).catch(err => {
                    console.log("something wrong");
                    reject();
                })
            }catch(error){
                console.log("Error on try, caused by: ", error);
            }
        })
    }


    editUser(idUser, userName){
        return new Promise((resolve, reject) => {
            try{
                let query = `UPDATE USERS SET name = :userName WHERE idUser = :idUser`;

                let replacements = {
                    idUser: idUser,
                    userName : userName
                };
                sequelize.query(query, {
                    replacements : replacements
                }).then(res => {
                    //console.log('success edited');
                    resolve(res);
                }).catch(err => {
                    console.log("something wrong");
                    reject();
                })
            }catch(error){
                console.log("Error on try, caused by: ", error);
            }
        })
    }


}
module.exports = OperationUser;