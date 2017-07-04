(function(){
  "use strict";
  console.log(event);
    var offset = 0;
    var limit = 100;
    var getRecord = [];
    var param = {
      app:35,
      query:"limit "+ limit +  "offset " + offset,
      //fields:["$id"],
      record: ["records"]
    };
    function updateLookup(appId, records) {
      kintone.api.url('/k/v1/records', true),
      'PUT', {
        app: appId,
        records: records
      },
      function(resp) {};
    }

    kintone.api(kintone.api.url('/k/v1/records',true),'GET', param, function(resp){
      var records = resp.records;
      records[0]["ドロップダウン"]["value"] = "緑";
      updateLookup(46,records);
      console.log(records[0]["ドロップダウン"]["value"]);
      console.log(records);
    },function(error){
      console.log(error);
    });
})();
