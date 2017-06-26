(function() {
 "use strict";

  var events = [
    'app.record.detail.show',
    'app.record.edit.show',
    'app.record.detail.process.proceed'
  ];
  var indicateStatus = 'チェックリスト確認中'; 
  kintone.events.on(events, function(event) {
      var record = event.record;
      if (record['radio_chooseAccount']['value'] === 'C. 私物PCを利用したSSL-VPN接続許可' && record['ステータス']['value'] === 'チェックリスト確認中'){
          kintone.app.record.setFieldShown('group_ownPCenv', true);
          }else{
          kintone.app.record.setFieldShown('group_ownPCenv', false);
      }
  });
})();
