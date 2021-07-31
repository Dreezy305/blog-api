const config = {
  port: process.env.PORT || 5000,
  db: process.env.DATABASE_URL,
  // test_port: 4242,
  // test_db: "mongodb://localhost/myblog_test",
};

module.exports = config;
