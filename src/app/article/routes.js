"use strict";

const Router = require("express").Router();
const authenticate = require("../../helper/middleware/auth");
const articleController = require("./controller");

/* ====================== 
    UNAUTHENTICATED ROUTES
   ====================== */


/* ====================== 
    AUTHENTICATED ROUTES
   ====================== */

Router.post("/api/create", authenticate, articleController.createNewArticle);

Router.patch("/api/update-title", authenticate, articleController.updateTitle);

module.exports = Router;