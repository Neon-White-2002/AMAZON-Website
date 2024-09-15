var CountDownDate = new Date("Dec 25, 2024 20:00:00").getTime(); //SET THE COUNT - DOWN DATE & TIME;

//UPDATE COUNTDATE OFFER (DATE & TIME);
var CountDownFunction = setInterval(function()
{
    var CurrentDate = new Date().getTime(); //USING THIS 'GET' THE CURRENT DATE & TIME'
    var TimePeriod = CountDownDate - CurrentDate; //USING THIS 'CALULCATE THE 'TIME - PERIOD' OF (COUNTDOWN DATE - CURRENT DATE);

    var Hours = Math.floor(TimePeriod % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)); //GETTING 'HOURS' OF COUNT-DOWN (DATE & TIME);
    var Minutes = Math.floor((TimePeriod % (1000 * 60 * 60)) / (1000 * 60)); //GETTING 'MINUTES' OF COUNT-DOWN (DATE & TIME);
    var Seconds = Math.floor((TimePeriod % (1000 * 60)) / 1000); //GETTING 'SECONDS' OF COUNT-DOWN (DATE & TIME);

    document.getElementById("Today_Deal_Offer_Text_One").innerHTML = "Ends in" + " " + Hours + " " + ":" + " " + Minutes + " " + ":" + " " + Seconds;
    document.getElementById("Today_Deal_Offer_Text_Two").innerHTML = "Ends in" + " " + Hours + " " + ":" + " " + Minutes + " " + ":" + " " + Seconds;
    document.getElementById("Today_Deal_Offer_Text_Three").innerHTML = "Ends in" + " " + Hours + " " + ":" + " " + Minutes + " " + ":" + " " + Seconds;
    document.getElementById("Today_Deal_Offer_Text_Four").innerHTML = "Ends in" + " " + Hours + " " + ":" + " " + Minutes + " " + ":" + " " + Seconds;

    if (TimePeriod < 0)
    {
        clearInterval(CountDownFunction); //USING THIS 'FUNCTION' HELP TO CLEAR THE INTERVAL;
        document.getElementById("Today_Deal_Offer_Text_One").innerHTML = "OFFER EXPIRED...!";
        document.getElementById("Today_Deal_Offer_Text_Two").innerHTML = "OFFER EXPIRED...!";
        document.getElementById("Today_Deal_Offer_Text_Three").innerHTML = "OFFER EXPIRED...!";
        document.getElementById("Today_Deal_Offer_Text_Four").innerHTML = "OFFER EXPIRED...!";
    }
}, 1000);
