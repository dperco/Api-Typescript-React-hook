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
exports.getProducId = exports.getApiData = void 0;
const functions_1 = require("../functions");
const getApiData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //traigo los productos desde Mercado Libre 
    let { name } = req.query;
    console.log(name);
    try {
        let resp = yield (0, functions_1.respon)(); // funcion que trae productos con el array base 
        //console.log(resp)  
        if (name) {
            const prodName = resp.items.filter(e => e[0].title.includes(name)); // devuelve los productos por '?name= query' 
            return res.send(prodName);
        }
        else {
            res.send(resp); //devuelve  todos lo productos  
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getApiData = getApiData;
const getProducId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let productoId = yield (0, functions_1.responId)(id); // devuelve  el detalle del producto por Id
    //console.log(productoId)
    res.send(productoId);
});
exports.getProducId = getProducId;
