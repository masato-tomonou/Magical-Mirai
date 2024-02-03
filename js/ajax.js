/**
 * App 登録フォームを表示
 */
 function App_ajax(App, contents) {
  $.ajax({
    type: 'GET',
    url: 'views/' + App + '.html',
    dataType: 'html',
    beforeSend: function(xhr, settings) {
      // ajax送信前の処理
    },
    complete: function(xhr, status) {
      // ajax応答後の処理
    },
    success: function(data) {
      // ajax通信成功時の処理
      $('#' + contents).html(data);
    },
    error: function(xhr, status, error) {
      // ajax通信成失敗の処理
      console.log('通信エラーが発生しました。');
    }
  });
}