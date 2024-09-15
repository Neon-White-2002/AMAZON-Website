// USING THIS GETTING 'ALL BLOCK OF IMAGE' WHICH HELP TO OPEN THE VIDEO - PLAYER;
document.querySelectorAll(".Explore_the_Lastest_Block").forEach(Links =>
{
    Links.addEventListener("click", (e) =>
    {
        e.preventDefault();
        document.getElementById("Video_Container").style.display = "block";
    });
});

//USING THIS GETTING 'ALL VIDEO LINK TO PLAY';
document.querySelectorAll(".Video_Player_Link").forEach(Video_Link =>
{
    Video_Link.addEventListener("click", (E) =>
    {
        E.preventDefault();
        var Source = Video_Link.getAttribute('href');
        document.querySelector(".Video").src = Source;
        document.querySelector(".Video").play();
    });
});

//USING THIS GETTING 'ALL VIDEO LINK TO PLAY';
document.querySelectorAll(".Video_Play_Link").forEach(Link_To_Play =>
{
    Link_To_Play.addEventListener("click", (Event) =>
    {
        Event.preventDefault();
        var Source_Link = Link_To_Play.getAttribute('href');
        document.querySelector(".Video").src = Source_Link;
        document.querySelector(".Video").play();
    });
});

var Video_Player = document.getElementById("Video_Container"); //USING THIS GETTING 'VIDEO - PLAYER' BLOCK;
var Close_Button = document.getElementById("Close_Video_Player"); //USING THIS GETTING 'CLOSE - BUTTON' - ID;

// THIS FUNCTION HELP TO 'CLOSE THE VIDEO - PLAYER' BOX;
Close_Button.onclick = function()
{
    Video_Player.style.display = "none";
}