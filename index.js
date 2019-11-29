const maleNames = [
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];	  "Kwasi",
      "Kwadwo",
      "Kwabena",
      "Kwaku",
      "Yaw",
      "Kofi",
      "Kwame"
    ];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
     function validateInput() {	function validateInput() {
      var year = document.forms["akanForm"]["year"].value;	  let year = document.forms["akanForm"]["year"].value;
      var gender = document.forms["akanForm"]["gender"].value;	  let gender = document.forms["akanForm"]["gender"].value;
    
    
       if (year != null && year != undefined && year != "") {	  if (year != null && year != undefined && year != "") {
        $("#exampleModal").modal("show");	    $("#akanModal").modal("show");
        document.getElementById("actualAkanName").innerHTML = `${getName(	    document.getElementById("actualAkanName").innerHTML = `${getAkanName(
          year,	      year,
          gender	      gender
        )}`;	    )}`;
      } else {	  } else {
        alert("Please enter a valid birth date");	    alert("Please enter a valid birth date");
      }	  }
    }	}
    var getName = (year, gender) => {	var getAkanName = (year, gender) => {
      let day = new Date(year);	  let day = new Date(year);
      let dayNumber = day.getDay();	  let dayNumber = day.getDay();
      let name = "";	  let name = "";
    }
    