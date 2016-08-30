console.log('script loaded')

var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
  url: root + '/users/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});

$.ajax({
  url: root + '/users/2',
  method: 'GET'
}).then(function(data) {
  console.log(data);
});
