// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var inputtedAddress = $("input#new-address").val();
//     var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress };
//     $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");
//
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input#new-address").val("");
//
//     $(".contact").last().click(function() {
//       $("#show-contact").show();
//       $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);
//       $(".address").text(newContact.address);
//     });
//
//   });
// });


$(document).ready(function() {
  $("#add-visit").click(function() {
    $("#new-visits").append('<div class="new-visit">' +
                                 '<div class="form-group">' +
                                   '<label for="new-date">Date</label>' +
                                   '<input type="text" class="form-control new-date">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-activity">Activity</label>' +
                                   '<input type="text" class="form-control new-activity">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-place").submit(function(event) {
      event.preventDefault();

      var inputtedName = $("input#new-name").val();
      var inputtedLocation = $("input#new-location").val();

      var newPlace = { name: inputtedName, location: inputtedLocation, visits: [] };

      $(".new-visit").each(function() {
        var inputtedDate = $(this).find("input.new-date").val();
        var inputtedActivity = $(this).find("input.new-activity").val();

        var newVisit = { date: inputtedDate, activity: inputtedActivity };
        newPlace.visits.push(newVisit);
      });


      $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>");

      $(".place").last().click(function() {
        $("#show-place").show();

        $("#show-place h2").text(newPlace.name);
        $(".new-name").text(newPlace.name);
        $(".new-location").text(newPlace.location);

        $("ul#places").text("");
        newPlace.visits.forEach(function(visit) {
          $("ul#visits").append("<li>" + visit.date + ", " + visit.activity + "</li>");
        });
      });

      $("input#new-name").val("");
      $("input#new-location").val("");
      $("input.new-date").val("");
      $("input.new-activity").val("");
    });
  });
