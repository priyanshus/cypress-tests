export function getRandomString(prefix) {
  var text = prefix + "-"
  var possible = "0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
