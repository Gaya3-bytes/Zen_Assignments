var mdiv = document.createElement('div');
mdiv.setAttribute('class','container');

var bcard = document.createElement('div');
bcard.setAttribute('class', 'card');

var to = document.createElement('img');
to.setAttribute('class', 'card-img-top si');
to.src = "world.jpg"

var idiv = document.createElement('div');
idiv.setAttribute('class', 'card-body');

var bo = document.createElement('h4');
bo.style.textAlign = "center";
bo.setAttribute('class', 'card-title');
bo.innerHTML = "COUNTRIES OF THE WORLD";


var bot = document.createElement('div');
bot.setAttribute('class', 'card-text');






var a = [];

var b = document.createElement('br');


if(window.Promise) {
    var promise = new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', 'https://restcountries.eu/rest/v2/all');
      request.onload = function() {
        if ((request.status >= 200) && (request.status <=300)) {
            resolve(request.response);
        } else {
            reject(Error(request.statusText));
        }
      };
      request.onerror = function() {
        reject(Error('error'));
    };
      request.send();
    });

    promise.then(function(data) {
    var df = JSON.parse(data);    
    for (var i= 0; i<df.length ;i++) 
    { 
       a.push ( "(  Country Name: "  + df[i].name + ' ; Capital: ' + df[i].capital + ' ; Region: ' + df[i].region + '; Latlng: ' + df[i].latlng + 
       ' ; Flag: ' + df[i].flag + ' ; Currencies: ' + "name- " + df[i].currencies[0].name + ", code- " + df[i].currencies[0].code + ", symbol- " + df[i].currencies[0].symbol  
       + ")  **************** ");   
    }
    bot.innerHTML = a;

    }, function(error) {
        bot.innerHTML = error;
    });
}











idiv.append(bo, bot);
bcard.append(to, idiv);
mdiv.append(bcard);


document.body.append(mdiv);

