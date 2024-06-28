// 1. Document Manipulation with JavaScript

let products = [
  {
    name: "Laptop",
    price: 909.99,
    description: "Powerful computing on the go",
  },
  {
    name: "Smartphone",
    price: 789.99,
    description: "Stay connected wherever you are",
  },
  {
    name: "Headphones",
    price: 349.99,
    description: "Immersive audio experience",
  },
];

function displayProducts() {
  let productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = ""; // Clear existing content

  products.forEach((product) => {
    let productDiv = document.createElement("div");
    productDiv.className = "product";

    productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;

    productContainer.appendChild(productDiv);
  });
}

window.onload = function () {
  displayProducts();
};

// 2. Form Manipulation with JavaScript

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let user = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    console.log(user);
  });

// 3. Styling with JavaScript

function changeColor() {
  let box = document.getElementById("box");
  box.style.backgroundColor =
    box.style.backgroundColor === "blue" ? "red" : "blue";
}

function changeTextStyle() {
  let header = document.getElementById("header");
  header.style.fontStyle = "italic";
  header.style.color = "yellow";
}

document.getElementById("paragraph").addEventListener("mouseover", function () {
  this.style.color = "pink";
});

document.getElementById("paragraph").addEventListener("mouseout", function () {
  this.style.color = "black";
});

function toggleVisibility() {
  let toggleBox = document.getElementById("toggleBox");
  toggleBox.style.display =
    toggleBox.style.display === "none" ? "block" : "none";
}
