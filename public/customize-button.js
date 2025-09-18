(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("Working fine")
    // Only run on product pages
    if (!window.location.pathname.includes('/products/')) return;

    const productForm = document.querySelector('form[action^="/cart/add"]');
    // if (!productForm) return;

    // Create the button
    const btn = document.createElement('button');
    btn.innerText = '🛠️ Customize';
    btn.style = 'padding: 10px; margin-top: 10px; background: black; color: white; border: none; cursor: pointer;';

    // Click handler
    btn.onclick = function (e) {
      e.preventDefault();
      const variantId = productForm.querySelector('[name="id"]')?.value;

      // Build URL to open your React app
      const customizeURL = `https://68cbd10340c47e164d901e3f--sprightly-yeot-439f12.netlify.app/?variantId=${variantId}`;
      window.open(customizeURL, '_blank'); // or use a modal
    };

    // Insert button after form
    productForm.parentNode.insertBefore(btn, productForm.nextSibling);
  });
})();
