function checkDatesToEnableButton(){
    const button = document.getElementById('differenceBetweenDates')
    if(document.getElementById('startDate').value!=="" && document.getElementById('endDate').value!==""){
        button.disabled = false;
        return;
    }
    button.disabled = true;
}
function cleanNode(node){
    while(node.firstChild){
        node.removeChild(node.firstChild)
    }
}
document.getElementById('startDateToday').addEventListener('click', ()=>{
    document.getElementById('startDate').valueAsNumber = new Date().getTime() - new Date().getTimezoneOffset()*60000;
    checkDatesToEnableButton();
})
document.getElementById('endDateToday').addEventListener('click', ()=>{
    document.getElementById('endDate').valueAsNumber = new Date().getTime() - new Date().getTimezoneOffset()*60000;
    checkDatesToEnableButton();
})

document.getElementById('startDate').addEventListener('change', ()=>{
    checkDatesToEnableButton()
});
document.getElementById('endDate').addEventListener('change',  ()=>{
    checkDatesToEnableButton()
});

document.getElementById('differenceBetweenDates').addEventListener('click', ()=>{
    const tableOfDifferences = document.getElementById('tableOfDifferences');
    const daysTD = tableOfDifferences.querySelector('table tr:nth-child(1) td');
    const monthsTD = tableOfDifferences.querySelector('table tr:nth-child(2) td');
    const yearsTD = tableOfDifferences.querySelector('table tr:nth-child(3) td');
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const daysText = document.createTextNode(`${Math.round(Math.abs((startDate-endDate)/(24*60*60*1000)))}`)
    const monthsText = document.createTextNode(`${Math.abs(startDate.getMonth() - endDate.getMonth())+ 12 *Math.abs(startDate.getFullYear() - endDate.getFullYear())}`)
    const yearsText = document.createTextNode(`${Math.abs(startDate.getFullYear()-endDate.getFullYear())}`)
    cleanNode(daysTD);
    daysTD.appendChild(daysText);
    cleanNode(monthsTD);
    monthsTD.appendChild(monthsText);
    cleanNode(yearsTD);
    yearsTD.appendChild(yearsText)
})