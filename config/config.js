if (process.env.NODE_ENV === 'test') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/sample-app-test';
} else if (process.env.NODE_ENV === 'dev') {
  process.env.MONGODB_URI = 'mongodb://localhost:27017/sample-app';
} else {
  // process.env.MONGODB_URI = 'mongodb://brad:brad123@ds135421.mlab.com:35421/traversy-mern';
}
