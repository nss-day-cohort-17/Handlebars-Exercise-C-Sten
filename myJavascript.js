var randomUser
$.ajax({url:"https://randomuser.me/api"})
.then(function( data, textStatus, jqXHR ) {
  randomUser = data;
  //handlebars step one: grap the html from the script tag
  var entryHTML = $("#userEntry").html();

  //handlebars step two: compile it into a template
  var entryTemplate = Handlebars.compile(entryHTML);

  //handlebars step three:render the HTML by passing the data to the template
  var entryOutput = entryTemplate(randomUser);

  //handlebars step four: put the complete HTML into the DOM
  $("#user-output").append(entryOutput);
});
