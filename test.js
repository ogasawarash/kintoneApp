(function() {
    "use strict";
    var record = event.record;
    var length = record.value.length

    kintone.events.on('app.record.edit.show', function(event) {
    window.alert(lemgth);
    });


})();
