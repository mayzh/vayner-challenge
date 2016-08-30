$(document).ready(function() {

  console.log('script loaded')

/////////////AJAX CALLS//////////////

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
     $('#user1table').append("<tr itemid='" + data[i].id + "' class='user-one'>" + "<td>" + data[i].id + "</td>" + "<td>" + data[i].title + "</td>" + "</tr>")
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
     $('#user2table').append("<tr itemid='" + data[i].id + "' class='user-two'>" + "<td>" + data[i].id + "</td>" + "<td>" + data[i].title + "</td>" + "</tr>")
    }
  });


//////////////DRAG AND DROP////////////////////



  $(function() {
    $( "#table1_tbody, #table2_tbody").sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });

  $( ".connectedSortable" ).on( "sortstop", function( event, ui ) {
    console.log('send ajax call now');

      //This function activates on dropping the item, and this is where we would make the ajax call to the API.

        // $.ajax({
        //     url: root + '/albums?id=' + id,
        //     type: "POST",
        //     data: { 'userId': newID},
        //     success: function()
        //         {
        //             console.log('API successfully updated.')
        //         }
        // });

  } );

});
