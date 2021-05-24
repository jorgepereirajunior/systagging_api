module.exports = {
  "type": process.env.TYPEORM_ENGINE,
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,

  "migrations": [
    process.env.ENVIRONMENT_DIRECTORY_MIGRATIONS
  ],

  "entities": [
    process.env.ENVIRONMENT_DIRECTORY_ENTITIES
  ],

  "cli": {
    "migrationsDir": process.env.ENVIRONMENT_DIRECTORY_SAVE_MIGRATIONS
  }
}