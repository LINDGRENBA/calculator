// BUSINESS LOGIC

let add = function(number1, number2) {
  return number1 + number2;
};

let subtract = function(number1, number2) {
  return number1 - number2;
};

let multiply = function(number1, number2) {
  return number1 * number2;
};

let divide = function(number1, number2) {
  return number1 / number2;
};


// USER INTERFACE

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    let number1 = parseFloat($("#number1").val());
    let number2 = parseFloat($("#number2").val());
    let operator = $("input:radio[name=operator]:checked").val();
    let result;
      if(operator === "add") {
        result = add(number1, number2)
      } else if(operator === "subtract") {
        result = subtract(number1, number2)
      } else if(operator === "multiply") {
        result = multiply(number1, number2)
      } else if(operator === "divide") {
        result = divide(number1, number2)
      }
    $("#output").text(result.toFixed(2));
  });
});

// $(document).ready(function() {
//   // ADD
//   $("#add").submit(function(event) {
//     event.preventDefault();
//     let number1 = parseInt($("#add1").val());
//     let number2 = parseInt($("#add2").val());
//     let result = add(number1, number2);
//     $("#output").text(result);
//   });
//   // SUBTRACT
//   $("#subtract").submit(function(event) {
//     event.preventDefault();
//     let number1 = parseInt($("#subtract1").val());
//     let number2 = parseInt($("#subtract2").val());
//     let result = subtract(number1, number2);
//     $("#output").text(result);
//   });
//   // MULTIPLY
//   $("#multiply").submit(function(event) {
//     event.preventDefault();
//     let number1 = parseInt($("#multiply1").val());
//     let number2 = parseInt($("#multiply2").val());
//     let result = multiply(number1, number2);
//     $("#output").text(result);
//   });
//   // DIVIDE
//   $("#divide").submit(function(event) {
//     event.preventDefault();
//     let number1 = parseInt($("#divide1").val());
//     let number2 = parseInt($("#divide2").val());
//     let result = divide(number1, number2);
//     $("#output").text(result);
//   });
// });


