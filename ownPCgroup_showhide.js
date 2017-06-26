(function() {
  "use strict";

  var events = [
    'app.record.create.show',
    'app.record.edit.show',
  ];
  kintone.events.on(events, function(event) {
    var record = event.record;
    if (record['radio_chooseAccount']['value'] === 'C. 私物PCを利用したSSL-VPN接続許可' &&
  record['レコード']['value'] === 'チェックリスト確認中') {
      kintone.app.record.setFieldShown('group_ownPCenv', true);
      kintone.app.record.setGroupFieldOpen('group_ownPCenv', true);
    } else {
      kintone.app.record.setFieldShown('group_ownPCenv', false);
    }
  });
})();
