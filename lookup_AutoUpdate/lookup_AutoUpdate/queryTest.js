kintone.events.on(['app.record.edit.submit', 'app.record.index.edit.submit'], function(event) {
  // レコードの一括取得(100件まで)
  kintone.api(
    kintone.api.url('/k/v1/records', true),
    'GET', {
      app: 46,
      query: 'lookup = ' + event.record['レコード番号'].value
    },
    function(resp) {
      var records = resp.records;
      console.log(records);
      // ルックアップの更新
    }
  )});
