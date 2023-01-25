import { Injectable } from '@nestjs/common';
//import Web3 from 'web3';

import rp from 'request-promise';



@Injectable()
export class TokenService {
    private covurl='https://api.covalenthq.com/v1/1/address'
    private baseurl='https://api.coingecko.com/api/v3/coins';


    async getBalances(address:string) {
        const optionethereum={
            uri: `${this.covurl}/${address}/balances_v2/?key=ckey_c0cb6e86390f40ef872c5a783e8`,
            json: true,
        };

        rp(optionethereum)
        //const response= await rp(optionethereum);

        return{
            address:address,
            //balances:response.balances
        };

    }




    async getMasterCoinDetails(id:string) {
        const options = {
          uri: `${this.baseurl}/${id}`,
          json: true,
        };
        return rp(options);
    }
    

    async validate(input: string) {
        const alphanumericRegex = /^[a-zA-Z0-9]*$/;
        if (input.length < 5 || input.length > 20) {
          return false;
        }
        if (!alphanumericRegex.test(input)) {
          return false;
        }
        return true;
    }

    // To get all the coin details
    async getCoinDetails(id:string) {
        const options = {
          uri: `${this.baseurl}/${id}`,
          json: true,
        };

        const response=await rp(options)
        
        if(await this.validate(response.name)){
            return{
                id:response.id,
                symbol:response.symbol,
                name:response.name
            };
        }
        else{
            return{ id:response.id,};
        }
        
    }

    //This function is to get details of all the coins
    async getallcoindetails(){
        let coins:any[]=[];
        const options = {
            uri: `${this.baseurl}`,
            json: true,
          };
        
        var json=rp(options);
        coins.push(json);
        return coins;
    }
}
