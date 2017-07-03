(function(){
  "use strict";
  console.log(event);
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
      console.log(resp.records);
    },function(error){
      console.log(error);
    });
})();
​
