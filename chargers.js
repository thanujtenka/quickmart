let images = [
    {
        url: 'ch1.webp',
        description: 'SAMSUNG Original 25W, Type C Power Adaptor compatible for all Samsung Devices (Super Fast Charge 3.0) (White)',
        price: 999,
        wishlist: false,
        htmlPage: 'awatch1.html'
      },
      {
        url: 'ch2.webp',
        description: 'Tiagun 33 W SuperVOOC 4 A Mobile DART/FLASH/WRAP With Type C Cable, T25K Fast Charging FOR ALL MOBILE Charger with Detachable Cable  ',
        price: 399,
        wishlist: false,
        htmlPage: 'awatch2.html'
      },
      {
        url: 'ch3.webp',
        description: 'Mi 22.5W Quick Charger combo for Mi,Redmi,Xiomi devices (Type C- Cable Included)  (White, Cable Included)',
        price: 999,
        wishlist: false,
        htmlPage: 'awatch3.html'
      },
      {
        url: 'ch4.webp',
        description: 'Mi 18W Quick Charger for Mi,Redmi,Xiomi devices  (Black)',
        price: 699,
        wishlist: false,
        htmlPage: 'awatch4.html'
      },
      {
        url: 'ch5.webp',
        description: 'boAt 18W Power WCD QC3A Charger combo (Type C - Cable Included)  (White, Cable Included)',
        price: 799,
        wishlist: false,
        htmlPage: 'awatch1.html'
      },
      {
        url: 'ch6.webp',
        description: 'RoarX 20 W PD 3 A Mobile Type C to Lightning Original PD adapter for i-Phone 11/12/13/14 Pro Fast Charger  (White)',
        price: 491,
        wishlist: false,
        htmlPage: 'awatch2.html'
      },
      {
        url: 'ch7.webp',
        description: 'Flipkart SmartBuy 18 W Quick Charge Mobile FC18GS01, Suitable For Realme, Mi, OPPO, VIVO,',
        price: 449,
        wishlist: false,
        htmlPage: 'awatch3.html'
      },
      {
        url: 'ch8.webp',
        description: 'MIFKRT 27 W Qualcomm 3.0 9 A Mobile 27W Superfast Charging Adapter (QC 3.0) ',
        price: 699,
        wishlist: false,
        htmlPage: 'awatch4.html'
      },
      {
        url: 'ch9.webp',
        description: 'Jazx 67 W Quick Charge 3 A Mobile 67W Turbo SuperFast Charger For Xiaomi Note 9 Pro,Note,Note10,10Pro,10Lite,11i Charger  (White)',
        price: 799,
        wishlist: false,
        htmlPage: 'awatch1.html'
      },
      {
        url: 'ch10.webp',
        description: ' Mi 22.5W Quick Charger combo for Mi,Redmi,Xiomi devices (Type C- Cable Included)  (White, Cable Included)',
        price: 899,
        wishlist: false,
        htmlPage: 'awatch2.html'
      },
      {
        url: 'ch11.webp',
        description: 'Portronics 18 W NA 3 A Mobile POR-1104 ADAPTO ONE Charger with Detachable Cable  (White, Cable Included)',
        price: 249,
        wishlist: false,
        htmlPage: 'awatch3.html'
      },
      {
        url: 'ch12.webp',
        description: 'DUDAO 20 W Qualcomm 3.0 3 A Multiport Mobile Fast Charging PD (Type-C) 20W QC 3.0 Mobile Charging Adapter with Dual Port Charger  (White)',
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