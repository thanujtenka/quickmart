let images = [
    {
        url: 'ep1.webp',
        description: 'boAt Airdopes 131 with upto 60 Hours and ASAP Charge Bluetooth Headset  (Active Black, True Wireless)',
        price: 799,
        wishlist: false,
        htmlPage: 'awatch1.html'
      },
      {
        url: 'ep2.webp',
        description: ' PTron Bassbuds Joy TWS with 13mm Drivers, Stereo Calls, 32Hrs Playtime,Type-C Charging Bluetooth Headset  (Blue, True Wireless)',
        price: 699,
        wishlist: false,
        htmlPage: 'awatch2.html'
      },
      {
        url: 'ep3.webp',
        description: 'Boult Audio Z40 with Zen ENC Mic, 60H Battery Life, Low Latency Gaming, Made In India, 5.1 Bluetooth Headset  (Brown, In the Ear)',
        price: 999,
        wishlist: false,
        htmlPage: 'awatch3.html'
      },
      {
        url: 'ep4.webp',
        description: 'Noise Buds VS102 with 50 Hrs Playtime, 11mm Driver, IPX5 and Unique Flybird Design Bluetooth Headset  (Jet Black, True Wireless)',
        price: 699,
        wishlist: false,
        htmlPage: 'awatch4.html'
      },
      {
        url: 'ep5.webp',
        description: 'FINGER THREE Premium M19 tws bluetooth 5.0 wireless Digital Display 13mm Drivers F2 Bluetooth Headset  (Black, True Wireless)',
        price: 999,
        wishlist: false,
        htmlPage: 'awatch1.html'
      },
      {
        url: 'ep6.webp',
        description: ' Boult Audio AirBass Y1 TWS Earbuds, 40H Playtime, Fast Charging, Pro+ Calling, Type C, IPX5 Water Resistant, Bluetooth v5.1, Voice Assistant Bluetooth Headset  (White, True Wireless)',
        price: 999,
        wishlist: false,
        htmlPage: 'awatch2.html'
      },
      {
        url: 'ep7.webp',
        description: 'Mivi DuoPods M30 earbuds with 42 hours of playtime | Made in India | Deep Bass Bluetooth Headset  (Black, True Wireless)',
        price: 799,
        wishlist: false,
        htmlPage: 'awatch3.html'
      },
      {
        url: 'ep8.webp',
        description: 'boAt Airdopes 161 with ASAP Charge, 10mm Drivers and 40 Hours Playback Bluetooth Headset  (Pearl White, True Wireless)',
        price: 1199,
        wishlist: false,
        htmlPage: 'awatch4.html'
      },
      {
        url: 'ep9.webp',
        description: 'Boult Audio X45 with Quad Mic ENC, 40H Playtime, 45ms Ultra Low Latency, Made In India, 5.3 Bluetooth Headset  (Green, True Wireless)',
        price: 1299,
        wishlist: false,
        htmlPage: 'awatch1.html'
      },
      {
        url: 'ep10.webp',
        description: ' Mivi DuoPods M30 earbuds with 42 hours of playtime | Made in India | Deep Bass Bluetooth Headset  (Blue, True Wireless)',
        price: 999,
        wishlist: false,
        htmlPage: 'awatch2.html'
      },
      {
        url: 'ep11.webp',
        description: 'Mivi DuoPods M30 earbuds with 42 hours of playtime | Made in India | Deep Bass Bluetooth Headset  (Blue, True Wireless)',
        price: 1799,
        wishlist: false,
        htmlPage: 'awatch3.html'
      },
      {
        url: 'ep12.webp',
        description: 'Number Super Buds Pro GT9 ENC Gaming TWS Bluetooth Headset  (Commando Black, True Wireless)',
        price: 699,
        wishlist: false,
        htmlPage: 'awatch4.html'
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