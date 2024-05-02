``` JavaScript
async function serveOrder() {
  try {
    let orderStatus = await placeOrder('coffee');
    console.log(orderStatus);
    let processOrderStatus = await processOrder(orderStatus);
    console.log(processOrderStatus);
    let billGenerated = await generateBill(processOrderStatus);
    console.log(billGenerated);
  } catch (error) {
    console.log(error);
  }
}

serveOrder();
```
