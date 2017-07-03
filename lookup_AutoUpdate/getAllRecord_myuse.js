(function() {
  var offset = 0;
  var record = new Array();
  var loopendflg = false;
  var limit = 100;
  var appId = kintone.app.getId();
  var query = 'limit' + limit + 'offset  ' + offset;
  var events = ['app.record.create.show', 'app.record.edit.show', 'app.record.index.edit.show'];

  kintone.events.on('app.record.index.edit.submit', function(event) {
    var record = event.record;

    return new kintone.Promise(function(resolve, reject) {
      kintone.api('/k/v1/records', true)
      'GET', {
        app: appId,
        query: query
      }
    }, function(resp) {
      console.log(app);
      resolve(event);
    }, function() {
      console.log(error);
    })
  })
})();

while (!loopendflg) {
  if (resp.records.length > 0) {
    for (var i = 0; resp.records.length > i; i++) {
      records.push(resp.records[i]);
    }
    offset += resp.records.length;
  } else {
    loopendflag = true;
  }
}
