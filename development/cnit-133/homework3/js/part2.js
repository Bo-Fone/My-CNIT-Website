function calculateSales() {
    const PRICE_TAG = {
        item1: 239.99,
        item2: 129.75,
        item3: 99.95,
        item4: 350.89
    }

    let item1N = document.getElementById("item1N").value,
        item2N = document.getElementById("item2N").value,
        item3N = document.getElementById("item3N").value,
        item4N = document.getElementById("item4N").value;

    let item1T = PRICE_TAG.item1 * item1N,
        item2T = PRICE_TAG.item2 * item2N,
        item3T = PRICE_TAG.item3 * item3N,
        item4T = PRICE_TAG.item4 * item4N;

    let totalSold = item1T + item2T + item3T + item4T;
    let earning = 200 + totalSold * 0.009;

    document.getElementById("item1T").value = item1T.toFixed(2);
    document.getElementById("item2T").value = item2T.toFixed(2);
    document.getElementById("item3T").value = item3T.toFixed(2);
    document.getElementById("item4T").value = item4T.toFixed(2);
    document.getElementById("revenue").value = totalSold.toFixed(2);
    document.getElementById("earning").value = earning.toFixed(2);
}