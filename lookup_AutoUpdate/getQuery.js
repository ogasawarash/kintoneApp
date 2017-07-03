(function() {
  "use strict";

  kintone.events.on('app.record.index.show', function(event) {
    console.log(kintone.app.getQuery());
  });
})();
