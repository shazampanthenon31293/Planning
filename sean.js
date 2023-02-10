function shawn(){
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser=="Aurora Alexandra"){
        var s5 = "<span style='font-size:150%;font-weight:bold'>Aurora Alexander</span>"
        document.getElementById("s2").innerHTML=s5
    }else if(strUser=="Shawn"){
        document.getElementById("s2").innerHTML="aurrroa"
    }
}
