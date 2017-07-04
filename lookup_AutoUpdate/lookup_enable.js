(function(){
  'use strict';
  kintone.events.on(['app.record.edit.show', 'app.record.create.show'], function(event){
    event.record["company"].disabled = false;
    return event;
  });
})();
