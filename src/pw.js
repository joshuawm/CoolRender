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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PWRender = void 0;
const playwright_webkit_1 = require("playwright-webkit");
class PWRender {
    constructor() {
        console.log("It's working");
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browser = yield playwright_webkit_1.webkit.launch();
        });
    }
    GetRender(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let page = yield this.browser.newPage();
            let content;
            let status;
            try {
                yield page.goto(url);
                content = yield page.content();
                status = 200;
            }
            catch (_a) {
                content = "Load failed (1) Check the url correct (2)Maybe the server go Wrong";
                status = 400;
            }
            yield page.close();
            let response = {
                status,
                content
            };
            return response;
        });
    }
    checkURL(url) {
        if (/https:\/\/.+/.test(url)) {
            return true;
        }
        else {
            return false;
        }
    }
    getRenderedHTML(url) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.checkURL(url)) {
                return yield this.GetRender(url);
            }
            else {
                return {
                    status: 400,
                    content: " "
                };
            }
        });
    }
}
exports.PWRender = PWRender;
