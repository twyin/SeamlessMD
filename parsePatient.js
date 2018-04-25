
 function loadJSON(callback) {   
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText);
          // console.log("successful response");
          callback(xmlhttp.responseText);
      }
  };
  xmlhttp.open("GET", "q1.json", true);
  xmlhttp.send();
 }


function start() {
  loadJSON(function(response) {
    var obj = JSON.parse(response);

    var newName = document.createElement('text');
    newName.innerHTML = obj.name[0].given[0] + " " + obj.name[0].family;
    document.getElementById("name").appendChild(newName.firstChild);

    var newOrg = document.createElement('text');
    newOrg.innerHTML = obj.managingOrganization.display;
    document.getElementById("organization").appendChild(newOrg.firstChild);

    var newGender = document.createElement('text');
    newGender.innerHTML = obj.gender;
    document.getElementById("gender").appendChild(newGender.firstChild);

    var newNumOfCond = document.createElement('text');
    newNumOfCond.innerHTML = obj.conditions.length;
    // newNumOfCond.innerHTML = obj.conditions.length;
    document.getElementById("numberOfConditions").appendChild(
      newNumOfCond.firstChild);

    var newCondList = "";
    for (i in obj.conditions) {
      newCondList += " - " + obj.conditions[i] + "<br>";
    }
    document.getElementById("condList").innerHTML = newCondList;
  });

}
