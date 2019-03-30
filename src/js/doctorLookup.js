import $ from 'jquery';

export function searchByName(doctorName) {
  let request = new XMLHttpRequest();
  let doc = doctorName;
  let apiKey = process.env.exports.apiKey;
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${doc}&location=wa-seattle&skip=0&limit=11&user_key=${apiKey}`;
  request.onreadystatechange = function() {
    let message = document.getElementById("error");
    try {
      if(this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }catch(err) {
      message.innerHTML = "Error is " + err;
    }
  }
  request.open("GET", url, true);
  request.send();
  const getElements = function(response) {
    if(response.data.length === 0) {
      $("#noDoctors").text("No doctors match this search");
    }else{
      for(let i = 0; i < 11; i++) {
        $('#firstName' + i).text(JSON.stringify(response.data[i].profile.first_name));
        $('#lastName' + i).text(JSON.stringify(response.data[i].profile.last_name));
        $('#address' + i).text(JSON.stringify(response.data[i].practices[0].visit_address.street));
        $('#phoneNumber' + i).text(JSON.stringify(response.data[i].practices[0].phones[0].number));
        $('#website' + i).text(JSON.stringify(response.data[i].practices[0].website));
        $('#acceptPatients' + i).text(JSON.stringify(response.data[i].practices[0].accepts_new_patients));
      }
      $("#noDoctors").text("");
    }
  };
}
export function searchBySymptom(symptom) {
  let request = new XMLHttpRequest();
  let sympt = symptom;
  let apiKey = process.env.exports.apiKey;
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${sympt}&location=wa-seattle&skip=0&limit=11&user_key=${apiKey}`
  request.onreadystatechange = function() {
    let message = document.getElementById("error");
    try {
      if(this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    }catch(err) {
      message.innerHTML = "Error is " + err;
    }
  }
  request.open("GET", url, true);
  request.send();
  const getElements = function(response) {
    if(response.data.length === 0) {
      $("#noDoctors").text("No doctors match this search");
    }else{
      for(let i = 0; i < 11; i++) {
        $('#firstName' + i).text(JSON.stringify(response.data[i].profile.first_name));
        $('#lastName' + i).text(JSON.stringify(response.data[i].profile.last_name));
        $('#address' + i).text(JSON.stringify(response.data[i].practices[0].visit_address.street));
        $('#phoneNumber' + i).text(JSON.stringify(response.data[i].practices[0].phones[0].number));
        $('#website' + i).text(JSON.stringify(response.data[i].practices[0].website));
        $('#acceptPatients' + i).text(JSON.stringify(response.data[i].practices[0].accepts_new_patients));
      }
      $("#noDoctors").text("");
    }
  };
}