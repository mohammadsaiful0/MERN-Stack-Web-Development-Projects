function calAge(){
    // get input value and separate input date value
    var userName=document.getElementById("username").value;
    // exact data from input date 
    var dateOfBirth=document.getElementById("DateOfBirth").value;
    var inputDate=new Date(dateOfBirth);
    var BirthYear=inputDate.getFullYear();
    var BirthMonth=inputDate.getMonth();
    var BirthDay= inputDate.getDate();

    // Check if the user has entered their name
    if(userName === ""){
        document.getElementById("NameOfUser").innerHTML = "Please enter your name!";
        document.getElementById("messageForUser").innerHTML = "";
        document.getElementById("DayAge").innerHTML = "";
        document.getElementById("YearAge").innerHTML = "";
        document.getElementById("MonthAge").innerHTML = "";
        return;
    }

    // get current date and separate current date value
    var CurrentDate= new Date();
    var CurrentYear=CurrentDate.getFullYear();
    var CurrentMonth=CurrentDate.getMonth(); //the +1 for count the month from 1 by default index number is 0 ;
    var CurrentDay=CurrentDate.getDate();

    // Calculate the age 
    var ageYear= CurrentYear - BirthYear;
    var ageMonth= CurrentMonth - BirthMonth;
    var ageDay= CurrentDay - BirthDay;
    
    // Give a message if user put future date
    if(ageMonth<0 || (ageMonth == 0 && ageDay <0)){
        ageYear--;
        ageMonth +=12;
        if(ageDay<0){
            ageDay+= new Date(CurrentYear, CurrentMonth, 0).getDate();
        }
    }
    //retrun  Output 
    if (ageYear < 0) {
        document.getElementById("NameOfUser").innerHTML = "You are not born yet!";
        document.getElementById("messageForUser").innerHTML = "";
        document.getElementById("DayAge").innerHTML = "";
        document.getElementById("YearAge").innerHTML = "";
        document.getElementById("MonthAge").innerHTML = "";
      } else {
        document.getElementById("NameOfUser").innerHTML = userName;
        document.getElementById("messageForUser").innerHTML = "You Are ";
        document.getElementById("DayAge").innerHTML = ageDay;
        document.getElementById("YearAge").innerHTML = ageYear;
        document.getElementById("MonthAge").innerHTML = ageMonth;
      }


};
