var d = document.createElement('header');
d.setAttribute('class', 'head');
d.innerHTML = "PAGINATION EXAMPLE"





var b = document.createElement('div');
b.setAttribute('class', 'b');


var c   = document.createElement('footer');
c.setAttribute('class','foot');

var f = document.createElement('button');
f.setAttribute('class', 'pagination pagination1')
f.onclick = display(1);
f.innerHTML = "first";


var c1 = document.createElement('button');
c1.setAttribute('class', 'pagination pagination1')
c1.onclick = display(1);
c1.innerHTML = "1";

var c2 = document.createElement('button');
c2.setAttribute('class', 'pagination pagination1')
c2.onclick = display(2);
c2.innerHTML = "2";

var c3 = document.createElement('button');
c3.setAttribute('class', 'pagination pagination1')
c3.addEventListener("click", display(3))
c3.innerHTML = "3";

var c4 = document.createElement('button');
c4.setAttribute('class', 'pagination pagination1')
c4.onclick = display(4);
c4.innerHTML = "4";

var c5 = document.createElement('button');
c5.setAttribute('class', 'pagination pagination1')
c5.onclick = display(5);
c5.innerHTML = "5";

var c6 = document.createElement('button');
c6.setAttribute('class', 'pagination pagination1')
c6.onclick = display(6);
c6.innerHTML = "6";

var c7 = document.createElement('button');
c7.setAttribute('class', 'pagination pagination1')
c7.onclick = display(7);
c7.innerHTML = "7";

var c8 = document.createElement('button');
c8.setAttribute('class', 'pagination pagination1')
c8.onclick = display(8);
c8.innerHTML = "8";

var c9 = document.createElement('button');
c9.setAttribute('class', 'pagination pagination1')
c9.onclick = display(9);
c9.innerHTML = "9";

var c10 = document.createElement('button');
c10.setAttribute('class', 'pagination pagination1')
c10.onclick = display(10);
c10.innerHTML = "10";

c.append(f, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10);


function display(n)
{

var request = new XMLHttpRequest()
request.open('GET', 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json', true)
request.send();
request.onload = function() {
var data = JSON.parse(this.response);
var page = data.length/10;
    
    var current = page * n;
    var disp = current - (page-1);
    var rbg = [];
    
    for (var i = disp; i<= current; i++)
    {
      
      rbg.push(JSON.stringify(data[i], null));
      b.innerHTML = rbg;
    }
    
   
}


      
    
    
    document.body.append(d, b, c);
    
}




