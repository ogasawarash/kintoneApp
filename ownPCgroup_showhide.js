(function() {
  "use strict";

  var events = [
    'app.record.create.show',
  ];
  kintone.events.on(events, function(event) {
    var record = event.record;
      kintone.app.record.setFieldShown('group_ownPCenv', false);
  });
})();
