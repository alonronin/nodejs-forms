var util = require('util');

exports.loadTypes = function(mongoose)
{
    var File = function File(path,options)
    {
        File.super_.call(this,path,options);
    };
    util.inherits(File,mongoose.SchemaTypes.Mixed);

    mongoose.Types.File = Object;
    mongoose.SchemaTypes.File = File;

    exports.File = File;



    var Integer = function Integer(path,options)
    {
        Integer.super_.call(this, path, options);
    };
    util.inherits(Integer,mongoose.SchemaTypes.Number);
    Integer.prototype.cast = function(value,doc,init)
    {
        var num = Integer.super_.prototype.cast.call(this, value, doc, init);
        return Math.floor(num);
    };

    mongoose.Types.Integer = Number;
    mongoose.SchemaTypes.Integer = Integer;

    exports.Integer = Integer;
    
    var GeoPoint = function GeoPoint(path,options) {
        GeoPoint.super_.call(this,path,options);
    };
    util.inherits(GeoPoint,mongoose.SchemaTypes.Mixed);

    exports.GeoPoint = GeoPoint;

    mongoose.Types.GeoPoint = Object;
    mongoose.SchemaTypes.GeoPoint = GeoPoint;

    var Text = function Text(path,options) {
        Text.super_.call(this,path,options);
    };
    util.inherits(Text,mongoose.SchemaTypes.String);

    exports.Text = Text;

    mongoose.Types.Text = String;
    mongoose.SchemaTypes.Text = Text;

    var Html = function Html(path,options) {
        Html.super_.call(this,path,options);
    };
    util.inherits(Html,Text);

    exports.Html = Html;

    mongoose.Types.Html = String;
    mongoose.SchemaTypes.Html = Html;
};

