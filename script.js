$("button").click(function() {
    let name = $(".questionOne").val();
    console.log("name"+name);
    let questionTwo = $(".questionTwo").val();
    console.log(questionTwo);
    let questionThree = $(".questionThree").val();
    console.log("hello"+questionThree);
let answer = "Your name is " + name + " and your hobby is soccer and in 5 years you'll have played soccer 65 times";
   $(".fortune-display").text(answer);
});