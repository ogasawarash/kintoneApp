(function(){
  "use strict";
    var offset = 0;
    var limit = 100;
    var getRecord = [];
    var param = {
      app:kintone.app.getId(),
      query:"limit "+ limit +  "offset " + offset,
      //fields:["$id"],
      record: ["records"]
    };
    kintone.api(kintone.api.url('/k/v1/records',true),'GET', param, function(resp){
      var records = resp.records;
        var lookupValue = records[0].lookup.value
        records[0].lookup.value = lookupValue;
        records[0].lookup.lookup = false;
        //records[0].lookup.lookup = true;
      console.log(records);
    },function(error){
      console.log(error);
    });
    return event;
})();
