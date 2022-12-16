


var student1 = {

    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 1,
    cnic: 4220158565897,

}
var student2 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 2,
    cnic: 4220158565897,

}
var student3 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 3,
    cnic: 4220158565897,

}
var student4 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 4,
    cnic: 4220158565897,

}
var student5 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 5,
    cnic: 4220158565897,

}
var student6 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 6,
    cnic: 4220158565897,

}
var student7 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 7,
    cnic: 4220158565897,

}
var student8 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 8,
    cnic: 4220158565897,

}
var student9 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 9,
    cnic: 4220158565897,

}
var student10 = {
    F_name: 'Ashir',
    L_Nam: 'Azeem',
    age: 21,
    rollNo: 10,
    cnic: 4220158565897,

}


var flag = false;
var students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];

function search() {

    var newRollNum = document.getElementById('rollNum');
    var dummydata = document.getElementById('data');
    for (var index = 0; index < students.length; index++) {
        if (newRollNum.value == students[index].rollNo) {
            dummydata.innerHTML =  "First Name : " + students[index].F_name + "<br>" + "Last Name : " + students[index].L_Nam + "<br>" + "Age : " + students[index].age + "<br>" + "CNIC # " + students[index].cnic + "<br>" + "Roll No : " + students[index].rollNo;

        }


    }

}



