document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      document.getElementById('shippingMethod').innerText = 'Shipping Method: ' + this.value;
    });
  });
// JavaScript Interaction
function updateOrderSummary() {
  var subtotal = 100; // Example subtotal
  var shipping = 0; // Default shipping
  var taxRate = 0.13; // Tax rate (13%)
  
  // Get the selected shipping method
  var shippingMethod = document.querySelector('input[name="shipping"]:checked');
  if (shippingMethod) {
    // Update shipping cost based on selected method
    switch (shippingMethod.value) {
      case 'standard':
        shipping = 30;
        break;
      case 'express':
        shipping = 80;
        break;
      case 'overnight':
        shipping = 110;
        break;
    }
  }
// Calculate tax
var tax = (subtotal + shipping) * taxRate;
      
// Calculate total
var total = subtotal + shipping + tax;

// Update HTML with calculated values
document.getElementById('subtotal').innerText = '$' + subtotal.toFixed(2);
document.getElementById('shipping').innerText = '$' + shipping.toFixed(2);
document.getElementById('tax').innerText = '$' + tax.toFixed(2);
document.getElementById('total').innerText = '$' + total.toFixed(2);
}
 // Call updateOrderSummary() when the page loads
 window.onload = updateOrderSummary;

   // Script to handle the "Process Payment" button click event
  document.getElementById("processPayment").addEventListener("click", function(){
   //Navigate to the thank you page
    window.location.href = "thankyoupage.html";
});