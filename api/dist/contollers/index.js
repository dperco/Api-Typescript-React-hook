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
exports.getProducId = exports.getApiData = void 0;
const axios_1 = __importDefault(require("axios"));
const getApiData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //traigo los productos desde Mercado Libre 
    let name = req.query;
    const urlApi = "https://api.mercadolibre.com/sites/MLA/search?q=:celulares";
    const respon = () => {
        return axios_1.default.get(urlApi)
            .then(respo => { return respo.data.results; });
    };
    //console.log(respon())
    let resp = yield respon();
    console.log(resp);
    let regisProd = resp.map((e) => {
        return {
            categories: e.category_id,
            id: e.id,
            title: e.title,
            price: e.price,
            currency: e.currency_id,
            prices: e.prices.id,
            amount: e.prices.amount,
            decimals: e.prices.decimal,
            picture: e.thumbnail,
            condition: e.condition,
            free_shipping: e.shipping.free_shipping
        };
    });
    let categories = [];
    let items = [{
            id: '',
            title: '',
            price: {
                currency: '',
                amount: 0,
                decimals: 0
            }
        }];
    let picture = [];
    let condition = [];
    let free_shipping = [];
    for (let i = 0; i < regisProd.length; i++) {
        categories[i] = regisProd[i].categories;
        items[i] = {
            id: regisProd[i].id,
            title: regisProd[i].title,
            price: {
                currency: regisProd[i].currency,
                amount: Math.trunc(regisProd[i].price),
                decimals: regisProd[i].price % 1
            }
        };
        picture[i] = regisProd[i].picture;
        condition[i] = regisProd[i].condition;
        free_shipping[i] = regisProd[i].free_shipping;
    }
    let prod = {
        name: 'Daniel',
        lastname: 'Perco',
        Categories: categories,
        items: items,
        picture: picture,
        condition: condition,
        free_shipping: free_shipping
    };
    return res.send(prod); // devuelvo  el formato esperado  para query
});
exports.getApiData = getApiData;
const getProducId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    //  console.log(id)
    try {
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
        }));
        console.log(resp);
        res.send(resp);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProducId = getProducId;
