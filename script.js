// Solves problem #1: Select the section with an id of container without using querySelector.
document.getElementById("container");

// Solves problem #2: Select the section with an id of container using querySelector.
document.querySelector("#container");

// Solves problem #3: Select all of the list items with a class of "second".
const secondListEl = document.querySelectorAll("li.second");

// Solves problem #4: Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector("ol .third");

// Solves problem #5: Give the section with an id of container the text "Hello!".
document.querySelector("#container").textContent = ("Hello");

// Solves problem #6: Add the class main to the div with a class of footer.
const footerDiv = document.querySelector(".footer");
footerDiv.classList.add("main");

// Solves problem #7: Remove the class main on the div with a class of footer.
footerDiv.classList.remove("main"); // leverage footer div variable created in solution to problem #6

// Solves problem #8: Create a new li element.
const newListEl = document.createElement("li");

// Solves problem #9:  Give the li the text "four".
const fourText = document.createTextNode("four");
newListEl.appendChild(fourText); // leverage text variable from solution to problem #8

// Solves problem #10: Append the li to the ul element.
document.querySelector("ul").append(newListEl); // leverage newListEl element variable created in solution to problem #8

// Solves problem #12: Loop over all of the lis inside the ol tag and give them a background color of "green".
const orderedListEl = document.querySelectorAll("ol > li");
orderedListEl.forEach((element) => {
  element.style.backgroundColor = "green";
});

// Solves problem #13: Remove the div with a class of footer.
footerDiv.remove() // leverage footerDiv variable created in solution to problem #6
