document.addEventListener("DOMContentLoaded", function () {
        const button = document.getElementById("showMessage");
            const message = document.getElementById("message");

                button.addEventListener("click", function () {
                        message.textContent = "🎉 Congratulations! You clicked the button.";
                            });
                            });
                            <script>
                            const form = document.getElementById('donation-form');
                            const resultDiv = document.getElementById('donation-result');

                            form.addEventListener('submit', async (e) => {
                              e.preventDefault();
                                const amount = document.getElementById('amount').value;
                                  const method = document.getElementById('payment-method').value;

                                    if(method === 'mpesa'){
                                        const res = await fetch('mpesa-payment.php', {
                                              method: 'POST',
                                                    headers: { 'Content-Type': 'application/json' },
                                                          body: JSON.stringify({ amount })
                                                              });
                                                                  const data = await res.json();
                                                                      resultDiv.innerHTML = data.message;
                                                                        }

                                                                          if(method === 'card'){
                                                                              const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY'); // replace
                                                                                  const res = await fetch('stripe-payment.php', {
                                                                                        method: 'POST',
                                                                                              headers: { 'Content-Type': 'application/json' },
                                                                                                    body: JSON.stringify({ amount })
                                                                                                        });
                                                                                                            const session = await res.json();
                                                                                                                const result = await stripe.redirectToCheckout({ sessionId: session.id });
                                                                                                                    if(result.error) resultDiv.innerHTML = result.error.message;
                                                                                                                      }
                                                                                                                      });
                                                                                                                      </script>
<script>
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");

        if (slides.length === 0) return;

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }
});
</script>
                                                                                                                      
})
