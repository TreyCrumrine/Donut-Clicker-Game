let myButton = document.getElementById('myButton')
let display = document.getElementById('count')
let donutButton = document.querySelector('donut')
var autoClick = document.getElementById('clicker1')
var multiClick = document.getElementById('multiplyer')

let donutCount = 0
let autoClikerCount = 0
let autoClickerCost = 100
let multiClickCost = 100
let multiplier = 1
myButton.addEventListener('click', addToCount)

function addToCount(e)
{
    donutCount = donutCount + multiplier
    display.innerHTML = "Number of Donut's: " + donutCount.toFixed(2)
    //donutCount add 1 * multiplier
}
function autoClick(a)
{
    display1.innerHTML = "cost = " + autoClickerCost.toFixed(2)
}

autoClick.addEventListener('click', addAutoClicker)

function addAutoClicker()
{
   if(autoClickerCost <= donutCount)
   {
    donutCount = donutCount - autoClickerCost
    addToCount()
    setInterval (function()
    {
        myButton.click()
        
    },1000)
    autoClickerCost =autoClickerCost *1.10;
    document.getElementById('clicker1').innerHTML = "cost = " + autoClickerCost.toFixed(2);
    
    
   }
   else
   {
    alert("not enough Donuts")
   }
}


multiClick.addEventListener('click', addMultiClicker)

function addMultiClicker()
{
    if(multiClickCost <= donutCount)
    {
        donutCount = donutCount - multiClickCost
        addToCount()
        multiplier = multiplier + 1
        multiClickCost = multiClickCost * 1.10
        document.getElementById('multiplyer').innerHTML = "cost = " + multiClickCost.toFixed(2);
    }
    else
   {
    alert("not enough Donuts")
   }
}
function restart()
{
    window.location.reload();
}