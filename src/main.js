import { searchByName, searchBySymptom } from "./js/doctorLookup.js";
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {
  $('#userSearch').submit(function(e) {
    e.preventDefault();
    $('#results').show();
    let docName = $("#doctorName").val();
    searchByName(docName);
  });
  $('#symptomSearch').submit(function(e) {
    e.preventDefault();
    $('#results').show();
    let symptomName = $("#symptom").val();
    searchBySymptom(symptomName);
  });
});
