import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GPayComponent implements OnInit {

buttonColor="black";
buttonType="buy";
isCustomSize=250;
buttonHeight=50;
isTop =window===window.top;

paymentRequest={
  apiVersion:2,
  apiVersionMinor:0,
  allowedPaymentMethods:[
    {type:"CARD",
    parameters:{
      allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
      allowedCardNetworks:["AMEX","VISA","MASTERCARD"]

    },
    tokenizationSpecification:{
      type:"PAYMENT_GATEWAY",
      paramerters:{
        geteway:"examply",
        getewayMerchantId:"exampegetewayMerchantId"
      }
    }

  }
  ],
  marchantInfo:{
    merchantId:"1234567891234567890",
    marchantName:"Demo Marchant"
  },
  transactionInfo:{
    totalPriceStatus:"FINAL",
    totalPriceLabel:"Total",
    totalPrice:"100.00",
    currencyCode:"USD",
    conntryCode:"US",
  }
};
onLoadPaymentData(event:any){
  console.log("Load payment data by Shopping",event.datail)
}



  constructor() { }

  ngOnInit(): void {

  }

}
