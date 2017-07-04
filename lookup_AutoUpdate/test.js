(function() {
  "use strict";
  var offset = 0;
  var limit = 100;
  var getRecord = [];
  var updateAppId = kintone.app.getId();
  var masterParam = {
    app: 35,
    query: "limit " + limit + "offset " + offset,
    //fields:["$id"],
    record: ["records"]
  };

  function updateLookup(appId, records) {
    kintone.api.url('/k/v1/records', true),
    'PUT', {
      app: appId,
      record: records
    },
    function(resp) {};
  }

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

  kintone.events.on(['app.record.edit.submit', 'app.record.index.edit.submit'], function(event) {
    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', masterParam, function(resp) {
      var records = resp.records;
      console.log(records);
      updateLookup(updateAppId, createPutRecords(records));
    }, function(error) {
      console.log(error);
    });
  })
})();
