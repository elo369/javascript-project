var line = document.querySelector('h5');
var btn = document.querySelector('button'); // Access the first element in the collection
var num = 0;

btn.addEventListener("click", function() {
  if (num == 0) {
    console.log("remove");
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "red";
    line.innerHTML = "Friend"
    line.style.color="green"
    num = 1;
  } else {
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "green";
    line.innerHTML = "Stranger"
    line.style.color="red"
    num = 0;
  }
});
