import $ from 'jquery';

export function searchByName(doctorName) {
  let request = new XMLHttpRequest();
  let doc = doctorName;
  let apiKey = process.env.exports.apiKey;
  console.log(apiKey);
  const url = `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${doc}&location=wa-seattle&skip=0&limit=10&user_key=${apiKey}`;
  request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      getElements(response);
    }
  };
  request.open("GET", url, true);
  request.send();
  const getElements = function(response) {
    for(let i = 0; i <= 10; i++) {
      $('#firstName').html(JSON.stringify(response.data[i].profile.first_name));
      $('#lastName').html(JSON.stringify(response.data[i].profile.last_name));
      $('#address').html(JSON.stringify(response.data[i].practices[0].visit_address.street));
      $('#phoneNumber').html(JSON.stringify(response.data[i].practices[0].phones[0].number));
      $('#website').html(JSON.stringify(response.data[i].practices[0].website));
      $('#acceptPatients').html(JSON.stringify(response.data[i].practices[0].accepts_new_patients));
    }
  };
}