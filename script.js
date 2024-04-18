// store the watches in the array
const watches = [
    // fossil
    {
        imageURL: "Images/fossil/minimalist.png", 
        name: "Minimalist Black Leather Watch",
        category: "Men",
        brand: "Fossil", 
        price: 179
    },
    {
        imageURL: "Images/fossil/copeland.png",
        name: "Copeland 42 mm Three-Hand Brown Leather Watch",
        category: "Men",
        brand: "Fossil",
        price: 199,
    },
    {
        imageURL: "Images/fossil/carlie.png",
        name: "Carlie Mini Three-Hand Black Leather Watch",
        category: "Woman",
        brand: "Fossil",
        price: 139
    },
    {
        imageURL: "Images/fossil/raquel.png",
        name: "Raquel Three-Hand Date Black Leather Watch",
        category:"Women",
        brand: "Fossil",
        price: 200
    },

    // michael k
    {
        imageURL: "Images/michaelK/hutton.png",
        name: "Hutton Stainless Steel Case & Leather Strap Chronograph Watch",
        category:"Men",
        brand: "Michael Kors",
        price:200
    },
    {
        imageURL: "Images/michaelK/lennox.png",
        name: "Lennox Chronograph Stainless Steel Watch",
        category:"Men",
        brand: "Michael Kors",
        price:250
    },
    {
        imageURL: "Images/michaelK/emery.png",
        name: "Emery Brown Empire Jacquard Watch",
        category:"Women",
        brand: "Michael Kors",
        price:190
    },
    {
        imageURL: "Images/michaelK/pyper.png",
        name: "Pyper Stainless Steel & Leather Strap Watch",
        category:"Women",
        brand: "Michael Kors",
        price:190
    },
    
    //swatch
    {
        imageURL: "Images/swatch/goldenTac.png",
        name: "GOLDEN TAC",
        category:"Men",
        brand: "Swatch",
        price: 95
    },
    {
        imageURL: "Images/swatch/blueRebel.png",
        name: "BLUE REBEL",
        category:"Men",
        brand: "Swatch",
        price: 110
    },
    {
        imageURL: "Images/swatch/roseRebel.png",
        name: "ROSE REBEL",
        category:"Women",
        brand: "Swatch",
        price: 110
    },
    {
        imageURL: "Images/swatch/ladyBlack.png",
        name: "LADY BLACK",
        category:"Women",
        brand: "Swatch",
        price: 95
    },

    // Tissot
    {
        imageURL: "Images/tissot/everytime.png",
        name: "TISSOT EVERYTIME 40MM",
        category:"Men",
        brand: "Tissot",
        price: 250
    }, 
    {
        imageURL: "Images/tissot/classicDream.png",
        name: "TISSOT CLASSIC DREAM",
        category:"Men",
        brand: "Tissot",
        price: 260
    }, 
    {
        imageURL: "Images/tissot/dreamLady.png",
        name: "TISSOT CLASSIC DREAM LADY",
        category:"Women",
        brand: "Tissot",
        price: 250
    },
    {
        imageURL: "Images/tissot/everytime30mm.png",
        name: "TISSOT EVERYTIME 30 mm",
        category:"Women",
        brand: "Tissot",
        price: 300
    },
    
]

function renderImages() {
    const container = document.getElementById("imageContainer");

    watches.forEach(image => {
      const card = document.createElement("div");
      card.classList.add("image-card");

      const imageElement = document.createElement("img");
      imageElement.src = image.imageURL;

      const brandElement = document.createElement("p");
      brandElement.textContent = `${image.brand}`;
      brandElement.classList.add("brand-name");

      const nameElement = document.createElement("p");
      nameElement.textContent = `${image.name}`;
      nameElement.classList.add("product-name");

      const priceElement = document.createElement("p");
      priceElement.textContent = `Price: $${image.price}`;
      priceElement.classList.add("product-price");

      card.appendChild(imageElement);
      card.appendChild(brandElement);
      card.appendChild(nameElement);
      card.appendChild(priceElement);

      container.appendChild(card);
    });
  }

  // Call the function to render images when the page loads
  window.onload = renderImages;

//login page
document.getElementById('loginButton').addEventListener('click', function(){
      
    document.getElementById('login-btn').style.display = 'none';
  
    window.location.href = 'index.html';
  
  });
  
//   login function
document.getElementById("loginButton").addEventListener("click", function (event) {
    var email = document.getElementById("EmailAddress").value;
    var password = document.getElementById("Password").value;
  
    console.log("EmailAddress", email);
  
    console.log("Password", password);
    if (email === "" || password === "" ) {
      console.log("Email or password is not entered")
      document.getElementById("errormessage").textContent = "Please enter email and password";
      event.preventDefault();
  
    }
    else  {
      console.log("yesss")
      document.getElementById("errormessage").textContent = "";
          window.location.href = "index.html"
    }
  });


  /**Script to get to the home page after clicking on the back to home button**/
document.getElementById("homeButton").addEventListener("click", function(){
    window.location.href ="index.html"; 
    });