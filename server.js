const dotenv = require('dotenv');
const app = require('./app');

const result = dotenv.config();

if (result.error) {
  throw result.error;
}

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
