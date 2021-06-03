const express = require('express');
const { default: AdminBro } = require('admin-bro');
const mongoose = require('mongoose');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');

const app = express();
const run = async () => {
  await mongoose.connect('mongodb+srv://admin:1234@cluster0.ewayb.mongodb.net/databases?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);

  app.use(admin.options.rootPath, router);

  app.set("port", process.env.PORT || 3000);

  app.listen(app.get("port"),() => console.log(
    `Example app listening at http://localhost:${app.get("port")}`,
  ));
};


module.exports = run;
