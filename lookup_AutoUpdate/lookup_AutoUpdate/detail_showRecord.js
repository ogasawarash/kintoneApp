kintone.events.on('app.record.detail.show', function(event) {
  var record = event.record;
  var body = {
    "app": kintone.app.getId(),
    "id": record['$id']['value'],
    "record": {}
    };
  var limitCount = 100;
  var offsetCount = 0;
  kintone.api(kintone.api.url('/k/v1/record', true),
    'GET',
    {
    "app": kintone.app.getId(),
    "id": record['$id']['value'],
    "query": ' limit ' + limitCount + ' offset ' + offsetCount
  }
    function(resp) {
      // success
      for(var i = 0; i < resp.records.length; i++){

        console.log(resp);
      }
    },
    function(error) {
      // error
      console.log(error);
    }
  );
});
