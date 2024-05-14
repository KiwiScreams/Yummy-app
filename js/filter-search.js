let products = {
  data: [
    {
      productName: 'cheeseburger',
      image: "img/image 1.svg",
      description: "Wendy's Burger",
      value: '4.6',
      price: '5.00',
      category: 'burger'
    },
    {
      productName: 'hamburger',
      image: "img/image 2.svg",
      description: "Fried Chicken Burger",
      value: '4.8',
      price: '11.00',
      category: 'burger'
    },
    {
      productName: 'hamburger',
      image: "img/image 3.svg",
      description: "Chiken Burger",
      value: '4.2',
      price: '6.72',
      category: 'burger'
    },
    {
      productName: 'hamburger',
      image: "img/image 4.svg",
      description: "Veggie Burger",
      value: '4.7',
      price: '5.99',
      category: 'burger'
    },
    {
      productName: 'Mandarin JJ',
      image: "img/img-1.jpeg",
      description: "Juice with mandarin",
      value: '5.0',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Pineapple JJ',
      image: "img/img-2.png",
      description: "Juice with pineapple",
      value: '4.0',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Fruit JJ',
      image: "img/img-3.png",
      description: "Fruit juice with summer flavor",
      value: '3.0',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Grape JJ',
      image: "img/img-4.png",
      description: "Juice with grape",
      value: '2.0',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Orange JJ',
      image: "img/img-5.png",
      description: "Juice with orange",
      value: '4.9',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Lemon JJ',
      image: "img/img-6.png",
      description: "Juice with lemon",
      value: '4.5',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Watermelon JJ',
      image: "img/img-7.png",
      description: "Juice with watermelon",
      value: '4.2',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Tomato JJ',
      image: "img/img-8.png",
      description: "Juice with tomato",
      value: '4.0',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Strawberry JJ',
      image: "img/img-9.png",
      description: "Juice with strawberry",
      value: '3.5',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Peach JJ',
      image: "img/img-10.png",
      description: "Juice with peach",
      value: '5.0',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Melon JJ',
      image: "img/img-11.png",
      description: "Juice with melon",
      value: '4.3',
      price: '2.00',
      category: 'juice'
    },
    {
      productName: 'Alcoholic cocktail',
      image: "img/cup7.jpg",
      description: "Juice with melon",
      value: '4.3',
      price: '2.00',
      category: 'alcohol'
    },
  ],
};
for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  let container = document.createElement("div");
  container.classList.add("container");
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  let desc = document.createElement("p");
  desc.classList.add("product-description");
  desc.innerText = i.description.toUpperCase();
  container.appendChild(desc);
  let val = document.createElement("h3");
  val.classList.add("product-value");
  val.innerText = i.value.toUpperCase();
  container.appendChild(val);
  let price = document.createElement("h6");
  price.innerText = i.price + "$";
  price.classList.add("product-price");
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
  let star = document.createElement('i');
  star.className = "fa-solid fa-star";
  container.appendChild(star);
  let orderBtn = document.createElement('button');
  orderBtn.textContent = 'Order Now!';
  orderBtn.classList.add("order-btn");
  orderBtn.onclick = function () {
    window.location.href = 'detail.html';
  };
  container.appendChild(orderBtn);
  let icon = document.createElement('i');
  icon.className = "fa-solid fa-heart heart";
  container.appendChild(icon);
  let arrowdown = document.createElement('i');
  arrowdown.className = "fa-solid fa-arrow-down";
  orderBtn.appendChild(arrowdown);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("Active");
    } else {
      button.classList.remove("Active");
    }
  });
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});
window.onload = () => {
  filterProduct("all");
};