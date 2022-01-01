'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.svg}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const renderCountry = function (data, className = '') {
//   const html = `<article class="country ${className}">
//   <img class="country__img" src="${data.flags.svg}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name.common}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
//   </div>
// </article>`;
//  countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country (2)
//     const
//  [neighbour] = data.borders;

//     if(!neighbour) return;

//       // AJAX call country 2
//   const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//   request2.send();

//   request2.addEventListener('load', function () {
//     const [data2] = JSON.parse(this.responseText);
//     renderCountry(data2, 'neighbour');
//   })

//   });
// };

// getCountryAndNeighbour('portugal');
// // getCountryData('usa');
// // getCountryData('ukraine');

//////////////////////////////////////////////

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   getJSON(
//     `https://restcountries.com/v3.1/name/${country}`,
//     'Country not found!'
//   )
//     // fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //   .then(response => {
//     //     console.log(response);
//     //     if (!response.ok)
//     //       throw new Error(`Country not found (${response.status})`);
//     //     return response.json();
//     //   })

//     .then(data => {
//       console.log(data[0].borders[0]);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       console.log(neighbour);

//       if (!neighbour) throw new Error('No neighbour found!');

//       // Country 2
//       // return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Neighbour country not found!'
//       );
//     });

//   // .then(data => renderCountry(data[0], 'neighbour'))
//   // .catch(err => {
//   //   console.error(`${err} ?????? !!!`);
//   //   renderError(`Something went wrong!!! ${err}. Try again!`);
//   // })
//   // .finally(() => {
//   //   countriesContainer.style.opacity = 1;
//   // });
// };

// btn.addEventListener('click', () => {
//   // getCountryData('portugal');
//   getCountryData('australia');
// });

// // getCountryData('porrfertureerferfal');

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message} 💥`));
// };
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// Second API dosn't work for a moment of my course learning. So I decided to just watch a videos and have practice another time. I'm tired anough last days to writing code.

////////////////////////////////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening...')
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win!');
//     } else {
//       reject( new Error('You lost your money!'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(2).then(() => {
//   console.log('I waited for two seconds')
//   return wait(1);
// }).then(() => {
//   console.log('I waited for 1 second')
// })

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

/////////////////////////////////////////////////////////////////////////

// const getPosition = function() {
//   return new Promise(function(resolve, reject) {
// //     navigator.geolocation.getCurrentPosition(
// //   possition => resolve(possition),
// //   err => reject(err)
// // );
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   })
// }

// getPosition().then(pos => console.log(pos));

// const blabla = (imgPath) => {
//   return new Promise(function(resolve, rejsect) {
//     countriesContainer.style.opacity = 1;
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', () => {
//       countriesContainer.append(img);
//       resolve(img);
//     })

//     img.addEventListener('error', () => {
//       rejsect(new Error('Image not found!'))
//     })

//   })
// }

// let currentImg;

// blabla("./img/img-1.jpg").then(img => {

//   console.log('Img 1 was loaded');
//   return wait(2)
// })
// .then(() => {
//   countriesContainer.style.opacity = 0;
// })
// .then(() => {return wait(2)})
// .then(() => {
//   return blabla("./img/img-2.jpg")
// })
// .then(() => {

//   console.log('Img 2 was loaded');
//   return wait(2)
// }).then(() => {
//   countriesContainer.style.opacity = 0;
// })
// .then(() => {return wait(2)})
// .then(() => {
//   return blabla("./img/img-3.jpg")
// })
// .then(() => console.log('Img 3 was loaded'))
// .catch(err => console.error(err))

// const whereAmI = async function (country) {
//   const data = await fetch(`https://restcountries.com/v3.1/name/portugal`);
//   console.log(data.json());

//   // The same result as:

//   fetch(`https://restcountries.com/v3.1/name/portugal`).then(data =>
//     console.log(data.json())
//   );
// };

// whereAmI();

// Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/portugal`),
//     getJSON(`https://restcountries.com/v3.1/name/ukraine`),
//     getJSON(`https://restcountries.com/v3.1/name/poland`),
//   ]);
//   console.log(res[0])
// })();

const timeout = function (sec) {
  return new Promise(function (_, rejsect) {
    setTimeout(() => {
      rejsect(new Error('request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/portugal`),
  timeout(0.3),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSettled

const promiseAwait = async () => {
  return Promise.all([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
  ]);
};

promiseAwait().then(res => {console.log(res)
// res.map((el) => {
//   if (el.status === 'rejected') {
//     console.log(el)
//   }
// })
}).catch((err) => console.error(`uuuuuuuuuu ${err}`))

// Promise.any

const promiseAwait2 = async () => {
  return Promise.any([
    Promise.resolve('Success'),
    Promise.reject('ERROR'),
    Promise.resolve('Another success'),
  ]);
};

promiseAwait2().then(res => console.log(res));
