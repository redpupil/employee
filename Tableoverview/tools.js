function webservice(url, data) {
    function convertDates(someData) {
        if (someData === null)
            return null;

        var convertDate = function (string) {
            var match = string.match(/^\/Date\((-?\d+)\)\/$/);
            if (match === null)
                return string;
            else {
                var dateTime = new Date(parseInt(match[1]));
                return new Date(dateTime.getTime() - (dateTime.getTimezoneOffset() * 60 * 1000));
            }
        };

        if (typeof (someData) === "string")
            someData = convertDate(someData);
        else if (typeof (someData) === "object") {
            Object.keys(someData).forEach(function (key) {
                var data = someData[key];
                if (data !== null && typeof (data) === 'object')
                    convertDates(data);
                else if (typeof (data) === 'string') {
                    someData[key] = convertDate(data);
                }
            });
        }
        return someData;
    }
    
    //var copy;
    //if (options.data)
    //    // create deep copy of options.data
    //    copy = dw.serializeDate($.extend(true, {}, options.data));
    
    return jQuery.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: "/tableoverview" + url,
            data: data ? JSON.stringify(data) : undefined
        })
        .then(function (resp) {
            return convertDates(resp.d);
        });
}

function formatDate(date) {
    return date ? date.getDate() + "." + 
        ("0" + (date.getMonth() + 1)).slice(-2) + "." + date.getFullYear() : ""
}

function parseDate(dateStr) {
    if (!dateStr)
        return null;

    var dateSplit = dateStr.split(".");

    return new Date(dateSplit[2], Number(dateSplit[1]) - 1, dateSplit[0]);
}
