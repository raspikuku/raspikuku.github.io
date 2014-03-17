function recalc(name, value) {
    var colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'];

    $('#slider-' + name + '-displ').html(9 - value + ' ' + colors[9 - value]).css('background-color', colors[9 - value]);

    var base = parseInt($('#slider-1-displ').html()) + '' + parseInt($('#slider-2-displ').html());

    var multiplier = parseInt($('#slider-3-displ').html());
    multiplier = multiplier ? Math.pow(10, multiplier) : 1;

    var ohms = base * multiplier;
    var ohmStr = '';

    if (ohms >= 1000000) {
        ohmStr = parseFloat(ohms / 1000000) + ' M Ω';
    }
    else if (ohms >= 1000) {
        ohmStr = parseFloat(ohms / 1000) + ' K Ω';
    }
    else {
        ohmStr = parseInt(ohms) + ' Ω';
    }

    $('#result').html(ohmStr);
}

