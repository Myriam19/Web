module.exports = {
    index : function (req, res) {
        Address.find({
            owner: req.user.id
            }).exec(function (err, records) {
            var data = {};
            data.lesaddresses = records;
            return res.view('account', data);
        });
    }
}