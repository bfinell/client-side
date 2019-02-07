import React, {Component} from 'react';

class CurrencieConverter extends Component{
         url= 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=';
        currencyConverter(currency){

            if (currency === '$'){
                var from = 'USD'
                var to = 'EUR'
            }else if (currency === '€') {
                var from = 'EUR'
                var to = 'USD'
            }
            let finalurl=url+from+"&to_currency="+to+"&apikey="+KV4MHKHP1XKOM8MJ;
            fetch(finalurl)
                .then(response => {
                    return response.json()
                        .then(json =>{
                        var cur = json['Realtime Currency Exchange Rate'];
                        var multiplyer = parseFloat(cur[Object.keys(cur)]['5. Exchange Rate']);

                })
            })
        }
}