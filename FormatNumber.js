/************************
 * Provides base functionality to format strings as numbers like string.format
 * in ".NET". Modify to your liking. Note: this is not a full implementation. 
 *
 * Author: OhRyanOh
 * https://github.com/OhRyanOh
 *
 * Sources:
 * http://joquery.com/2012/string-format-for-javascript
 * http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
 * http://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery
 ***/

// Converts strings to numbers based on format...
// ex: str = '344435.333333333', format = 'f3', returns = 344435.333
String.convert = function(value, format) {
    var type = format.substring(0, 1);
    var precision = format.substring(1);
    switch (type) {
        case 'd':
            return parseFloat(parseInt(value, 10)).toFixed(0);
        case 'e':
            return parseFloat(value).toExponential(precision);
        case 'f':
            return parseFloat(value).toFixed(precision);
        case 'p':
            return parseFloat(value).toPrecision(precision);
        case 'x':
            return parseInt(value).toString(16);
        default:
            return value;
    }
}

// Pulls all arguments and formats from a string to an array
// ex: value = "{0:f3} - {1:f3}", returns = ['0:f3', '1:f3']
String.args = function (value) {
    var results = [];
    var result = value.split("{");
    for(var i = 0, len = result.length; i < len; i++) {
        var innerResult = result[i].split("}");
        results.push(innerResult[0]);
    }
    return results;
}

// Pulls out formats and replaces them with number conversions based
// on the extra arguments passed to this function.
String.formatNumber = function() {
    var value = arguments[0];
    var args = String.args(value);
    
    for (var i = 1; i < arguments.length; i++) {
        var regularExpression = new RegExp("\\{" + args[i] + "\\}", "gm");
        var format = args[i].split(":", 2);
        if (format.length < 2)
            value = value.replace(regularExpression, arguments[i]);
        else
            value = value.replace(regularExpression, String.convert(arguments[i], format[1]));
    }
    
    return value;
}
