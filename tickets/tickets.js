window.onload=()=>{
      var windowWidth = $(window).width();
      var windowSm = 768;
      if (windowWidth <= windowSm) {//申し訳程度のレスポンシブ対応！！！！
        console.log(document.getElementById("nav_menu"));
        document.getElementById("footer_holder").innerHTML='<div id="footer" ><a href="#"><ion-icon name="home-outline"></ion-icon></a><a href="#"><ion-icon name="ticket-outline"></ion-icon></a><a href="#"><ion-icon name="person-outline"></ion-icon></a></div>';
      } else {
        console.log(document.getElementById("nav_menu"));
        document.getElementById("nav_menu").innerHTML='<a href="#" class="nav_item">Home</a><a href="#" class="nav_item">Ticket</a><a href="#"><ion-icon name="person-outline"></ion-icon></a>';
      }
      var qrs=document.getElementsByClassName("qr");
      for (let i = 0; i < qrs.length; i++) {
          var qrcode = new QRCode(qrs[i], {
            text: "http://google.com",
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
        }
        
    

}


  