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
  let ownerIDs = ['iavP8ZPDhaeiS2dFl1IX', 'j0U99rRLIrAXQItwEsdX', 'kPTXw7OwTmjruvEMsIdE', 'l6upLJ43FKUVBP3jyjNv', 'mX6ZLpeI1KALgTqWxMbI', 'nNQshrV5jQPbCma22wCY', 'o85SfDAe6OVUKjLdyErr', 'pP8oG6buCTrqnOnZQ4xp', 'qCuXOn5lvMgK97MSxjPj', 'rwV5CsUns5T5LrzGOxqw', 'svHsna2xbm9ZyeUU22Qe', 'tlmkbuwpHbN5H6DqNTDD', 'uUyeb4CpDNVgOIABb3VE',
  'volCFAtPepxIKMiKZsjy', 'wEmPGMEmMr7Azq0WpvOT', 'xgeHOotn377ETyhROb5F',
  'y4Qa1efRXUcL0kxaDoOk', 'zcRalJkoCg7X00JX2n6r'];
  let photos = [['https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&w=1000&q=80'], ['https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200'], ['https://i.ytimg.com/vi/dip_8dmrcaU/maxresdefault.jpg'], ['https://media.cnn.com/api/v1/images/stellar/prod/210409025423-01-south-korea-kf-x-prototype-reveal-0409-restricted.jpg?q=w_3000,h_2000,x_0,y_0,c_fill'], ['https://www.bankrate.com/2017/07/20155935/sky-high-the-cost-of-a-private-jet.jpg?auto=webp&optimize=high&crop=16:9'], ['https://gardenseason.com/wp-content/uploads/2019/09/gardener-planting-flowers-gardening-skills-ss-featured.jpg'], ['https://aercmn.com/wp-content/uploads/2018/07/Untitled-design-2022-10-06T160244.294-1024x576.png'], ['https://thevillagevets.com/wp-content/uploads/2021/08/cat-bathing.jpg'], ['https://worldbirds.com/wp-content/uploads/2021/03/bw.jpg'], ['https://media.cntraveler.com/photos/633465b708c8c4ac97ede225/3:2/w_3000,h_2000,c_limit/four%20seasons%20yacht-sept22-pr4.jpg'], ['https://www.amtrak.com/content/dam/projects/dotcom/english/public/images/TextwithImage-Horizontal/acela-engine.jpg/_jcr_content/renditions/cq5dam.web.900.548.jpeg'], ['https://i.insider.com/5c9cdec26b52652435052114?width=1200&format=jpeg'], ['https://s3media.angieslist.com/s3fs-public/house-cleaners-cleaning.jpeg'], ['https://i.etsystatic.com/18854974/r/il/74f1a5/3622792335/il_570xN.3622792335_7262.jpg'], ['https://cdn.shopify.com/s/files/1/0306/3197/products/lump1_IMG_7724_1024x1024.jpg?v=1553995483'], ['https://thumbs.dreamstime.com/z/hammer-sickle-18988516.jpg'], ['https://www.cubcadet.com/on/demandware.static/-/Sites-cubcadet-Library/default/dwe5d17088/images/product-line-browse/Main-Carousel/13AQA9TTA10_XT1LT46_env2_1015x630.jpg'], ['https://www.ikea.com/us/en/images/products/brimnes-tv-unit-black__0851278_pe725293_s5.jpg']];
  let zipCodes = [35004, 99501, 85001, 71601, 90001, 16001, 19701, 32003, 30002, 96701, 83201, 60001, 46001, 50001, 66002, 40003, 70001, 13901, 20588, 11001, 48001, 55001, 38601, 63001, 59001, 68001, 88901, 13031, 17001, 87001, 10501, 27006, 58001, 43001, 73001, 97001, 15001, 12801, 29001, 57001, 37010, 73301, 84001, 15001, 20101, 98001, 24701, 53001, 82001];
  let statuses = ['a', 'b', 'c'];
  let types = ['permanent', 'loan'];
  let reviews = [[1], [2], [3], [4], [5]];

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

export const createListing = async (name, description, owner_id, photos, status, type, start_date = new Date('January 1, 2022 00:00:00'), end_date = new Date('December 31, 2022 11:59:59'), zip_code, reviews) => {
  const listingsCollection = collection(db, 'listings');
  return await addDoc(listingsCollection, {
    name,
    description,
    owner_id,
    photos,
    status,
    type,
    start_date,
    end_date,
    zip_code,
    reviews
  })
}

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

export const seedListings = () => {
  let totalListings = [];

  while (totalListings.length < 50) {
    totalListings.push(generateListing());
  }

  totalListings.forEach(item => {
    createListing(item.name, item.description, item.owner_id, item.photos, item.status, item.type, item.start_date, item.end_date, item.zip_code, item.reviews)
  });

  return totalListings;
}