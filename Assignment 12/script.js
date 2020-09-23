var row1 = document.createElement('div')
var a = document.createElement('div')
a.setAttribute('class', 'box fp')
a.innerHTML = "8 DIGIT RANDOM NUMBER GENERATOR";

var fu = document.createElement('div');

var func = document.createElement('BUTTON')
func.id = "clic";
func.innerHTML = "Generate!";
func.style.color = 'crimson';
fu.append(func);

var b = document.createElement('p');
b.id = 'ans';


a.append(fu, b);

row1.append(a);
document.body.append(row1);


function random()
{
   var n = Math.floor(10000000 + Math.random() * 90000000);
   
   document.getElementById('ans').innerHTML = n;
}

var cc = document.getElementById("clic");
cc.addEventListener( "click",random);



var row2 = document.createElement('div')
var a1 = document.createElement('div')
a1.setAttribute('class', 'box fp')
a1.innerHTML = "DATE MANIPULATION"

var di = document.createElement('div');

var dat = document.createElement('Input');
dat.setAttribute('type', 'date');
dat.id  = 'box2';

var par = document.createElement('p');
par.setAttribute('class', 'pars');
par.innerHTML = "Enter your DOB:";

var out = document.createElement('p');

var ct = document.createElement('button');
ct.id = "mj"
ct.innerHTML = "Click!";

var fg = document.createElement('p');
fg.style.fontSize = '12px';
fg.id = 'pug';

di.append(par,dat,out,ct,fg);
a1.append(di);

row2.append(a1);
document.body.append(row2);


function date_manipulation() {
   var ab = document.getElementById('box2');
   var inp = new Date(ab.value);  
   var tdy = new Date();

   var year_diff = +tdy.getFullYear() - +inp.getFullYear();
   var month_diff = Math.abs(+tdy.getMonth() - +inp.getMonth());
   var df = 24*3600*1000;
   var day_count = Math.round(Math.abs((+tdy - +inp)/df));
   var minutes_diff = Math.floor((Math.abs(+tdy- +inp))/(1000*3600));
   var seconds_diff = Math.floor((Math.abs(+tdy- +inp))/1000);
   var ms_diff = Math.floor(Math.abs(+tdy- +inp));
   document.getElementById('pug').innerHTML = 'year-diff: ' + year_diff + ', month-diff: ' + month_diff + ', day-count: ' + day_count +  ', minutes-diff: ' + minutes_diff + ', seconds-diff: ' +  seconds_diff + ', milliseconds-diff: ' + ms_diff;
}

var cf = document.getElementById('mj');
cf.addEventListener( "click", date_manipulation);