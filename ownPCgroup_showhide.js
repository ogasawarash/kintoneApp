(function() {
 "use strict";

  var events = [
    'app.record.detail.show',
    'app.record.edit.show',
    'app.record.detail.process.proceed'
  ];
  var indicateStatus = 'チェックリスト確認中'; 
  kintone.events.on(events, function(event) {
      var record = event.record;
           kintone.app.record.setFieldShown('group_ownPCenv', false);
  });
})();
