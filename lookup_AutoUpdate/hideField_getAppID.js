(function() {
  "use strict";

  var events = [
    'app.record.detail.show',
    'app.record.edit.show',
    'app.record.create.show'
  ];
  kintone.events.on(events, function(event) {
  kintone.app.record.setFieldShown('getAppID', false);
    }
  });
})();
