function goBack() {
    //show in same page instead of linking to index page
    $("#NewEmployee").hide();
    $("#TableEmployee").hide();
    $("#hide1").show();
    $("#hide2").show();
}

var CurrentId = null;

function showPage(id) {
   document.getElementById('last').addEventListener('keyup', bla);
   CurrentId = id;
   $("#NewEmployee").hide();
   $("#TableEmployee").hide();
   $("#hide1").show();
   $("#hide2").show();

    if (id != null) {
        //load the single employee from the csv file to show into text box
        webservice("/WebService1.asmx/LoadSingleEmployee", { id: CurrentId })
            .done(function (singleEmployee) {
                $("#last").val(singleEmployee.name);
                $("#first").val(singleEmployee.firstName);
                $("#age").val(formatDate(singleEmployee.birthDate));
                $("#ort").val(singleEmployee.birthPlace);
                $("#mutter").val(singleEmployee.motherLanguage);
                $("#mobil").val(singleEmployee.mobile);
                $("#fest").val(singleEmployee.festNummer);
                $("#notfall").val(singleEmployee.notfallNummer);
                $("#email").val(singleEmployee.email);
                $("#privat").val(singleEmployee.emailPrivate);
                $("#str").val(singleEmployee.street);
                $("#city").val(singleEmployee.city);
                $("#plz").val(singleEmployee.cityCode);

            }).fail(function () {

            });
    }
    
}

function bla(ev) {
    console.log(ev, this);
    this.value = "huhu";
}

