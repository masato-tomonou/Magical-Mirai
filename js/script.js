/**
 * アプリのトップウィンドウの三色ボタン、ホバー時に変化
 * @param app 
 */
 function app_button(app) {
  document.querySelector('#' + app + '_top_ber ul').addEventListener('mouseover', function(){
    document.querySelector('#' + app + '_red_button img').setAttribute('src', 'img/UI/app_button_hover/app_red_button.svg');
    document.querySelector('#' + app + '_yellow_button img').setAttribute('src', 'img/UI/app_button_hover/app_yellow_button.svg');
    document.querySelector('#' + app + '_green_button img').setAttribute('src', 'img/UI/app_button_hover/app_green_button.svg');
  });
  document.querySelector('#' + app + '_top_ber ul').addEventListener('mouseleave', function(){
    document.querySelector('#' + app + '_red_button img').setAttribute('src', 'img/UI/app_red_button.svg');
    document.querySelector('#' + app + '_yellow_button img').setAttribute('src', 'img/UI/app_yellow_button.svg');
    document.querySelector('#' + app + '_green_button img').setAttribute('src', 'img/UI/app_green_button.svg');
  });
}
app_button('App1');
app_button('App2');
app_button('App3');