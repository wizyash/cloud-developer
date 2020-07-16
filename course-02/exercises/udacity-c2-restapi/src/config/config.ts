export const config = {
  "dev": {
    "username": process.env.postgress_username,
    "password": process.env.postgress_password,
    "database": process.env.postgress_database,
    "host": process.env.postgress_host,
    "dialect": "postgres",
    "aws_region": process.env.aws_region,
    "aws_profile": "default",
    "aws_media_bucket": process.env.aws_media_bucket
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
