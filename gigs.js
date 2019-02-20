var $ = require('jquery')
var Nightmare = require('nightmare')
nightmare = Nightmare({
    show: true
});

var city = 'Chicago'

nightmare.goto('https://london.craigslist.org/search/cpg?is_paid=yes&postedToday=0')
.wait(2000)
.evaluate(function() {
    //var gigs = ['blah'];
    //return gigs
    var gigs = ['gg'];
    
    // $('.hdrlink').each(function() {        
    //     gigs.push($(this).text());
    // });
    
    return gigs;
})
.end()
.then(function(result) {
    console.log(result)
})
