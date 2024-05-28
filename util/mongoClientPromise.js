import { MongoClient } from 'mongodb';


 var _mongomongoClientPromise;


if (!process.env.MONGODB_URI) {
  throw new Error(
    'Invalid/Missing environment variable: "MONGODB_CONNECTION_STRING"'
  );
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let mongoClientPromise;

if (process.env.ENVIRONMENT === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  if (!global._mongomongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongomongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongomongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default mongoClientPromise;