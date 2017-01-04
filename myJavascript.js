
function getRandomUser(){
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: `https://randomuser.me/api`
    })
    .then(function(data, textStatus, XHR){
      //console.log("data", data)
      resolve(data)
    })
  })
}

getRandomUser()
  .then(function(data) {
    console.log(data)
    var randomUser = data
      //handlebars step one: grap the html from the script tag
      var userHTML = $("#userScript").html()

      //handlebars step two: compile it into a template
      var userTemplate = Handlebars.compile(userHTML)

      //handlebas step three: render the resulting HTML by passing the data to the template
      var userOutput = userTemplate(randomUser)

      //handlebars step four: put the complete HTML into the DOM
      $("#userGoesHere").append(userOutput)
  })

//sample data modified from randomUser.me
// var randomUser = {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "ms",
//         "first": "stella",
//         "last": "meyer"
//       },
//       "location": {
//         "street": "7385 kapellenweg",
//         "city": "schmalkalden-meiningen",
//         "state": "saarland",
//         "postcode": 58225
//       },
//       "email": "stella.meyer@example.com",
//       "picture": {
//         "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
//       },
//       "nat": "DE"
//     }
//   ]
// }

