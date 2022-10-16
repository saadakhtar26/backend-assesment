const { Model } = require('objection');

class Tenant extends Model{
    
    static get tableName(){
        return 'Tenant_Profile';
    }

    static get idColumn() {
        return 'tenant_id';
    }
}

module.exports = Tenant;