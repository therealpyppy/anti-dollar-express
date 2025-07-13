(function () {
    const url = window.location.href;
    
    if (!url.includes("BundleDeals") && !url.includes("dollarexpress")) return;
    
    let productId = null;
    
    const bundleMatch = url.match(/productIds=([^&]+)/);
    if (bundleMatch) {
        productId = bundleMatch[1].split(":")[0];
    }
    
    const dollarMatch = url.match(/dollarexpress.*?(\d{8,})/);
    if (dollarMatch && !productId) {
        productId = dollarMatch[1];
    }
    
    const directMatch = url.match(/item\/(\d{8,})/);
    if (directMatch && !productId) {
        productId = directMatch[1];
    }
    
    if (!productId) {
        console.log("DollarExpress Extension: No product ID found in URL");
        return;
    }
    
    const productUrl = `https://www.aliexpress.com/item/${productId}.html`;
    
    const popup = document.createElement("div");
    popup.innerHTML = `
      <div class="bundle-popup">
        <p>DollarExpress detected! View original product?</p>
        <button id="bundle-button">Go to Original Product</button>
        <button id="close-button">×</button>
      </div>
    `;
    document.body.appendChild(popup);
    
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.href = chrome.runtime.getURL("style.css");
    document.head.appendChild(style);
    
    const bundleButton = document.getElementById("bundle-button");
    const closeButton = document.getElementById("close-button");
    
    if (bundleButton) {
        bundleButton.onclick = () => {
            window.open(productUrl, "_blank");
        };
    }
    
    if (closeButton) {
        closeButton.onclick = () => {
            popup.remove();
        };
    }
    
    setTimeout(() => {
        if (popup && popup.parentNode) {
            popup.remove();
        }
    }, 15000);
    
    console.log("DollarExpress Extension: Product ID found:", productId);
})();
