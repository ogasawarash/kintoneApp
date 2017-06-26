(function() {
  "use strict";
  var events = [
    'app.record.detail.show',
    'app.record.create.show',
    'app.record.create.change.checkbox_rmrequest',
    'app.record.edit.show',
    'app.record.edit.change.checkbox_rmrequest'
  ]
  kintone.events.on(events,function(event){
    var record = event.record;
    if(record['checkbox_rmrequest']['value'][0] === 'なし'){
      for(i = 1; i < value.size; i++){
        record['checkbox_rmrequest']['value'][i] == false;
      }
      retrun event;
    }
  });
})();
