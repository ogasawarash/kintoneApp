(function() {
  "use strict";

  function notCheckedAll(event) {
    var record = event.record;
    var noerror = event.error;
    var check = 'すべての項目を確認しました。'
    if (record['checkbox_allCheck']['value'][0] !== check) {
      record['checkbox_allCheck']['error'] = "必須項目を入力してください";
      event.error ="必須項目を入力してください";
      return event;
    }else{
      event.error = noerror;
    }
  }
  kintone.events.on('app.record.edit.submit', notCheckedAll);
})();
