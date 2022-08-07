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
exports.responId = exports.respon = void 0;
const axios_1 = __importDefault(require("axios"));
const respon = () => {
    const urlApi = "https://api.mercadolibre.com/sites/MLA/search?q=:celulares";
    return axios_1.default.get(urlApi)
        .then(((prod) => { return prod.data.results; }))
        .then((e) => e.map(r => {
        return {
            category: r.category_id,
            items: [{
                    id: r.id,
                    title: r.title,
                    price: {
                        currency: r.currency_id,
                        amount: Math.trunc(r.price),
                        decimals: r.price % 1
                    },
                    picture: r.thumbnail,
                    condition: r.condition,
                    free_shipping: r.shipping.free_shipping
                }]
        };
    }))
        .then(e => {
        return {
            author: {
                name: 'Daniel',
                lastname: 'Perco'
            },
            categories: e.map(r => r.category),
            items: e.map(t => t.items)
        };
    });
};
exports.respon = respon;
function responId(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let urlId1 = `https://api.mercadolibre.com/items/${id}`;
        let url2 = `https://api.mercadolibre.com/items/${id}/description`;
        const resp = yield axios_1.default.all([axios_1.default.get(urlId1),
            axios_1.default.get(url2)])
            .then(axios_1.default.spread((data1, data2) => {
            return {
                item: {
                    id: data1.data.id,
                    title: data1.data.title,
                    price: {
                        currency: data1.data.currency_id,
                        amount: data1.data.price,
                        decimals: data1.data.price % 1
                    },
                    picture: data1.data.thumbnail,
                    condition: data1.data.condition,
                    free_shipping: data1.data.shipping.free_shipping,
                    sold_quentity: data1.data.sold_quantity,
                    description: data2.data.plain_text
                }
            };
        }))
            .then(e => {
            return {
                author: {
                    name: 'Daniel',
                    lastname: 'Perco'
                },
                item: e.item
            };
        });
        return resp;
    });
}
exports.responId = responId;
