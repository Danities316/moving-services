// You can add any interactive functionality here if needed
console.log("Marketplace for Vans, Drivers & Helpers in Finland loaded.");

document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');

    // Define a placeholder URL/function (replace with your actual backend call)
    // const WHATSAPP_BASE_URL = 'https://api.whatsapp.com/send?phone=2349040230325&text=Hello!%20I%20am%20interested%20in%20';

    serviceCards.forEach(card => {
        card.addEventListener('click', async (event) => {
            // Prevent the click if it was on an image or icon inside the card (optional)
            if (event.target.tagName === 'IMG' || event.target.tagName === 'I' || event.target.tagName === 'SPAN') {
                return;
            }

            const companyId = card.getAttribute('data-service-id');
            const imageUrl = card.querySelector('.service-image').src;
            // const serviceName = card.querySelector('.service-name').textContent.trim();

            console.log(`Card clicked for company ID: ${companyId}, Image URL: ${imageUrl}`);
            // const message = encodeURIComponent(`service: ${serviceName}. Please send me details.`);
            // const targetUrl = WHATSAPP_BASE_URL + message;

            // 2. Open the URL in a new tab/window
            // window.open(targetUrl, '_blank');

            // --- You would place the following code here if you have a backend ---

            // const BACKEND_URL = 'https://overflowing-education-production-3419.up.railway.app';
            const BACKEND_URL = 'https://regard-examination-periods-phantom.trycloudflare.com';
            // const BACKEND_URL = 'http://20.164.0.179:8888';
            // const BACKEND_URL = 'http://localhost:8888';
            // const BACKEND_URL = "my-cool-wa-bot-2025-e9bdfqazcshfgebm.southafricanorth-01.azurewebsites.net";
            try {
                // Simplified payload example
                const response = await fetch(`${BACKEND_URL}/api/initiate-chat`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ companyId, imageUrl })
                });

                if (!response.ok) throw new Error('Failed to generate WhatsApp link');
                const data = await response.json();

                window.open(data.waLink, '_blank');
            } catch (err) {
                console.error('Error:', err);
                alert('Could not initiate chat. Please try again.');
            }

        });
    });
});