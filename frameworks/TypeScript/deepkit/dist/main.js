"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const framework_1 = require("@deepkit/framework");
const SqlController_1 = require("./sql/SqlController");
framework_1.Application.create({
    controllers: [SqlController_1.SqlController]
}).run();
