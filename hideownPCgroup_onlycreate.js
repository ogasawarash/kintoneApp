(function() {
    "use strict";
    var createEvents = [
    'app.record.create.show'
    ];
    kintone.events.on(createEvents, function(event) {
        var record = event.record
        kintone.app.record.setFieldShown('group_ownPCenv', false);
    });
})();
