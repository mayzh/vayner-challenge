$(document).ready(function() {

  console.log('script loaded')
  var root = 'http://jsonplaceholder.typicode.com';

  $.ajax({
    dataType: 'json',
    url: root + '/users/1',
    method: 'GET'
  }).then(function(data) {
    console.log(data);
    $(".user1").append(data.name);
  });

  $.ajax({
    dataType: 'json',
    url: root + '/users/2',
    method: 'GET'
  }).then(function(data) {
    console.log(data);
    $(".user2").append(data.name);
  });

});
