
var obj = JSON.parse(
    '{"resourceType": "Patient",' + 
    '"id": "xcda",' + 
    '"text": {'+
      '"status": "generated",' + 
      '"div": "<div>\\n      \\n      <p>Henry Levin the 7th</p>\\n    \\n   </div>"' + 
      '},' + 
    '"identifier": [{' + 
      '"use": "usual",' +
      '"type": {' + 
        '"coding": [{' + 
          '"system": "http://hl7.org/fhir/v2/0203",' + 
          '"code": "MR"}]},' +
      '"system": "urn:oid:2.16.840.1.113883.19.5",' + 
      '"value": "12345"}],'+
    '"active": true,' + 
    '"name":[{"family": ["Levin"], "given": ["Henry"]}],' + 
    '"gender": "male",' + 
    '"birthDate": "2002-09-24",' +
    '"managingOrganization":{' +
      '"reference": "Organization/2.16.840.1.113883.19.5",' +
      '"display": "University Health Netword"},' +
    '"condition": ["Diabetes", "High blood pressure", "Asthma"]' + 
    '}');


function start() {
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
    newNumOfCond.innerHTML = obj.condition.length;
    document.getElementById("numberOfConditions").appendChild(
      newNumOfCond.firstChild);

    var newCondList = "";
    for (i in obj.condition) {
      newCondList += " - " + obj.condition[i] + "<br>";
    }
    document.getElementById("condList").innerHTML = newCondList;
  }
