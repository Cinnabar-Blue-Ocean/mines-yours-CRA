import {collection, addDoc} from 'firebase/firestore';
import {auth, db} from '../firebase/index.js';

export const generateUser = () => {
  let emails = ['rat@aries.com', 'ox@taurus.com', 'tiger@gemini.com', 'rabbit@cancer.com', 'dragon@leo.com', 'snake@virgo.com', 'horse@libra.com', 'sheep@scorpio.com', 'monkey@sagittarius.com', 'rooster@capricorn.com', 'dog@aquarius.com', 'pig@pisces.com'];
  let firstNames = ['Yuki', 'Haru', 'Kisa', 'Momiji', 'Hatori', 'Ayame', 'Rin', 'Hiro', 'Ritsu', 'Kureno', 'Shigure', 'Kagura'];
  let lastNames = ['Sohma', 'Honda', 'Hanajima', 'Uotani'];
  let usernames = ['Mu', 'Aldebaran', 'Kanon', 'Deathmask', 'Aioria', 'Shaka', 'Doku', 'Milo', 'Aiolos', 'Shura', 'Camus', 'Aphrodite'];
  let zipCodes = [35004, 99501, 85001, 71601, 90001, 16001, 19701, 32003, 30002, 96701, 83201, 60001, 46001, 50001, 66002, 40003, 70001, 13901, 20588, 11001, 48001, 55001, 38601, 63001, 59001, 68001, 88901, 13031, 17001, 87001, 10501, 27006, 58001, 43001, 73001, 97001, 15001, 12801, 29001, 57001, 37010, 73301, 84001, 15001, 20101, 98001, 24701, 53001, 82001];
  let bios = ['I am so awesome!', 'I am so depressed - sigh', 'I am suspicious... of everyone', '¿confused I so am?', '我没有意思', '¡Soy muy atractivo!'];
  let images = ['a', 'b', 'c', 'd', 'e'];
  let statuses = ['active', 'reported', 'exiled'];
  let ratings = [1, 2, 3, 4, 5];

  let randomValues = {};
  randomValues.email = emails[Math.floor(Math.random() * emails.length)];
  randomValues.first_name = firstNames[Math.floor(Math.random() * firstNames.length)];
  randomValues.last_name = lastNames[Math.floor(Math.random() * lastNames.length)];
  randomValues.username = usernames[Math.floor(Math.random() * usernames.length)];
  randomValues.zip_code = zipCodes[Math.floor(Math.random() * zipCodes.length)];
  randomValues.bio = bios[Math.floor(Math.random() * bios.length)];
  randomValues.profile_image = images[Math.floor(Math.random() * images.length)];
  randomValues.status = statuses[Math.floor(Math.random() * statuses.length)];
  randomValues.rating = ratings[Math.floor(Math.random() * ratings.length)];

  return randomValues;
};

export const generateListing = () => {
  let descriptions = ['This is an amazing life-changing product/service!', 'You cannot get this anywhere else', 'There is no need to feel suspicious... of this product/service', 'Have you ever asked yourself, why would I need this?', '那个很有意思', 'No hace falta describir este producto/servicio'];
  let names = ['dog-walking service', 'cat-bathing service', 'fish-sitting service', 'reptile-incubating service', 'bird-watching service', 'rake', 'mop', 'broom', 'car', 'bus', 'train', 'jet', 'boat', 'rocket', 'bicycle', 'unicycle', 'tricycle', 'Pandora\'s box'];
  let ownerIDs = [];
  let photos = ['Mu', 'Aldebaran', 'Kanon', 'Deathmask', 'Aioria', 'Shaka', 'Doku', 'Milo', 'Aiolos', 'Shura', 'Camus', 'Aphrodite'];
  let zipCodes = [35004, 99501, 85001, 71601, 90001, 16001, 19701, 32003, 30002, 96701, 83201, 60001, 46001, 50001, 66002, 40003, 70001, 13901, 20588, 11001, 48001, 55001, 38601, 63001, 59001, 68001, 88901, 13031, 17001, 87001, 10501, 27006, 58001, 43001, 73001, 97001, 15001, 12801, 29001, 57001, 37010, 73301, 84001, 15001, 20101, 98001, 24701, 53001, 82001];
  let statuses = ['a', 'b', 'c'];
  let types = ['permanent', 'loan'];
  let reviews = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let randomValues = {};
  randomValues.description = descriptions[Math.floor(Math.random() * descriptions.length)];
  randomValues.name = names[Math.floor(Math.random() * names.length)];
  randomValues.owner_id = ownerIDs[Math.floor(Math.random() * ownerIDs.length)];
  randomValues.photos = photos[Math.floor(Math.random() * photos.length)];
  randomValues.zip_code = zipCodes[Math.floor(Math.random() * zipCodes.length)];
  randomValues.status = statuses[Math.floor(Math.random() * statuses.length)];
  randomValues.type = types[Math.floor(Math.random() * types.length)];
  randomValues.reviews = reviews[Math.floor(Math.random() * reviews.length)];

  return randomValues;
};


export const createUser = async (email, first_name, last_name, username, zip_code, bio, profile_image, status, rating) => {
  const usersCollection = collection(db, 'users');
  return await addDoc(usersCollection, {
    email,
    first_name,
    last_name,
    username,
    zip_code,
    bio,
    profile_image,
    status,
    rating
  });
};

export const seedUsers = () => {
  let totalUsers = [];

  while (totalUsers.length < 50) {
    totalUsers.push(generateUser());
  }

  totalUsers.forEach(user => {
    createUser(user.email, user.first_name, user.last_name, user.username, user.zip_code, user.bio, user.profile_image, user.status, user.rating)
  });

  return totalUsers;
};