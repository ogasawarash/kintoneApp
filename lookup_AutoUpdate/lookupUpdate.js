kintone.events.on(['app.record.index.show'], function(event) {
    var record = event.record;
	  var lookupValue = record.lookup.value;
	console.log(record);
    record.lookup.value = lookupValue; // 'recNo'はルックアップフィールドのフィールドコードとする
    record.lookup.lookup = true; // 「取得」を押下した状態にする
    return event;
});
