$(document).ready(function () {
    $("#hide1").hide();
    $("#hide2").hide();
    webservice("/WebService1.asmx/LoadEmployees")
        .done(function (employees) { 
            var table_data = '<table>';
            var table = $('#TableEmployee tbody');
            table.children().remove();
            employees.forEach(function (employee, idx) {
                console.log(employee);
                var tr = $('<tr>');
                tr.append($('<td>').append('<img src="edit.svg" alt="Edit" onclick="showPage(' + employee.id + ')" />'));
                tr.append($('<td>').append('<img src="delete.svg" alt="Delete" onclick="deleteMsg(this); deleteEmployee(' + employee.id + ');"/>'));
                tr.append($('<td>', { "text": employee.name + " " + employee.firstName}));
                tr.append($('<td>', { "text": employee.mobile }));
                tr.append($('<td>', { "text": formatDate(employee.birthDate) }));
                tr.append($('<td>', { "text": employee.birthPlace }));
                tr.append($('<td>', { "text": employee.motherLanguage }));
                tr.append($('<td>', { "text": employee.festNummer }));
                tr.append($('<td>', { "text": employee.notfallNummer }));
                tr.append($('<td>', { "text": employee.email }));
                tr.append($('<td>', { "text": employee.emailPrivate }));
                tr.append($('<td>', { "text": employee.street }));
                tr.append($('<td>', { "text": employee.city }));
                tr.append($('<td>', { "text": employee.cityCode }));

                table.append(tr);
            });
            table_data += '</table>';
        })
        .fail(function () {

        });
    
});

function deleteMsg(r) {
    
    if (confirm("Warning! Do you want to delete the data?")) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("TableEmployee").deleteRow(i);
    }

    //else {
    //    //do nothing
    //}
}
