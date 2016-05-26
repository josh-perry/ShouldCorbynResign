var corbynisms_suffix = [
  "Should Corbyn Resign?",
  "Is Jeremy Corbyn To Blame?",
  "Do We Need The Monarchy?"
];

var corbynisms_prefix = [
  "SCANDAL: ",
  "Jeremy Corbyn: "
];

function corbynise() {
  $(".titletext").each(function() {
    var title = $(this).text();
    var which_corbynism_type = Math.floor(Math.random() * 3);

    if(which_corbynism_type == 0) {
      // Suffix
      var corbynism = corbynisms_suffix[Math.floor(Math.random() * corbynisms_suffix.length)]
      $(this).text(title += " - " + corbynism);
    }
    else if(which_corbynism_type == 1) {
      // Prefix
      var corbynism = corbynisms_prefix[Math.floor(Math.random() * corbynisms_prefix.length)]
      $(this).text(corbynism += title);
    }
    else {
      // Neither
    }
  });
}

corbynise();
