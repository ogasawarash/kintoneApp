(function() {
  "use strict";

  // ルックアップするアプリのID
  //レコード一覧画面のURLに書いてある数字を入力
  //ex.https://u63e0.cybozu.com/k/46/ → AppId = 46
  var updateAppId = 46;
  //var updateAppId = kintone.app.getLookupTargetAppId('getAppID');

  function createPutRecords(records) {
    var putRecords = [];
    for (var i = 0, l = records.length; i < l; i++) {
      var record = records[i];
      putRecords[i] = {
        id: record['$id'].value,
        record: {
          lookup: {
            value: record.lookup.value
          }
        }
      };
    }
    return putRecords;
  }

  function updateLookup(appId, records) {
    kintone.api(
      kintone.api.url('/k/v1/records', true),
      'PUT', {
        app: appId,
        records: records
      },
      function(resp) {
        //alert('ルックアップの更新が完了しました!');
      }
    );
  }

  // 保存実行時イベント
  kintone.events.on(['app.record.edit.submit', 'app.record.index.edit.submit'], function(event) {
    // レコードの一括取得(100件まで)
    kintone.api(
      kintone.api.url('/k/v1/records', true),
      'GET', {
        app: updateAppId,
        query: 'lookup = ' + event.record['レコード番号'].value
      },
      function(resp) {
        var records = resp.records;

        // ルックアップの更新
        updateLookup(updateAppId, createPutRecords(records));
      }
    );
  });
})();
