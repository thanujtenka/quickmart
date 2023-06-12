let images = [
    {
        url: 'case1.webp',
        description: 'CEDO XPRO Back Cover for Samsung M52 5G  (Black, Dual Protection, Pack of: 1)',
        price: 229,
        wishlist: false,
        htmlPage: 'thanuj1.html'
      },
      {
        url: 'case2.webp',
        description: ' KARWAN Back Cover for Apple iPhone 11 Pro  (Purple, Shock Proof, Silicon, Pack of: 1)',
        price: 389,
        wishlist: false,
        htmlPage: 'thanuj2.html'
      },
      {
        url: 'case3.webp',
        description: 'KWINE CASE Back Cover for Vivo Y56 5G  (Black, Shock Proof, Pack of: 1)',
        price: 249,
        wishlist: false,
        htmlPage: 'thanuj3.html'
      },
      {
        url: 'case4.webp',
        description: 'KWINE CASE Back Cover for Realme 10 Pro 5G  (Black, Shock Proof, Pack of: 1)',
        price: 299,
        wishlist: false,
        htmlPage: 'thanuj4.html'
      },
      {
        url: 'case5.webp',
        description: 'Micvir Back Cover for OnePlus Nord 2T 5G  (Transparent, Black, Camera Bump Protector, Pack of: 1)',
        price: 499,
        wishlist: false,
        htmlPage: 'thanuj5.html'
      },
      {
        url: 'case6.webp',
        description: ' KWINE CASE Back Cover for Vivo V27  (Red, Shock Proof, Pack of: 1)',
        price: 299,
        wishlist: false,
        htmlPage: 'thanuj6.html'
      },
      {
        url: 'case7.webp',
        description: 'Zapcase Back Cover for Mi Redmi Note 8  (Black, Grip Case, Pack of: 1)',
        price: 225,
        wishlist: false,
        htmlPage: 'thanuj7.html'
      },
      {
        url: 'case8.webp',
        description: 'KartV Back Cover for Infinix Hot 10  (Black, Gold, Camera Bump Protector, Silicon, Pack of: 1)',
        price: 249,
        wishlist: false,
        htmlPage: 'thanuj8.html'
      },
      {
        url: 'case9.webp',
        description: 'KARWAN Back Cover for OPPO-A17  (Blue, Shock Proof, Silicon, Pack of: 1)',
        price: 399,
        wishlist: false,
        htmlPage: 'thanuj9.html'
      },
      {
        url: 'case10.webp',
        description: 'Flipkart SmartBuy Back Cover for OnePlus Nord 2T 5G  (Transparent, Silicon)',
        price: 229,
        wishlist: false,
        htmlPage: 'thanuj10.html'
      },
      {
        url: 'case11.webp',
        description: 'Enflamo Back Cover for Apple iPhone 13  (Blue, Flexible, Silicon, Pack of: 1)',
        price: 339,
        wishlist: false,
        htmlPage: 'thanuj11.html'
      },
      {
        url: 'case12.webp',
        description: 'Cover Alive Back Cover for Redmi 10, Redmi 10 Power  (Black, Shock Proof, Pack of: 1)',
        price: 499,
        wishlist: false,
        htmlPage: 'thanuj12.html'
      }
  ];
  
  shuffleArray(images);
  
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    createImageHTML(image);
  }
  
  document.getElementById('sort-asc-button').addEventListener('click', sortImagesAscending);
  document.getElementById('sort-desc-button').addEventListener('click', sortImagesDescending);
  document.getElementById('wishlist-first-button').addEventListener('click', showWishlistedItemsFirst);
  
  function createImageHTML(image) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-item');
  
    const linkElement = document.createElement('a');
    linkElement.href = image.htmlPage; // Redirect to the respective HTML page
  
    const imgElement = document.createElement('img');
    imgElement.src = image.url;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = image.description;
  
    const wishlistElement = document.createElement('button');
    wishlistElement.classList.add('wishlist', image.wishlist ? 'filled' : 'empty');
    wishlistElement.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleWishlist(image, wishlistElement);
    });
  
    const priceElement = document.createElement('p');
    priceElement.classList.add('price-tag');
    priceElement.textContent = `${convertToIndianRupees(image.price)}`;
  
    linkElement.appendChild(imgElement);
    linkElement.appendChild(descriptionElement);
    linkElement.appendChild(priceElement);
  
    imageContainer.appendChild(linkElement);
    imageContainer.appendChild(wishlistElement);
    document.getElementById('image-container').appendChild(imageContainer);
  }
  
  function toggleWishlist(image, wishlistElement) {
    image.wishlist = !image.wishlist;
    wishlistElement.classList.toggle('empty');
    wishlistElement.classList.toggle('filled');
  }
  
  function convertToIndianRupees(price) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function sortImagesAscending() {
    images.sort((a, b) => a.price - b.price);
    refreshImageContainer();
  }
  
  function sortImagesDescending() {
    images.sort((a, b) => b.price - a.price);
    refreshImageContainer();
  }
  
  function showWishlistedItemsFirst() {
    images.sort((a, b) => {
      if (a.wishlist && !b.wishlist) {
        return -1; // a comes before b
      } else if (!a.wishlist && b.wishlist) {
        return 1; // b comes before a
      } else {
        return 0; // maintain the original order
      }
    });
    refreshImageContainer();
  }
  
  function refreshImageContainer() {
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear the existing images
  
    for (let i = 0; i < images.length; i++) {
      const image = images[i];
      createImageHTML(image);
    } 
  } 
  