document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      document.getElementById('selectedShipping').innerText = 'Selected Shipping Method: ' + this.value;
    });
  });

  function calculateSummary() {
    var subtotal = 100; 
    var shipping = 10
    var taxRate = 0.13; 
    
    // Calculate tax
    var tax = subtotal * taxRate;
    
    // Calculate total
    var total = subtotal + shipping + tax;

    // Update HTML with calculated values
    document.getElementById('subtotal').innerText = '$' + subtotal.toFixed(2);
    document.getElementById('shipping').innerText = '$' + shipping.toFixed(2);
    document.getElementById('tax').innerText = '$' + tax.toFixed(2);
    document.getElementById('total').innerText = '$' + total.toFixed(2);
  }

  // Call calculateSummary() when the page loads
  window.onload = calculateSummary;

  // Script to handle the "Process Payment" button click event
  document.getElementById("processPayment").addEventListener("click", function(){
   //Navigate to the thank you page
    window.location.href = "thankyoupage.html";
});