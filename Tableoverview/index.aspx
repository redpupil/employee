<%@ Page Language="C#" AutoEventWireup="true" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8" />
    <title>Overview Table</title>
    <link href="style.css" rel="stylesheet" />
    <link href="style-details.css" rel="stylesheet" />
    <link href="style2.css" rel="stylesheet" />
    <link rel="shortcut icon" href="#" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="tools.js"></script>
    <script src="script.js"></script>
    <script src="script-details.js"></script>
    
</head>

<body>
    
    <div class="new-employee" id="NewEmployee">
        <button type="button" name="new" id="create-new" class="btn btn-info" onclick="showPage(null)"> Neu anlegen</button>
    </div>

    <table class="employee" id="TableEmployee">
        <thead>
            <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Mobil</th>
                <th>Gebursdatum</th>
                <th>Gebursort</th>
                <th>Muttersprache</th>
                <th>Festnetznummer</th>
                <th>Notfallnummer</th>
                <th>E-Mail</th>
                <th>E-Mail privat</th>
                <th>Strasse</th>
                <th>Stadt</th>
                <th>PLZ</th>
            </tr>
        </thead>
        <tbody></tbody>

    </table>

    <div class="tab" id="hide1">
        <button class="uber">übersicht</button>
        <button class="tab2">2. Tab</button>
    </div>

    <div id="hide2">
        <form id="formdata" method="POST" name="myForm" >
            <div class="container" id="main">

                <div class="mitarbeiter" id="mit-div">

                    <table class="worker" id="WorkerTable">
                        <thead class="head">
                            <tr>
                                <th colspan="2">MITARBEITER</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td><input type="text" id="last" name="name" maxlength="30" /></td>
                            </tr>
                            <tr>
                                <td>Vorname</td>
                                <td><input type="text" id="first" name="vorname" maxlength="40" /></td>
                            </tr>
                            <tr>
                                <td>Gebursdatum</td>
                                <%--<td><input type="date" id="age" name="alter"  /></td>--%>
                                <td><input type="text" id="age" name="alter"  /></td>
                            </tr>
                            <tr>
                                <td>Geburtsort</td>
                                <td><input type="text" id="ort" name="ort" maxlength="40" /></td>
                            </tr>
                            <tr>
                                <td>Muttersprache</td>
                                <td>
                                    <select id="mutter" name="sprache">
                                        <option value="German">German</option>
                                        <option value="English">English</option>
                                        <option value="Bangla">Bangla</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="prompt"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="kontakt" id="kon-div">
                    <table class="contact" id="ContactTable">
                        <thead class="head">
                            <tr>
                                <th colspan="2">KONTAKT</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Mobil</td>
                                <td><input type="text" id="mobil" name="mobile" maxlength="30" /></td>
                            </tr>
                            <tr>
                                <td>Festnetznummer</td>
                                <td><input type="text" id="fest" name="festnr" maxlength="40" /></td>
                            </tr>
                            <tr>
                                <td>Notfallnummer</td>
                                <td><input type="text" id="notfall" name="notfallnr" maxlength="40" /></td>
                            </tr>
                            <tr>
                                <td>E-Mail</td>
                                <td><input type="email" id="email" name="emailid" maxlength="40" /></td>
                            </tr>
                            <tr>
                                <td>E-Mail privat</td>
                                <td><input type="email" id="privat" name="emailaddresse" /></td>
                            </tr>

                            <tr>
                                <td></td>
                                <td class="prompt"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="anschrift" id="ansch-div">
                    <table class="address" id="AddressTable">
                        <thead class="head">
                            <tr>
                                <th colspan="2">ANSCHRIFT</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Strasse</td>
                                <td><input type="text" id="str" name="strasse" maxlength="30" /></td>
                            </tr>
                            <tr>

                                <td>Ort</td>
                                <td><input type="text" id="city" name="city" maxlength="40" /></td>
                            </tr>
                            <tr>
                                <td>PLZ</td>
                                <td><input type="text" id="plz" name="citycode" maxlength="40" /></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="prompt"></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                
            </div>

            <div id="error-window">
                <%--<p id="error"></p>--%>
                <p id="error1"></p>
                <p id="error2"></p>
                <p id="error3"></p>
                <p id="success"></p>
            </div>
            
            <div class="submission">

                <input id="save" class="submit-btn" type="button" value="Speichern" onclick="saveData()" />
                <button class="submit-btn" onclick="goBack()">Zurück </button>

            </div>
        </form>
    </div>
</body>
</html>
