const config = {
  port: process.env.PORT || 5000,
  db: "mongodb+srv://cluster0.c83oy.mongodb.net/myFirstDatabase",
  test_port: 4242,
  test_db: "mongodb://localhost/myblog_test",
};

module.exports = config;
