function shawn(){
    var e = document.getElementById("ddlViewBy");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser=="Leo Harris"){
        var s5 = "<span style='font-size:150%;font-weight:bold'>Leo Harris</span>"
        s5 += "<br><b>Name</b>: Leonard Alexander Harris"
        s5 += "<br><b>Nicknames</b>: Leo"
        s5 += "<br><b>Reason for Nickname</b>: Shortening of Leonard"
        s5 += "<br><b>Age</b>: 25"
        s5 += "<br><b>Birthday</b>: August 2nd"
        s5 += "<br><b>Born in</b>: <a href='https://www.google.com/maps/place/Charlotte,+NC/@35.2030728,-80.9799141,11z/data=!3m1!4b1!4m6!3m5!1s0x88541fc4fc381a81:0x884650e6bf43d164!8m2!3d35.2270869!4d-80.8431267!16zL20vMGZzYjg'>Charlotte, NC</a>"
        s5 += "<br><strong>Weight</strong>: 130 lbs (58.967 kgs)"
        s5 += "<br><strong>Height</strong>: 6'1 (185 cm)"
        s5 += "<br><strong>BMI</strong>: 17.1"
        s5 += "<br><strong>Body Type</strong>: Ectomorph<br>"
        s5 += "<strong>Shape of face</strong>: Heart<br />"
        s5 += "<strong>Eye color</strong>: Blue (left), Black (right)<br />"
        s5 += "<strong>Glasses or contacts</strong>: None<br />"
        s5 += "<strong>Skin tone</strong>: Caucasian"
        s5 += "<br><strong>Hair color</strong>: Dark Auburn"
        s5 += "<br><strong>Type of hair</strong>: Straight hair"
        s5 += "<Br><strong>Hairstyle</strong>:&nbsp;Long on the top and short on the sides and back and hair is parted to the right"
        s5 += "<br><b>Gender Identity</b>: Male"
        s5 += "<br><b>Gender Asigned at Birth</b>: Male"
        s5 += "<br><strong>Race</strong>: Caucasian"
        s5 += "<br><strong>Nationality</strong>: American"
        s5 += "<br><strong>Ethnicity</strong>: Italian, French, and English"
        s5 += "<Br><strong>Blood Type</strong>:&nbsp; A+"
        document.getElementById("s2").innerHTML=s5
    }else if(strUser=="Placeholder"){
        document.getElementById("s2").innerHTML="aurrroa"
    }
}
function clearme(){
    document.getElementById("s2").innerHTML=""
}