let z_index_num = 10;
function z_index(app) {  
  z_app = document.querySelector('#' + app);
  z_app.style.zIndex = z_index_num;
  z_index_num += 1;
}