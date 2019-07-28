using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Text;
using System.IO;
using System.Globalization;
using System.Reflection;
using System.ComponentModel;
using System.Web.Script.Serialization;

namespace Tableoverview
{
    public class Employee
    {   
        //properties to fetch data
        public int? id; // allows integer & null values
        public string name;
        public string firstName;
        public DateTime birthDate; //DateTime type
        public string birthPlace;
        public string motherLanguage;
        public string mobile;
        public string festNummer;
        public string notfallNummer;
        public string email;
        public string emailPrivate;
        public string street;
        public string city;
        public string cityCode;
    }

    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    
    public class WebService1 : System.Web.Services.WebService
    {
        //Read the file line by line and store into List<Type>
        private List<Employee> ReadDataFile()
        {
            var employees = new List<Employee>();

            string[] allLines = System.IO.File.ReadAllLines(@"D:\Khan\Job\DAKO\Projects\Tableoverview\Tableoverview\daten.csv");

            //assign individual component of the CSV file into object properties
            foreach (string line in allLines)
            {
                Employee employee = new Employee();
                var fileData = line.Split(';');
                //parse data into correct format to assign
                employee.id = int.Parse(fileData[0]);
                employee.name = fileData[1];
                employee.firstName = fileData[2];
                employee.mobile = fileData[3];
                employee.birthDate = DateTime.ParseExact(fileData[4], "dd.MM.yyyy", new CultureInfo("de-de"));
                employee.birthPlace = fileData[5];
                employee.motherLanguage = fileData[6];
                employee.festNummer = fileData[7];
                employee.notfallNummer = fileData[8];
                employee.email = fileData[9];
                employee.emailPrivate = fileData[10];
                employee.street = fileData[11];
                employee.city = fileData[12];
                employee.cityCode = fileData[13];

                employees.Add(employee); //add single employee into the employees list
            }

            return employees; //return the list of all employees 
        }

        [WebMethod]
        //method to get the list of all employees
        public List<Employee> LoadEmployees()
        {
            return ReadDataFile();
        }

        [WebMethod]
        //method to get a single employee
        public Employee LoadSingleEmployee(int id)
        {
            //load data from ReadDataFile()
            //check the correct employee
            //return one employee
            var employees = ReadDataFile();

            for (int i = 0; i < employees.Count(); i++)
            {
                var currentEmployee = employees[i];
                
                if (currentEmployee.id == id)
                {                 
                    return employees[i];
                }
            }
            return null;
        }

        [WebMethod]
        //method to write data into the file
        private void WriteDataFile(List<Employee> employees)
        {
            // 1. Datei daten.csv leeren
            // 2. iterate employees
            // 2.1. Write line in file
            String path = (@"D:\Khan\Job\DAKO\Projects\Tableoverview\Tableoverview\daten.csv");
            if (File.Exists(path))
            {
                using (StreamWriter writer = new StreamWriter(path, false))
                {
                    for (int i = 0; i < employees.Count(); i++)
                    {
                        var currentEmployee = employees[i];

                        var row = "";
                        row += currentEmployee.id + ";";
                        row += currentEmployee.name + ";";
                        row += currentEmployee.firstName + ";";
                        row += currentEmployee.mobile + ";";
                        row += currentEmployee.birthDate.ToString("dd/MM/yyyy") + ";";
                        row += currentEmployee.birthPlace + ";";
                        row += currentEmployee.motherLanguage + ";";
                        row += currentEmployee.festNummer + ";";
                        row += currentEmployee.notfallNummer + ";";
                        row += currentEmployee.email + ";";
                        row += currentEmployee.emailPrivate + ";";
                        row += currentEmployee.street + ";";
                        row += currentEmployee.city + ";";
                        row += currentEmployee.cityCode;

                        writer.WriteLine(row);
                    }
                }
            }
        }

        [WebMethod]
        //method to save existing employee
        public void SaveEmployee(Employee test)
        {
            // 1. scenario: Edit an employee
            // 1.1. Iterate through the list employees and *find* the employee with the same id
            // 1.2. Save the founded employee in a local variable.
            // 1.3. Modify the founded employee and update the changed properties.
            // 1.4. Call WriteDataFile with employees.

            var employees = ReadDataFile();

            for (int j = 0; j < employees.Count(); j++)
            {
                var currentEmployee = employees[j];

                if (currentEmployee.id == test.id)
                {
                    employees[j] = test;
                }

                WriteDataFile(employees); //call the method to over-write with updated emplyoee
            }
        }

        [WebMethod]
        //method to add a new employee
        public void AddEmployee(Employee test)
        {
            // 2. scenario: new Employee
            // 2.1. Add Employee test to the list employees
            //we have already checked the id in javascript to call corresponding method

            var employees = ReadDataFile();

            //read the last id and add one
            //test.id = employees.Count() + 1;
            var y = employees.Count() - 1;
            test.id = employees[y].id + 1;
            employees.Add(test); //add input field (test) into the List<Employee>
            WriteDataFile(employees); 
            return;
        }

        [WebMethod]
        //method to delete employee
        public void DeleteEmployee(int id)
        {
            //track employee with id
            //delete line
            //adjust employee id? complicated and bad idea!

            var employees = ReadDataFile();
            
            for (int k = 0; k < employees.Count(); k++)
            {
                var singleEmployee = employees[k];
                
                if (singleEmployee.id == id)
                {
                    employees.Remove(singleEmployee); //remove the corresponding line
                    WriteDataFile(employees); //over-write with updated data
                    return;
                }
                
            }
            
        }

    }
}
