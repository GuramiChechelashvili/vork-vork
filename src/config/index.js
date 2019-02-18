const env = process.env.NODE_ENV || 'development';

export default {
    isDev: env === 'Development',
    isTest: env === 'testing',
    port: 8000,
    dbUrl: 'mongodb://guga:guga123@cluster0-shard-00-00-uxdrj.mongodb.net:27017,cluster0-shard-00-01-uxdrj.mongodb.net:27017,cluster0-shard-00-02-uxdrj.mongodb.net:27017/Ecommerce?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    secrets: {
        jwt: "kjb32kjkjbskjabskjbad",
        jwtExp: '100d'
    }
}