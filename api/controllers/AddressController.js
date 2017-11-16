
module.exports = {
    ma_methode: function(req, res) {
        return res.json({user: 'toto'});
    },

    find : function(req, res){
        Address.find().exec(function(err, records){
            return res.json(records);
        });
    }
};