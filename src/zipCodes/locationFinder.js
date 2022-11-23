const zipCodeData = require('zipcode-city-distance');

const findDistance = (ownerZip, clientZip) => {
  let zipCodeDistance = zipCodeData.zipCodeDistance(ownerZip.toString(), clientZip.toString(), 'M');
  return zipCodeDistance.toFixed(2)
}

module.exports.findDistance = findDistance