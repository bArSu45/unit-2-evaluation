// write js code here corresponding to matches.html

var cricketarr = JSON.parse(localStorage.getItem("schedule")) || [];
var favarr = JSON.parse(localStorage.getItem("favourites")) || [];

display(cricketarr)

function display(data)
{
    data.forEach(function(ele)
    {
       var trow =  document.createElement("tr");

       var td1 = document.createElement("td");
       td1.innerText = ele.matchnum;
       var td2 = document.createElement("td");
       td2.innerText = ele.teamA;
       var td3 = document.createElement("td");
       td3.innerText = ele.teamB;
       var td4 = document.createElement("td");
       td4.innerText = ele.date;
       var td5 = document.createElement("td");
       td5.innerText = ele.venue;
       var td6 = document.createElement("td");
       td6.innerText = "Favourite";
       td6.style.color = "green";
       td6.style.cursor = "pointer";
       td6.addEventListener("click",function(){
           fav(ele);
       })

       trow.append(td1,td2,td3,td4,td5,td6)
       document.querySelector("tbody").append(trow);

    });
}
function fav(ele)
{
  favarr.push(ele)
  localStorage.setItem("favourites",JSON.stringify(favarr));
}
