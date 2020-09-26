var tdiv =  document.createElement('table');
tdiv.setAttribute('class', 'tdiv');
var tbody = document.createElement('thead');
tbody.setAttribute('class', 'tbody')
var row1 = document.createElement('tr');
row1.setAttribute('class', 'row1');
var fname = document.createElement('td');
fname.innerHTML = 'First Name';
var lname = document.createElement('td');
lname.innerHTML = 'Last Name';
var ad = document.createElement('td');
ad.innerHTML = 'Address';
var pin = document.createElement('td');
pin.innerHTML = 'Pin Code';
var gender = document.createElement('td');
gender.innerHTML = 'Gender';
var food = document.createElement('td');
food.innerHTML = 'Food';
var state = document.createElement('td');
state.innerHTML = 'State';
var country = document.createElement('td');
country.innerHTML = 'Country';



row1.append(fname, lname,ad, pin, gender, food, state, country)
tbody.append(row1);

document.getElementById('sfun').onclick = sub;


function sub()
{
    var row2 = document.createElement('tr');

    var fname1 =document.createElement('td');
    fname1.innerHTML = document.getElementById('fname').value;
    var lname1 = document.createElement('td');
    lname1.innerHTML = document.getElementById('lname').value;
    var address1 = document.createElement('td');
    address1.innerHTML = document.getElementById('address').value;
    var pincode1 = document.createElement('td');
    pincode1.innerHTML = document.getElementById('pin').value;
    var gender1 = document.createElement('td');
    var a = document.getElementsByName('gender');
    for(var i= 0; i< a.length; i++)
       if(a[i].checked)
          gender1.innerHTML = a[i].value;

    var food1 = document.createElement('td');
    var b = document.getElementsByName('favfood');
    for(var j = 0; j<b.length; j++)
    
        if(b[j].checked)
          
           food1.innerHTML = b[j].value;
    
    var state1 = document.createElement('td');
    state1.innerHTML = document.getElementById('state').value;
    var country1 = document.createElement('td');
    country1.innerHTML = document.getElementById('country').value;
    

    row2.append(fname1, lname1, address1, pincode1, gender1, food1, state1, country1);
    tbody.append(row2);
}





tdiv.append(tbody);
document.body.append(tdiv);