function random_img() {  
  
  document.querySelector("#main_app3").insertAdjacentHTML('afterbegin','<img src="img/UI/app_icon/Proliferation.png" style="top: ' + Math.floor(Math.random() * 590) + 'px; left: ' + Math.floor(Math.random() * 910) + 'px;">');
}

setInterval(random_img, 500);