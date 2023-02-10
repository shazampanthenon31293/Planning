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
        s5 +="<Br><b>Sexuality</b>: Bisexual/Pansexual (Uses both terms to describe her sexuality)"
        s5 +="<br><b>Love-Life</b><br><Div><p style='margin-top: 0px;margin-bottom: 0px;margin-left: 10px;'>Alexandra Kuzmenko (Ex-Wife) (Married 2018-2020)<br>Derrick Taylor (Ex-Boyfriend)(Relationship 2015-2016)<br>Patrick Murray (Ex-Boyfriend)(Relationship 2017)</p></div>"
        s5+="<b>Clothing</b>:"
        s5+="<table><tr><th>Set</th><th>Description</th></tr><tr><td>Set 1</td><td>Plain Black T-Shirt<br />Black Leather Jacket<br />Black Ripped Jeans&nbsp;<br />Black Medium Length Socks<br />Black Combat Boots</td></tr><tr><td>Set 2</td><td>Black American Idiot T-Shirt<br />Black Zip-Up Hoodie<br />Blue Denim Jeans<br />Black Short Socks<br />Black High-top Converse</td></tr><tr><td>Set 3</td><td>Black Crop-top with a skull in the middle<br />Black shorts<br />Short Medium Length Socks<br />Black High-top Converse</td></tr><tr><td>Set 4</td><td>Red long or short sleeve shirt<br />Black skirt<br />Long red socks&nbsp;<br />Black Sneakers</td></tr><tr><td>Set 5</td><td>Black Metallica T-Shirt<br />Black Shorts<br />Long Black Socks<br />Black Sneakers</td></tr><tr><td>Set 6</td><td>Black Dress<br />Long black socks<br />Black sneakers</td></tr><tr><td>Set 7</td><td>Black High-density kevlar armor<br />Neck Gaiter Face Mask&nbsp;<br />Black Combat Boots<br />Bow and Quiver slung over her back<br />Belt with tools</td></tr></table>"
        s5+="<br><b>Accessories</b>:<ul style='margin-top:5px;margin-bottom:0px'><li>Silver Ankh on a middle length chain</li><li>Silver chain bracelet</li><li>Obsidian eye of horus necklace on a short chain</li></ul>"
        s5+="<img src='Dragon.jpg' style='width: 150px;'>"
        s5+="<br><b>Features/Tattoos</b>: Tattoo of a dragon in red and black ink as  seen above on her right shoulder"
        s5+="<br><strong>Skin Tone</strong>:&nbsp; Caucasian"
        s5+="<Br><strong>Complexion</strong>: Fair"
        s5+="<br><strong>Extrovert or Introvert</strong>: Both"
        s5+="<br><b>Optimist or Pessimist</b>: Pessimist"
        s5+="<br><b>Strengths</b>:"
        s5+=""
        document.getElementById("s2").innerHTML=s5
    }else if(strUser=="Placeholder"){
        document.getElementById("s2").innerHTML="aurrroa"
    }
}
function clearme(){
    document.getElementById("s2").innerHTML=""
}