"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlController = void 0;
const http_1 = require("@deepkit/http");
let SqlController = class SqlController {
    getJson() {
        return { message: "Hello, World!" };
    }
    getHello() {
        return 'Hello, World!';
    }
};
__decorate([
    http_1.http.GET("/json"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SqlController.prototype, "getJson", null);
__decorate([
    http_1.http.GET('/plaintext'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SqlController.prototype, "getHello", null);
SqlController = __decorate([
    http_1.http.controller("")
], SqlController);
exports.SqlController = SqlController;
