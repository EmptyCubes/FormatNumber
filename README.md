FormatNumber
============

Provides base functionality to format strings as numbers like string.format in ".NET". Modify to your liking.


http://jsfiddle.net/OhRyanOh/FD5Rb/


<div>
    <h2 id="resultVal"></h2>
</div>



$(document).ready(function(){
    var var1 = 123123.123123,
        var2 = 2012.344;
    
    var value = String.formatNumber('{0:d} - {1:f2}', var1, var2);

    $("#resultVal").append(value);
});