//Read and save input data 
function saveData() {
    var x = document.getElementById("last").value;
    var y = document.getElementById("first").value;
    var z = document.getElementById("age").value;

    //document.getElementById("error").innerHTML = "";
    document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";


    //use switch case???
    //loop?
    //var x = document.forms["myForm"];
    //var errorMsg = "";
    //var i;
    //for (i = 0; i < x.length; i++) {
    //    errorMsg += x.elements[i].value + "<br>";
    //}
    //document.getElementById("error").innerHTML = errorMsg;
    //}
    

    //############################# CRAPPY CODE #######################
    if (x.length == 0 || y.length == 0 || z.length == 0 || 
        x.match(/[^a-zA-Z-äöüÄÖÜ]+/g) || y.match(/[^a-zA-Z-äöüÄÖÜ]+/g) || !(z.match(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g)))
    {
        //var errorMsg = "";
        //errorMsg += "ERROR! Name cannot be empty!\n";
        //document.getElementById("error").innerHTML = errorMsg;
        if (x.length == 0 && y.length == 0 && z.length == 0)
        {
            document.getElementById("error1").innerHTML = "ERORR! Name cannot be empty!";
            document.getElementById("error2").innerHTML = "ERORR! Firstname cannot be empty!";
            document.getElementById("error3").innerHTML = "ERORR! Age should be filled out!";
            document.getElementById("success").innerHTML = "";
            //return false;
        }

        else if (x.length == 0)
        {
            document.getElementById("success").innerHTML = "";
            document.getElementById("error1").innerHTML = "ERROR! Name cannot be empty!";
            if (y.length == 0) {
                document.getElementById("success").innerHTML = "";
                document.getElementById("error2").innerHTML = "ERROR! Firstname cannot be empty!";
                //return false;
            }
            else if (z.length == 0) {
                document.getElementById("success").innerHTML = "";
                document.getElementById("error3").innerHTML = "ERROR! Age should be filled out!";
                //return false;
            }
            //return false;
        }

        else if (y.length == 0)
        {
            document.getElementById("error2").innerHTML = "ERROR! Firstname cannot be empty!";
            document.getElementById("success").innerHTML = "";
            if (x.length == 0) {
                document.getElementById("success").innerHTML = "";
                document.getElementById("error1").innerHTML = "ERROR! Name cannot be empty!";
                //return false;
            }
            else if (z.length == 0) {
                document.getElementById("success").innerHTML = "";
                document.getElementById("error3").innerHTML = "ERROR! Age should be filled out!";
                //return false;
            }
            //return false;
        }

        else if (z.length == 0)
        {
            document.getElementById("success").innerHTML = "";
            document.getElementById("error3").innerHTML = "ERROR! Age should be filled out!";
            if (x.length == 0) {
                document.getElementById("success").innerHTML = "";
                document.getElementById("error1").innerHTML = "ERROR! Name cannot be empty!";
                //return false;
            }
            else if (y.length == 0) {
                document.getElementById("success").innerHTML = "";
                document.getElementById("error2").innerHTML = "ERROR! Firstname cannot be empty!";
                //return false;
            }
            //return false;
        }

        else if (x.match(/[^a-zA-Z-äöüÄÖÜ]+/g) && y.match(/[^a-zA-Z-äöüÄÖÜ]+/g) && !z.match(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g))
        {
            document.getElementById("error1").innerHTML = "Invalid name format!";
            document.getElementById("error2").innerHTML = "Invalid firstname format!";
            document.getElementById("error3").innerHTML = "Invalid date format! It should be (dd.mm.yyyy)";
            document.getElementById("success").innerHTML = "";
            //return false;
        }

        else if (x.match(/[^a-zA-Z-äöüÄÖÜ]+/g))
        {
            document.getElementById("error1").innerHTML = "Invalid name format!";
            document.getElementById("success").innerHTML = "";
            if (y.match(/[^a-zA-Z-äöüÄÖÜ]+/g)) {
                document.getElementById("error2").innerHTML = "Invalid firstname format!";
                document.getElementById("success").innerHTML = "";
                //return false;
            }
            else if (!z.match(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g)) {
                //else if (!z.match((/\d{2}\.\d{2}\.\d{4}/))) {
                document.getElementById("error3").innerHTML = "Invalid date format! It should be (dd.mm.yyyy)";
                document.getElementById("success").innerHTML = "";
                //return false;
            }
            //return false;
        }

        else if (y.match(/[^a-zA-Z-äöüÄÖÜ]+/g))
        {
            document.getElementById("error2").innerHTML = "Invalid firstname format!";
            document.getElementById("success").innerHTML = "";
            if (x.match(/[^a-zA-Z-äöüÄÖÜ]+/g)) {
                document.getElementById("error1").innerHTML = "Invalid name format!";
                document.getElementById("success").innerHTML = "";
                //return false;
            }
            else if (!z.match(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g)) {
                //else if (!z.match((/\d{2}\.\d{2}\.\d{4}/))) {
                document.getElementById("error3").innerHTML = "Invalid date format! It should be (dd.mm.yyyy)";
                document.getElementById("success").innerHTML = "";
                //return false;
            }
            //return false;
        }

        else if (!z.match(/^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g))
        {
            document.getElementById("error3").innerHTML = "Invalid date format! It should be (dd.mm.yyyy)";
            document.getElementById("success").innerHTML = "";
            if (x.match(/[^a-zA-Z-äöüÄÖÜ]+/g)) {
                document.getElementById("error1").innerHTML = "Invalid name format!";
                document.getElementById("success").innerHTML = "";
                //return false;
            }
            else if (y.match(/[^a-zA-Z-äöüÄÖÜ]+/g)) {
                document.getElementById("error2").innerHTML = "Invalid firstname format!";
                document.getElementById("success").innerHTML = "";
                //return false;
            }
            //return false;
        }
        return false;
    }

    else {
        var data = {
            id: CurrentId,
            name: document.getElementById("last").value,
            firstName: document.getElementById("first").value,
            mobile: document.getElementById("mobil").value,
            birthDate: parseDate(document.getElementById("age").value),
            birthPlace: document.getElementById("ort").value,
            motherLanguage: document.getElementById("mutter").value,
            festNummer: document.getElementById("fest").value,
            notfallNummer: document.getElementById("notfall").value,
            email: document.getElementById("email").value,
            emailPrivate: document.getElementById("privat").value,
            street: document.getElementById("str").value,
            city: document.getElementById("city").value,
            cityCode: document.getElementById("plz").value
        };

        //webservice("/WebService1.asmx/LoadEmployees");

        //check the employee is new or old
        //if (new)-> add new employee
        //else update
        if (CurrentId != null) {
            //call method to over-write the existing employee with input value (data)
            webservice("/WebService1.asmx/SaveEmployee", { test: data })
                .done(function (foo) {
                document.getElementById("success").innerHTML = "Successfully saved!";
            });
        }
        else {
            //call method to add a new employee data
            webservice("/WebService1.asmx/AddEmployee", { test: data })
                .done(function (bar) {
                    document.getElementById("success").innerHTML = "Successfully saved as new Employee!";
                });
        }
    }
}

function deleteEmployee(id) {
    //track employee with the id and remove
    webservice("/WebService1.asmx/DeleteEmployee", {id: id});
}