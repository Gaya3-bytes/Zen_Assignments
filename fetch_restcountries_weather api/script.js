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




    
  





async function loadapi(url) { 
  let request = await fetch(url); 

  if ((request.status >= 200) && (request.status <=300)) {
    let df = await request.json(); 
    
    for (var i= 0; i<df.length ;i = i+3) 
    { 
       var cdiv = document.createElement('div');
       cdiv.setAttribute('class', 'card');
       cdiv.id = "colorid";

       var cdiv1= document.createElement('div');
       cdiv1.setAttribute('class', 'card-body');

       var ro = document.createElement('div');
       ro.setAttribute('class', 'row');






       var c1 = document.createElement('div');
       c1.setAttribute('class', 'col-lg-4 col-sm-12 fun');

       var star = document.createElement('div');
       star.setAttribute('class', 'card-header');

       var tdiv = document.createElement('h3');
       tdiv.setAttribute('class', 'card-title');
       tdiv.innerHTML = df[i].name;

       

       let lp = document.createElement('img');
       lp.setAttribute('class', 'card-img fro');
       lp.src = df[i].flag;
       
       
       star.append(tdiv, lp);
       

       var ccdiv = document.createElement('h6');
       ccdiv.setAttribute('class', 'card-subtitle');
       ccdiv.innerHTML = "Capital: " +  df[i].capital;

       let p1 = document.createElement('h6');
       p1.setAttribute('class', 'card-text');
       p1.innerHTML = "Region: " + df[i].region;

       let p2 =document.createElement('h6');
       p2.setAttribute('class', 'card-text');
       p2.innerHTML = "Country Code: " + df[i].alpha3Code;

       let p3 = document.createElement('button');
       p3.setAttribute('class', 'btn btn-primary');
       p3.innerHTML = "Click for Weather";
       var lat = df[i].latlng[0];
       var lon = df[i].latlng[1];
       
       p3.onclick = getWeather();
      
      
       
       
       
       async function getWeather() { 
       
        p3.onclick = getWeather(lat, lon);

       var data = await fetch(`
       https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=5151d501a141455f47dcc10160a16c21`); 
     
       if ((data.status >= 200) && (data.status <=300)) {
         var drum = await data.json(); 
         
         console.log (drum);
      
       }
       throw new Error(data.status);
     }




       var c2 = document.createElement('div');
       c2.setAttribute('class', 'col-lg-4 col-sm-12 fun');


       var star1= document.createElement('div');
       star1.setAttribute('class', 'card-header');

       var tdiv1 = document.createElement('h3');
       tdiv1.setAttribute('class', 'card-title');
       tdiv1.innerHTML = df[i+1].name;

       
         

       let lp1 = document.createElement('img');
       lp1.setAttribute('class', 'card-img fro');
       lp1.src = df[i+1].flag;

       star1.append(tdiv1, lp1);
       

       var ccdiv1 = document.createElement('h6');
       ccdiv1.setAttribute('class', 'card-subtitle');
       ccdiv1.innerHTML = "Capital: " + df[i+1].capital;

       let p11 = document.createElement('h6');
       p11.setAttribute('class', 'card-text');
       p11.innerHTML = "Region: " + df[i+1].region;

       let p21 =document.createElement('h6');
       p21.setAttribute('class', 'card-text');
       p21.innerHTML = "Country Code: " + df[i+1].alpha3Code;

       let p31 = document.createElement('button');
       p31.setAttribute('class', 'btn btn-primary');
       p31.innerHTML = "Click for Weather";

       
       p31.onclick = getWeather1;


       
       


      
       var lat1 = df[i+1].latlng[0];
       var lng1 = df[i+1].latlng[1];
       
       
    
       async function getWeather1(lat1, lng1) { 
        



       let data1 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat1}&lon=${lng1}&appid=5151d501a141455f47dcc10160a16c21`); 
     
       if ((data1.status >= 00) && (data1.status <=300)) {
         let drum1 = await data1.json(); 
         for (var k in drum1)
             console.log (drum1[k]);
      
       }
       throw new Error(data1.status);
     }


       var c3 = document.createElement('div');
       c3.setAttribute('class', 'col-lg-4 col-sm-12 fun');

       var star2= document.createElement('div');
       star2.setAttribute('class', 'card-header');

       var tdiv2 = document.createElement('h3');
       tdiv2.setAttribute('class', 'card-title');
       tdiv2.innerHTML = df[i + 2].name;

      


       let lp2 = document.createElement('img');
       lp2.setAttribute('class', 'card-img fro');
       lp2.src = df[i+2].flag;
       
       star2.append(tdiv2, lp2);
       
       var ccdiv2 = document.createElement('h6');
       ccdiv2.setAttribute('class', 'card-subtitle');
       ccdiv2.innerHTML = "Capital: " + df[i + 2].capital;

       let p12 = document.createElement('h6');
       p12.setAttribute('class', 'card-text');
       p12.innerHTML = "Region: " + df[i + 2].region;

       
       let p22 =document.createElement('h6');
       p22.setAttribute('class', 'card-text');
       p22.innerHTML = "Country Code: " + df[i+2].alpha3Code;

       let p32 =document.createElement('button');
       p32.setAttribute('class', 'btn btn-primary');
       p32.innerHTML = "Click for Weather";
       p32.onclick = getWeather2;
      
       var lat2 = df[i+2].latlng[0];
       var lng2 = df[i+2].latlng[1];


       async function getWeather2(lat2, lng2) { 
        
      

       let data2 = await fetch("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=" + lat2+ "&lon=" + lng2 + "&appid=5151d501a141455f47dcc10160a16c21"); 
     
       if ((data2.status >= 200) && (data2.status <=300)) {
         let drum2 = await data2.json(); 
         console.log (drum2);
      
       }
       throw new Error(data2.status);
     }


      c1.append(star, ccdiv, p1, p2, p3);
      c2.append(star1, ccdiv1, p11, p21, p31);
      c3.append(star2, ccdiv2, p12, p22, p32)

      ro.append(c1,c2, c3);
       

      cdiv1.append(ro);
      cdiv.append(cdiv1);
      mdiv.append(cdiv);


     
        
      
    }
    
    }
  

  throw new Error(request.status);
}

loadapi('https://restcountries.eu/rest/v2/all')
  


document.body.append(mdiv);

