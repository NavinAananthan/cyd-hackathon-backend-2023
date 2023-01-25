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


    // To get all the coin details
    async getCoinDetails(id:string) {
        const options = {
          uri: `${this.baseurl}/${id}`,
          json: true,
        };
        const response=await rp(options)

        return{
            id:response.id,
            symbol:response.symbol,
            name:response.name
        };
      }

    //This function is to get details of all the coins
    async getallcoindetails(){
        const options = {
            uri: `${this.baseurl}`,
            json: true,
          };
        

        return rp(options)
        /*const response=await rp(options)
  
        return{
            id:response.id,
            symbol:response.symbol,
            name:response.name
        };*/
    }
}