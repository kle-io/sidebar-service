const fs = require('fs');
const path = require('path');
const axios = require('axios');

const users = [
  {
    username: 'Justine_Kuhlman95',
    fullName: 'Claude Heidenreich',
    followers: 458900,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/baliomega/128.jpg',
    location: 'Karinamouth, RI',
  },
  {
    username: 'Sid69',
    fullName: 'Loyce Runolfsdottir',
    followers: 2879,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kazaky999/128.jpg',
    location: 'Schmittborough, NM',
  },
  {
    username: 'Lavern.Schultz',
    fullName: 'Rose Morar',
    followers: 819,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/j2deme/128.jpg',
    location: 'West Alba, IA',
  },
  {
    username: 'Peggie_Lakin95',
    fullName: 'Renee Kulas',
    followers: 8059,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/gauravjassal/128.jpg',
    location: 'Carachester, OK',
  },
  {
    username: 'Grayson.Baumbach47',
    fullName: 'Matilde Kunde',
    followers: 3,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/petar_prog/128.jpg',
    location: 'Mosciskistad, IL',
  },
  {
    username: 'Mariano81',
    fullName: 'Reymundo Hammes',
    followers: 15,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/yalozhkin/128.jpg',
    location: 'South Deonbury, KS',
  },
  {
    username: 'Asia81',
    fullName: 'Joshua Will',
    followers: 5951,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rtgibbons/128.jpg',
    location: 'Terryland, MN',
  },
  {
    username: 'Nova_Vandervort57',
    fullName: 'Lucio Ankunding',
    followers: 340430,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg',
    location: 'Brennanview, NE',
  },
  {
    username: 'Liliana_Paucek85',
    fullName: 'Arielle Jast',
    followers: 12072,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andreas_pr/128.jpg',
    location: 'Mohrtown, FL',
  },
  {
    username: 'Geovanny6',
    fullName: 'Elmore Keeling',
    followers: 39704,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/llun/128.jpg',
    location: 'New Cecilia, AK',
  },
  {
    username: 'Alisa85',
    fullName: 'Emmet Romaguera',
    followers: 58260,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg',
    location: 'New Betty, CA',
  },
  {
    username: 'Quentin_Paucek29',
    fullName: 'Heloise Legros',
    followers: 6,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/iamglimy/128.jpg',
    location: 'Deckowbury, NE',
  },
  {
    username: 'Lorenz83',
    fullName: 'Demarcus Powlowski DDS',
    followers: 29100,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/jacksonlatka/128.jpg',
    location: 'Adolfshire, FL',
  },
  {
    username: 'Vicky90',
    fullName: 'Lupe Emard',
    followers: 62,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/bryan_topham/128.jpg',
    location: 'West Gregoryburgh, CA',
  },
  {
    username: 'Marisol.Moore4',
    fullName: 'Fermin Bartell',
    followers: 71243,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/_pedropinho/128.jpg',
    location: 'New Toneystad, NV',
  },
  {
    username: 'Kiel_Batz',
    fullName: 'Royal Schimmel',
    followers: 1374,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg',
    location: 'New Samarabury, FL',
  },
  {
    username: 'Lou.Johnson',
    fullName: 'Frederic Dooley',
    followers: 34601,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/melvindidit/128.jpg',
    location: 'Fletaport, MD',
  },
  {
    username: 'Estel.Ortiz84',
    fullName: 'Dennis Rogahn',
    followers: 9620,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stushona/128.jpg',
    location: 'Ryderland, AK',
  },
  {
    username: 'Lina41',
    fullName: 'Shayna Schimmel',
    followers: 304,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/mekal/128.jpg',
    location: 'West Nikita, IA',
  },
  {
    username: 'Ilene_Monahan',
    fullName: 'Caleigh Rippin',
    followers: 3185,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/maiklam/128.jpg',
    location: 'Riceland, VA',
  },
  {
    username: 'German38',
    fullName: "Trenton O'Reilly",
    followers: 705,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg',
    location: 'Runolfsdottirberg, VA',
  },
  {
    username: 'Korbin_Padberg1',
    fullName: 'Callie Wintheiser',
    followers: 7975,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/happypeter1983/128.jpg',
    location: 'Stephentown, NE',
  },
  {
    username: 'Trace_Considine',
    fullName: 'Dr. Gabe Hand',
    followers: 12029,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ademilter/128.jpg',
    location: 'Pouroston, AR',
  },
  {
    username: 'Francesco.Howell77',
    fullName: 'Frederic Abbott',
    followers: 7889,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gregsqueeb/128.jpg',
    location: 'East Bonniestad, AK',
  },
  {
    username: 'Shanie_Murazik8',
    fullName: 'Naomie Cassin',
    followers: 2710,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/chrisvanderkooi/128.jpg',
    location: 'Coleport, FL',
  },
  {
    username: 'Janae.Reynolds',
    fullName: 'William Berge',
    followers: 290,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/el_fuertisimo/128.jpg',
    location: 'Satterfieldview, OR',
  },
  {
    username: 'Rose.Monahan',
    fullName: 'Ms. Greg Blick',
    followers: 1881,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_garcia/128.jpg',
    location: 'Quentinland, ND',
  },
  {
    username: 'Sandrine98',
    fullName: 'Miss Roscoe Schmitt',
    followers: 56837,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/j2deme/128.jpg',
    location: 'North Antonette, IN',
  },
  {
    username: 'Deja37',
    fullName: 'Yoshiko Schultz',
    followers: 4679,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gregkilian/128.jpg',
    location: 'New Layne, TN',
  },
  {
    username: 'Everette_Kreiger28',
    fullName: 'Mr. Haylie Grant',
    followers: 83,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/sydlawrence/128.jpg',
    location: 'South Antonio, LA',
  },
  {
    username: 'Curtis25',
    fullName: 'Emma Kemmer',
    followers: 606,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/johnsmithagency/128.jpg',
    location: 'New Clovis, KS',
  },
  {
    username: 'Isabell.OConnell',
    fullName: 'Dandre Towne',
    followers: 35639,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/teylorfeliz/128.jpg',
    location: 'New Allie, MA',
  },
  {
    username: 'Kelly16',
    fullName: 'Tom Cassin',
    followers: 23701,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bowbrick/128.jpg',
    location: 'Janmouth, CA',
  },
  {
    username: 'Cielo40',
    fullName: 'Elouise Jerde DDS',
    followers: 8570,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/kanickairaj/128.jpg',
    location: 'South Janaport, CO',
  },
  {
    username: 'Vida.Swaniawski98',
    fullName: 'Verner Emmerich',
    followers: 563,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stan/128.jpg',
    location: 'Gloverfurt, PA',
  },
  {
    username: 'Michelle_Herman12',
    fullName: 'Vicky Cormier',
    followers: 8337,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rahmeen/128.jpg',
    location: 'New Josianemouth, CT',
  },
  {
    username: 'Bruce.Auer',
    fullName: 'Tobin Schmeler',
    followers: 107780,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/layerssss/128.jpg',
    location: 'West Jean, AL',
  },
  {
    username: 'Mariam72',
    fullName: 'Ms. Myriam Waelchi',
    followers: 3530,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/meln1ks/128.jpg',
    location: 'South Edisonborough, NE',
  },
  {
    username: 'Leann_Denesik',
    fullName: 'Hortense Haag',
    followers: 667340,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/martinansty/128.jpg',
    location: 'Mariamfort, IL',
  },
  {
    username: 'Darby_Waters40',
    fullName: 'Mrs. Charlotte Effertz',
    followers: 2764,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/sachingawas/128.jpg',
    location: 'East Alexzander, NC',
  },
  {
    username: 'Finn.McClure',
    fullName: 'Ashly Conroy',
    followers: 3063,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/marshallchen_/128.jpg',
    location: 'Port Helenaport, CA',
  },
  {
    username: 'Eldridge81',
    fullName: 'Miss Amber Kunde',
    followers: 67579,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg',
    location: 'East Morgan, GA',
  },
  {
    username: 'Vena_Aufderhar64',
    fullName: 'Elna Cronin',
    followers: 5,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vc27/128.jpg',
    location: 'North Ervin, MD',
  },
  {
    username: 'Kevon10',
    fullName: 'Stewart Lindgren',
    followers: 1987,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/hugomano/128.jpg',
    location: 'Jaclynfort, AK',
  },
  {
    username: 'Matilda.Kuhic',
    fullName: 'Izabella Emmerich',
    followers: 38,
    followed: true,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/sunshinedgirl/128.jpg',
    location: 'North Bennietown, CT',
  },
  {
    username: 'Alexys1',
    fullName: 'Alfred Erdman',
    followers: 5773,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/benjamin_knight/128.jpg',
    location: 'Hudsonside, OH',
  },
  {
    username: 'Shannon_Satterfield7',
    fullName: 'Simone Gaylord',
    followers: 406,
    followed: true,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/abelcabans/128.jpg',
    location: 'New Nealton, MS',
  },
  {
    username: 'Lily37',
    fullName: 'Sammie Langworth',
    followers: 473,
    followed: false,
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ddggccaa/128.jpg',
    location: 'Nicolasland, SC',
  },
  {
    username: 'Pamela_Schiller35',
    fullName: 'Torrance Corwin',
    followers: 8884,
    followed: true,
    avatar:
      'https://s3-us-west-1.amazonaws.com/kleio.sidebar/icons/blue-linear-gradient-purple-151x151.png',
    location: 'Osinskifort, CT',
  },
  {
    username: 'Janis84',
    fullName: 'Maxime Goyette',
    followers: 93,
    followed: false,
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/kijanmaharjan/128.jpg',
    location: 'West Yessenia, DE',
  },
];

const { UIFACES_KEY } = process.env;
let calls = 3;
function fetchPhotos(limit = 30) {
  return axios
    .get(`https://uifaces.co/api?limit=${!calls ? 10 : limit}`, {
      headers: {
        'X-API-KEY': UIFACES_KEY,
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      },
      transformResponse: [
        (data) => JSON.parse(data).map(({ photo, name: fullName }) => ({
          photo,
          fullName,
        })),
      ],
    })
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      calls -= 1;
    });
}

Promise.all(Array(4).fill(fetchPhotos())).then((results) => {
  const photos = results.flat();
  users.forEach((user, i) => {
    users[i].fullName = photos[i].fullName;
    users[i].avatar = photos[i].photo;
  });

  fs.writeFile(path.join(__dirname, 'newusers.js'), JSON.stringify(users), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
});
