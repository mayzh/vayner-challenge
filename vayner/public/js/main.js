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
     $('#user1table').append("<tr itemid='" + data[i].id + "' class='drag-row'>" + "<td>" + data[i].id + "</td>" + "<td>" + data[i].title + "</td>" + "</tr>")
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
     $('#user2table').append("<tr itemid='" + data[i].id + "' class='drag-row'>" + "<td>" + data[i].id + "</td>" + "<td>" + data[i].title + "</td>" + "</tr>")
    }
  });


//////////////DRAG AND DROP////////////////////

// $('.drag-row').draggable({
//     cursor: 'move',
//     helper: "clone"
// });

// $("#user1table").droppable({
//   drop: function(event, ui) {
//     var itemid = $(event.originalEvent.toElement).attr("itemid");
//     $('.drag-row').each(function() {
//       if ($(this).attr("itemid") === itemid) {
//         $(this).appendTo("#user1table");
//       }
//     });
//   }
// });

// $("#user2table").droppable({
//   drop: function(event, ui) {
//     var itemid = $(event.originalEvent.toElement).attr("itemid");
//     $('.drag-row').each(function() {
//       if ($(this).attr("itemid") === itemid) {
//         $(this).appendTo("#user2table");
//       }
//     });
//   }
// });

// $( function() {
//     $( ".drag-row" ).draggable();
//     $( "#.drag-row" ).droppable({
//       drop: function( event, ui ) {
//         $( this )
//           .append('dropped!');
//       }
//     });
//   } );

  $(function() {
    $( "#table1_tbody, #table2_tbody").sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  });

});
