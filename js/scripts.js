window.onload = function() {
  console.log("onLoad");
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    console.log("onSubmit");
    let turtleInfo = document.getElementById("turtles");
    console.log(turtleInfo);
    let dogInfo = document.getElementById("dogs");
    let monkeyInfo = document.getElementById("monkeys");
    let eagleInfo = document.getElementById("eagles");
    let dolphinInfo = document.getElementById("dolphins");
    let imSorryMessage = document.getElementById("im-sorry");

    const animal = (document.querySelector("input#animal").value).toLowerCase();

    if (animal === "turtle") {
      turtleInfo.removeAttribute("class");
    } else if (animal === "dog") {
      dogInfo.removeAttribute("class");
    } else if (animal === "monkey") {
      monkeyInfo.removeAttribute("class");
    } else if (animal === "eagle") {
      eagleInfo.removeAttribute("class");
    } else if (animal === "dolphin") {
      dolphinInfo.removeAttribute("class");
    } else {
      imSorryMessage.removeAttribute("class");
    }
  };
}