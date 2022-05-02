// write js code here corresponding to index.html
// You should add submit event on the form

var cricketarr = JSON.parse(localStorage.getItem("schedule")) || [];

document.querySelector("#masaiForm").addEventListener("submit",cricket)

function cricket()
{
    event.preventDefault;

    var cricketobj = {
        matchnum : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date : masaiForm.date.value,
        venue : masaiForm.venue.value
    }
      cricketarr.push(cricketobj)
    localStorage.setItem("schedule",JSON.stringify(cricketarr));
}