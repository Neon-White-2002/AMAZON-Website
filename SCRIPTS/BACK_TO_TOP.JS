var Back_Button = document.getElementById("Back_To_Top_Button"); //GETTING THE 'ID' OF BACK - BUTTON;

//CREATING FUNTION() TO 'SCROLL TO - TOP';
Back_Button.onclick = function()
{
    document.body.scrollTop = 0; //THIS WORK IN 'SAFARI';
    document.documentElement.scrollTop = 0; //THIS WORK IN 'CHROME, FIRE-FOX, IE & OPERA';
}