if (process.env.NODE_ENV === 'test') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/traversy-mern-test';
} else if (process.env.NODE_ENV === 'dev') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/traversy-mern';
} else {
  process.env.MONGODB_URI = 'mongodb://brad:brad123@ds135421.mlab.com:35421/traversy-mern';
}
