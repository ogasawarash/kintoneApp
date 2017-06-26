(function() {
  "use strict";

  function cancelSave(event) {
    var record = event.record;
    var error = event.error;
    var check = [
      '利用PCが、家族と共用しない自分専用のPCになっていること やむを得ず利用予定PCを家族と共用する場合、業務利用用にアカウントを分けられていること',
      '利用予定PCのアカウントには、パスワードが設定されていること',
      '利用予定PCには、離席時にロックがかかるようになっていること',
      '利用予定PCにはセキュリティ対策ソフトをインストールし、チェックがかかるようになっていること',
      '公衆無線LANサービスなどの暗号化されていない、盗聴の恐れがあるネットワークでは使用しないこと',
      '会社の自PCへリモートデスクトップ接続しての作業のみ行うこと'
    ];
    for (var i = 0; i < 6 ; i++) {
      if (record['checkbox_checkList']['value'][i] !== check[i]) {
        record['checkbox_checkList']['error'] = "必須項目を入力してください";
        event.error = "必須項目を入力してください";
        return event;
      } else {
        event.error = error;
      }
    }
  }
  kintone.events.on('app.record.edit.submit', cancelSave);
})();
