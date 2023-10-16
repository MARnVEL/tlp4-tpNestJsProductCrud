-- CREATE DATABASE IF NOT EXISTS marnveldb
SELECT 'CREATE DATABASE marnveldb'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'marnveldb')\gexec