/**
 * アイコンを押してアプリを表示
 * 赤丸を押してアプリを削除
 * @param app アプリ名
 */
function modal(app) {
  document.querySelector('#app_icon_' + app).addEventListener('click', function () {
    window.setTimeout(time, 1000)
    function time() {
      document.querySelector('#' + app).classList.remove('hide');
    }
  });
}
function modal_red(app) {
  document.querySelector('#' + app + '_red_button').addEventListener('click', function () {
    document.querySelector('#' + app).classList.add('hide');
    const node = document.querySelector('#' + app + '_contents');

    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    document.querySelector('#' + app).classList.remove('drag');
    document.querySelector('#app_bottom_' + app + '+span>span').classList.add('hide');
  });
}

modal('App1');
modal_red('App1');
modal('App2');
modal_red('App2');
modal('App3');
modal_red('App3');