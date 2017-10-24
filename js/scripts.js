$(document).ready(function(){
  $("#wordProblem").submit(function(event){
    var vowels = ["a", "e", "i", "o", "u"];
    var sentence = $('#sentence').val();
    var result = sentence.split("");

    for (var sentenceIndex = 0; sentenceIndex < result.length; sentenceIndex++) {
      for (var vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
        if (vowels[vowelsIndex] === result[sentenceIndex]){
          result[sentenceIndex] = "-";
        }
      }
    }

    var output = result.join("");
    $("#puzzle").append("<p>" + output + "</p>")
    event.preventDefault();

  });
});
