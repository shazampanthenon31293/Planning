function shawn(){
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser=="Aurora Alexandra"){
        var s5 = "<span style='font-size:150%;font-weight:bold'>Aurora Alexander</span>"
        s5 +="<br><b>Real Name</b>: Aurora Alexander"
        s5 +="<br><b>Aliases</b>: Henrietta Maria, Alexandra Orange, Logan Gray, The Avenging Angel/Apollyon (nickname given by the NYPD)"
        s5 +="<Br><b>Nicknames</b>: Avenging Angel, Protector of the Poor and Dawn"
        s5 +="<Br><b>Gender</b>: Female"
        s5 +="<br><b>Place of Birth</b>:  <a href='https://www.google.com/maps/place/Washington+Heights,+New+York,+NY/@40.8438596,-73.9365104,14z/data=!3m1!4b1!4m6!3m5!1s0x89c2f69c56373bcb:0x1e7573510a4a0504!8m2!3d40.8417082!4d-73.9393554!16zL20vMDE4ejZo'>Washington Heights, Manhattan, New York City, New York</a>"
        s5 +="<br><strong>Date of Birth</strong>: February 9, 2000"
        s5 +="<Br><strong>Star Sign</strong>: Pisces"
        s5 +="<br><strong>Species</strong>: Human"
        s5 +="<br><strong>Status</strong>: Alive"
        s5 +="<br><strong>Height</strong>: 5&rsquo;11"
        s5 +="<br><strong>Weight</strong>: 150 lbs"
        s5 +="<br><strong>Skin Color</strong>: Caucasian"
        s5 +="<br><strong>Hair Color</strong>: Auburn"
        s5 +="<br><strong>Hair Style</strong>: Pixie Cut"
        s5 +="<br><strong>Eye Color</strong>: Blue"
        document.getElementById("s2").innerHTML=s5
    }else if(strUser=="Placeholder"){
        document.getElementById("s2").innerHTML="aurrroa"
    }
}
function clearme(){
    document.getElementById("s2").innerHTML=""
}