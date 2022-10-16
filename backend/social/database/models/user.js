const { Model } = require('objection');

class User extends Model{
    
    static get tableName(){
        return 'User_Profile';
    }
    
    static get idColumn() {
        return 'user_id';
    }
}

module.exports = User;