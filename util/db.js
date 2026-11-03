import mongoose from 'mongoose';
import dns from 'dns';

// Node may pick a loopback DNS (127.0.0.1) on some Windows setups, which breaks
// mongodb+srv SRV lookups (querySrv ECONNREFUSED). Fall back to public resolvers.
if (dns.getServers().every((s) => s.startsWith('127.') || s === '::1')) {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
}

const MONGO_URI = process.env.MONGODB_URI;
const cached = {};
async function connectMongo() {
    if (!MONGO_URI) {
        throw new Error('Please define the MONGO_URI environment variable inside .env.local');
    }
    if (cached.connection) {
        return cached.connection;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGO_URI, opts);
    }
    try {
        cached.connection = await cached.promise;
    } catch (e) {
        cached.promise = undefined;
        throw e;
    }
    return cached.connection;
}
export default connectMongo;