var mdiv = document.createElement('div');
mdiv.setAttribute('class','container');

var bcard = document.createElement('div');
bcard.setAttribute('class', 'card');

var to = document.createElement('img');
to.setAttribute('class', 'card-img-top si');
to.src = "world.jpg"

var idiv = document.createElement('div');
idiv.setAttribute('class', 'card-body');
idiv.id = "holly";

var bo = document.createElement('h4');
bo.style.textAlign = "center";
bo.setAttribute('class', 'card-title');
bo.innerHTML = "COUNTRIES OF THE WORLD";
bo.id = "bof";


var bot = document.createElement('div');
bot.setAttribute('class', 'card-text');

idiv.append(bo, bot);
bcard.append(to, idiv);
mdiv.append(bcard);


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
       var cdiv = document.createElement('div');
       cdiv.setAttribute('class', 'card');
       cdiv.id = "colorid";

       var cdiv1= document.createElement('div');
       cdiv1.setAttribute('class', 'card-body');

       var tdiv = document.createElement('h3');
       tdiv.setAttribute('class', 'card-title');
       tdiv.innerHTML = df[i].name;

       var ccdiv = document.createElement('h5');
       ccdiv.setAttribute('class', 'card-subtitle');
       ccdiv.innerHTML = df[i].capital;

       let p1 = document.createElement('h6');
       p1.setAttribute('class', 'card-text');
       p1.innerHTML = df[i].region;

       let p2 = document.createElement('p');
       p2.setAttribute('class', 'card-text');
       p2.innerHTML = df[i].latlng;

       let p3 = document.createElement('p');
       p3.setAttribute('class', 'card-text');
       let x=[];
       for (var j = 0; j< df[i].currencies.length; j++)
       {
         x.push('( ' + df[i].currencies[j].code + ' , ' + df[i].currencies[j].name + ' , ' + df[i].currencies[j].symbol + ' )')
       }
       p3.innerHTML = x

       let lp = document.createElement('a');
       lp.href = df[i].flag;
       lp.setAttribute('class', 'card-link');
       
       lp.innerHTML = df[i].flag;

      cdiv1.append(tdiv, ccdiv, p1, p2, p3, lp);
      cdiv.append(cdiv1);
      mdiv.append(cdiv);
    }
    
    }, function(error) {
        bot.innerHTML = error;
    });
}















document.body.append(mdiv);

