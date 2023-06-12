let images = [
  {
      url: 'sg1.webp',
      description: 'iWishKart Tempered Glass Guard for MOTOROLA Edge 30, MOTOROLA Moto G73 /',
      price: 199,
      wishlist: true,
      htmlPage: 'awatc1.html'
    },
    {
      url: 'case1.webp',
      description: 'CEDO XPRO Back Cover for Samsung M52 5G  (Black, Dual Protection, Pack of: 1)',
      price: 229,
      wishlist: true,
      htmlPage: 'awatc2.html'
    },
    {
      url: 'pb4.webp',
      description: 'PoMiFi 20000 mAh Power Bank  (Black, Lithium-ion)',
      price: 699,
      wishlist: true,
      htmlPage: 'awatc3.html'
    },
    {
      url: 'sg4.webp',
      description: 'Ten To 11 Front and Back Tempered Glass for ViVO Y100 5G, ViVO Y100 5G [With Rear Camera Lens Guard], ViVO Y100A/ViVO T2 5G  (Pack of 3)',
      price: 249,
      wishlist: true,
      htmlPage: 'awatc4.html'
    },
    {
      url: 'ep9.webp',
      description: 'Boult Audio X45 with Quad Mic ENC, 40H Playtime, 45ms Ultra Low Latency, Made In India, 5.3 Bluetooth Headset  (Green, True Wireless)',
      price: 1299,
      wishlist: true,
      htmlPage: 'awatc5.html'
    },
    {
      url: 'ch11.webp',
      description: 'Portronics 18 W NA 3 A Mobile POR-1104 ADAPTO ONE Charger with Detachable Cable  (White, Cable Included)',
      price: 249,
      wishlist:true, 
      cart:false,
      htmlPage: 'awatc6.html'
    },
    {
      url: 'pb8.webp',
      description: 'Ambrane 20000 mAh Power Bank (20 W, Power Delivery 3.0, Quick Charge 3.0)  (Black, Lithium Polymer)',
      price: 1799,
      wishlist: true, 
      cart:false,
      htmlPage: 'awatc7.html'
    },
    {
      url: 'case5.webp',
      description: 'Micvir Back Cover for OnePlus Nord 2T 5G  (Transparent, Black, Camera Bump Protector, Pack of: 1)',
      price: 499,
      wishlist: true, 
      cart:false,
      htmlPage: 'awatc8.html'
    },
    {
      url: 'ep12.webp',
      description: 'Number Super Buds Pro GT9 ENC Gaming TWS Bluetooth Headset  (Commando Black, True Wireless)',
      price: 699,
      wishlist: true, 
      cart:false,
      htmlPage: 'awatc9.html'
    },
    {
      url: 'sg7.webp',
      description: 'Desirtech Edge To Edge Tempered Glass for Infinix HOT 12 Play  (Pack of 1)',
      price: 169,
      wishlist: true, 
      cart:false,
      htmlPage: 'awatc10.html'
    },
    {
      url: 'ep5.webp',
      description: 'FINGER THREE Premium M19 tws bluetooth 5.0 wireless Digital Display 13mm Drivers F2 Bluetooth Headset  (Black, True Wireless)',
      price: 999,
      wishlist: true, 
      cart:false,
      htmlPage: 'awatc11.html'
    },
    {
      url: 'pb1.webp',
      description: 'Mi 3i 20000 mAh Power Bank (Fast Charging, 18W)  (Black, Lithium Polymer)',
      price: 2049,
      wishlist: true, 
      cart:false,
      htmlPage: 'awatc12.html'
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