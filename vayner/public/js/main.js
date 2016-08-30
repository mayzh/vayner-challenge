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
     $('#user1table').append("<tr>" + "<td>" + data[i].title + "</td>" + "</tr>")
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
     $('#user2table').append("<tr>" + "<td>" + data[i].title + "</td>" + "</tr>")
    }
  });

});
