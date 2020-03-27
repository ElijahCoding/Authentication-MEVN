import dotenv from 'dotenv'

dotenv.config()

export default {
    databaseUrl:
        process.env.DATABASE_URL ||
        'mongodb://root:hellojava123@ds161322.mlab.com:61322/mevn-fullstak',
    url: process.env.APP_URL || 'http://localhost:3000',
    jwtSecret: process.env.JWT_SECRET || '1234'
}
