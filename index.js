
module.exports.forms = require('./forms');

module.exports.fields = require('./fields');

module.exports.widgets = require('./widgets');

module.exports.types = require('./mongoose-types');

module.exports.loadTypes = module.exports.types.loadTypes;

module.exports.setAmazonCredentials = module.exports.fields.setAmazonCredentials;

module.exports.register_models = module.exports.forms.set_models;

module.exports.serve_static = function(app,express)
{
    app.use(express.static(__dirname + '/static'));
};