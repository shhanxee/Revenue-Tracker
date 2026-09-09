const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');
console.log('Your JWT Secret:');
console.log(secret);
console.log('\nAdd this to your .env file as JWT_SECRET=' + secret);