import { Injectable } from '@angular/core';
import KhaltiCheckout from "khalti-checkout-web";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  config = {
    // replace this key with yours
    "publicKey": "test_public_key_0323b5063d0e410ea8558d8bd2848008",
    "productIdentity": "",
    "productName": "Drogon",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
      onSuccess(payload) {
        // hit merchant api for initiating verfication
        console.log("Payload",payload);
        payload.paymentMethod = "khalti";
        fetch(
          `http://localhost:5000/api/courses/payment/verify/${payload.product_identity}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: 'Bearer '+localStorage.getItem("auth_token"),
            },
            body: JSON.stringify(payload),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            alert("Congratulation your payment is successfull");
            window.location.href = "http://localhost:4200/pages/courses";
          })
          .catch((error) => {
            console.error("Error", error);
          });
      },
      // onError handler is optional
      onError(error) {
        // handle errors
        console.log(error);
      },
      onClose() {
        console.log('widget is closing');
      }
    },
    "paymentPreference": ["KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT"],
  };
  checkout: KhaltiCheckout;

  constructor() {        
  }

  makePurchase(courseId, rate: number)
  {
    this.config.productIdentity = courseId;
    this.checkout = new KhaltiCheckout(this.config);
    this.checkout.show({ amount: rate });
  }
}
