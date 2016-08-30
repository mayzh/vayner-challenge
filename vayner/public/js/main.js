$(document).ready(function() {

  console.log('script loaded')
  var root = 'http://jsonplaceholder.typicode.com';

  $.ajax({
    dataType: 'json',
    url: root + '/users/1',
    method: 'GET'
  }).then(function(data) {
   // console.log(data);
    $(".user1").append(data.name);
  });

  $.ajax({
    dataType: 'json',
    url: root + '/albums?userId=1',
    method: 'GET'
  }).then(function(data) {
   // console.log(data);
    for(i = 0; i < data.length; i++){
      $('.albums1').append(data[i].title + "<br>")
    }
  });


  $.ajax({
    dataType: 'json',
    url: root + '/users/2',
    method: 'GET'
  }).then(function(data) {
   // console.log(data);
    $(".user2").append(data.name);
  });

  $.ajax({
    dataType: 'json',
    url: root + '/albums?userId=2',
    method: 'GET'
  }).then(function(data) {
   // console.log(data);
    for(i = 0; i < data.length; i++){
      $('.albums2').append(data[i].title + "<br>")
    }
  });

});
