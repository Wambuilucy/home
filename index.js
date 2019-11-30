function submitForm(event) {
    event.preventDefault();
    var date = document.forms["akanForm"]["birthday"].value;
    var gender = document.forms["akanForm"]["gender"].value;
    var akanName = "";

    var femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama"
    ];

    var maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
    ];

    var dateObject = new Date(date);
    var day = dateObject.getDay();

    if (day != null && gender != null) {
        if (gender === "male") {
            akanName = maleNames[day];
        }
        else {
            akanName = femaleNames[day];
        }
    }
    document.getElementById("akanName").innerHTML = akanName;
}





