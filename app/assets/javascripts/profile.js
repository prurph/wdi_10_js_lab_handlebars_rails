$(function() {
  $.ajax({
    url: Routes.profile_path(),
    type: 'GET',
    dataType: 'json',
  })
  .done(function(response) {
    console.log(response);
    $('#body').append(HandlebarsTemplates['profile'](response));
  });
});

Handlebars.registerHelper('fullName', function() {
  return this.firstName + ' ' + this.lastName;
});

Handlebars.registerHelper('namedMonthWithYear', function(date) {
  var months = [
    undefined,
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septebmer",
    "October",
    "November",
    "December"
  ],
  thisMonth = parseInt(date.month);
  return months[thisMonth] + ' ' + date.year;
});

Handlebars.registerHelper('slashnToBr', function(summary) {
  return new Handlebars.SafeString(summary.replace(/\n/g, "<br>"));
});
