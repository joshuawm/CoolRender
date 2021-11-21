"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pw_1 = require("./pw");
const app = (0, express_1.default)();
const port = 3000;
const render = new pw_1.PWRender();
app.get("/get", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let response;
    console.log(req.query);
    if (req.query.url) {
        response = yield render.getRenderedHTML(req.query.url);
    }
    else {
        response = "No URL passed";
    }
    res.send(response);
}));
app.listen(port, () => {
    console.log(`the server is listening on ${port}`);
    render.start();
});
