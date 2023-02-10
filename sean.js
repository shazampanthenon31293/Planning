function shawn(){
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser=="Leo Harris"){
        var s5 = "<span style='font-size:150%;font-weight:bold'>Leo Harris</span>"
        s5 += "<br>"
        document.getElementById("s2").innerHTML=s5
    }else if(strUser=="Placeholder"){
        document.getElementById("s2").innerHTML="aurrroa"
    }
}
function clearme(){
    document.getElementById("s2").innerHTML=""
}