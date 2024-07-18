import Freecurrencyapi from '@everapi/freecurrencyapi-js';


const freecurrencyapi = new Freecurrencyapi('fca_live_r53Hu3Rb3HE5CrLlywAAia5p2VvxreIvwLJNjqAZ');


export async function moneyConverter(fromMoney, toMoney, units) {

    const res = await freecurrencyapi.latest({
        base_currency: fromMoney,
        currencies: toMoney
    });

    const multiplier = res.data[toMoney];
    return multiplier * units;
}





