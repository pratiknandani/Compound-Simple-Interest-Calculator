// Function triggered when compute interest button clicked
function compute()
{
    // Getting local date
    var d = new Date();
    var n = d.getFullYear();

    // Getting amount entered
    p = document.getElementById("principal").value;
    if(p<=0)
    {
    alert("Please, enter a positive number greater than zero");
    document.getElementById("principal").value = "";
    document.getElementById("principal").focus();
    document.getElementById("principal").click();
    return null;
    }

    // Getting value of slider for rate of interest
    r = document.getElementById("rate").value;

    // Getting value of dropdown for years
    y = document.getElementById("years").value;

    // Computing the interest
    var si = p*r*y/100;
    var sa = Number(p) + Number(si);
    // pow = 12*y;
    // a = (1+r/12)
    var ca = p * (Math.pow((1 + ((r/100) / Number(12))), (Number(12) * y)));
    var ci = Number(ca) - Number(p);
    ca = ca.toFixed(2);

    // Computing the year after which interest will be given
    final_year = Number(n)+Number(y);

    // Changing the final result
    if(document.getElementById("type").value == "Simple Interest"){
        document.getElementById("result").innerHTML = "If you deposit " + "<mark>" + p + "</mark>" + ",<br> at an interest rate of " + "<mark>" + r +"%" + "</mark>" + ".<br> You will receive an interest of " + "<mark>" + si + "</mark>" + ", <br>and amount of "+"<mark>"+ sa + "</mark>"+ ",<br> in the year "+ "<mark>" +final_year + "</mark>";
    }    
    else if(document.getElementById("type").value == "Compound Interest"){
        document.getElementById("result").innerHTML = "If you deposit " + "<mark>" + p + "</mark>" + ",<br> at an interest rate of " + "<mark>" + r +"%" + "</mark>" + ".<br> You will receive an interest of " + "<mark>" + ci + "</mark>" + ", <br>and amount of "+"<mark>"+ ca + "</mark>"+ ",<br> in the year "+ "<mark>" +final_year + "</mark>";
    }    
}

// Function triggered when slider changed
function changeRate(){
    rate = document.getElementById("rate").value;
    document.getElementById("rateSpan").innerHTML = rate.toString()+"%";
}
