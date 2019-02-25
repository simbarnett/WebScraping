var $ = require('jquery')
var Nightmare = require('nightmare')
nightmare = Nightmare({
    show: true
});

// nightmare.goto('http://www.morningstar.co.uk/uk/fundscreener/default.aspx')
nightmare.goto('https://google.co.uk')
.wait(2000)
.evaluate(function(){

    var gigs = ['gg'];
    
    $('div').each(function() {        
        gigs.push('123');
    });

    // $('.hdrlink').each(function() {        
    //     gigs.push($(this).text());
    // });
    
    return gigs.length;
})
.end()
.then(function(result) {
    console.log(result)
})
.catch(error => console.error(error))