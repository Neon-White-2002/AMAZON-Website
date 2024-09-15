let Slide = document.getElementById("Slider"); //GETTING 'IMAGE SILDER' ID

let Btn_One = document.getElementById("Btn_One"); //GETTING 'BUTTON ONE' - ID.
let Btn_Two = document.getElementById("Btn_Two"); //GETTING 'BUTTON TWO' - ID.
let Btn_Three = document.getElementById("Btn_Three"); //GETTING 'BUTTON THREE' - ID.
let Btn_Four = document.getElementById("Btn_Four"); //GETTING 'BUTTON FOUR' - ID.
let Btn_Five = document.getElementById("Btn_Five"); //GETTING 'BUTTON FIVE' - ID.
let Btn_Six = document.getElementById("Btn_Six"); //GETTING 'BUTTON SIC' - ID.
let Btn_Seven = document.getElementById("Btn_Seven"); //GETTING 'BUTTON SEVEN' - ID.
let Btn_Eight = document.getElementById("Btn_Eight"); //GETTING 'BUTTON EIGHT' - ID.

// 'BUTTON - ONE' - FUNCTION (HELP TO SILDER 'IMG');
Btn_One.onclick = function()
{
    Slide.style.transform = "translateX(0px)";
    Btn_One.classList.add("Active");

    Btn_Two.classList.remove("Active");
    Btn_Three.classList.remove("Active");
    Btn_Four.classList.remove("Active");
    Btn_Five.classList.remove("Active");
    Btn_Six.classList.remove("Active");
    Btn_Seven.classList.remove("Active");
    Btn_Eight.classList.remove("Active");
}

// 'BUTTON - TEO' - FUNCTION (HELP TO SILDER 'IMG');
Btn_Two.onclick = function()
{
    Slide.style.transform = "translateX(-100%)";
    Btn_Two.classList.add("Active");
    
    Btn_One.classList.remove("Active");
    Btn_Three.classList.remove("Active");
    Btn_Four.classList.remove("Active");
    Btn_Five.classList.remove("Active");
    Btn_Six.classList.remove("Active");
    Btn_Seven.classList.remove("Active");
    Btn_Eight.classList.remove("Active");
}

// 'BUTTON - THREE' - FUNCTION (HELP TO SILDER 'IMG');
Btn_Three.onclick = function()
{
    Slide.style.transform = "translateX(-200%)";
    Btn_Three.classList.add("Active");
    
    Btn_One.classList.remove("Active");
    Btn_Two.classList.remove("Active");
    Btn_Four.classList.remove("Active");
    Btn_Five.classList.remove("Active");
    Btn_Six.classList.remove("Active");
    Btn_Seven.classList.remove("Active");
    Btn_Eight.classList.remove("Active");
}

// 'BUTTON - FOUR' - FUNCTION (HELP TO SILDER 'IMG');
Btn_Four.onclick = function()
{
    Slide.style.transform = "translateX(-300%)";
    Btn_Four.classList.add("Active");
    
    Btn_One.classList.remove("Active");
    Btn_Two.classList.remove("Active");
    Btn_Three.classList.remove("Active");
    Btn_Five.classList.remove("Active");
    Btn_Six.classList.remove("Active");
    Btn_Seven.classList.remove("Active");
    Btn_Eight.classList.remove("Active");
}

// 'BUTTON - FIVE' - FUNCTION (HELP TO SILDER 'IMG');
Btn_Five.onclick = function()
{
    Slide.style.transform = "translateX(-400%)";
    Btn_Five.classList.add("Active");
    
    Btn_One.classList.remove("Active");
    Btn_Two.classList.remove("Active");
    Btn_Three.classList.remove("Active");
    Btn_Four.classList.remove("Active");
    Btn_Six.classList.remove("Active");
    Btn_Seven.classList.remove("Active");
    Btn_Eight.classList.remove("Active");
}

// 'BUTTON - SIX' - FUNCTION (HELP TO SILDER 'IMG');
Btn_Six.onclick = function()
{
    Slide.style.transform = "translateX(-500%)";
    Btn_Six.classList.add("Active");
    
    Btn_One.classList.remove("Active");
    Btn_Two.classList.remove("Active");
    Btn_Three.classList.remove("Active");
    Btn_Four.classList.remove("Active");
    Btn_Five.classList.remove("Active");
    Btn_Seven.classList.remove("Active");
    Btn_Eight.classList.remove("Active");
}

// 'BUTTON - SEVEN' - FUNCTION (HELP TO SILDER 'IMG');
Btn_Seven.onclick = function()
{
    Slide.style.transform = "translateX(-600%)";
    Btn_Seven.classList.add("Active");
    
    Btn_One.classList.remove("Active");
    Btn_Two.classList.remove("Active");
    Btn_Three.classList.remove("Active");
    Btn_Four.classList.remove("Active");
    Btn_Five.classList.remove("Active");
    Btn_Six.classList.remove("Active");
    Btn_Eight.classList.remove("Active");
}

// 'BUTTON - EIGHT' - FUNCTION (HELP TO SILDER 'IMG');
Btn_Eight.onclick = function()
{
    Slide.style.transform = "translateX(-700%)";
    Btn_Eight.classList.add("Active");
    
    Btn_One.classList.remove("Active");
    Btn_Two.classList.remove("Active");
    Btn_Three.classList.remove("Active");
    Btn_Four.classList.remove("Active");
    Btn_Five.classList.remove("Active");
    Btn_Six.classList.remove("Active");
    Btn_Seven.classList.remove("Active");
}