'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);
    if (responseJson.status === "error"){
        alert('That breed was not found, please try another.');
    }
  else{
  $(`.results`).html(`<h2> Wow! Look at this pupper!</h2>`);
//split url to access breed section 
//then append image and breed name
  let split1 = responseJson.message.split("/");
  let breedName= split1[4];
  $(`.results`).append(` It is a ${breedName}! `);
  $('.results').append(`<img src="${responseJson.message}">`);
  $('.results').removeClass('hidden');
  }
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogBreed= $('input[name="dogBreed"]').val();
    getDogImage(dogBreed);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});