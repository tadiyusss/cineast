

class ActorImage extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title') || 'Subscription';
        const price = this.getAttribute('price') || '0.00';
        const description = this.getAttribute('description') || '';
        const features = this.getAttribute('features').split(",")
        console.log(features)

        const featuresList = (features || []).map(feature => `
            <li class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4 text-green-600">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
                </svg>
                <p>${feature.trim()}</p>
            </li>
        `).join('');

        this.innerHTML = `
                <div class="border rounded shadow-sm p-4 space-y-4">
                    <h4>${title}</h4>
                    <h3 class="text-4xl font-medium">₱${price}</h3>
                    <div class="space-y-2 py-4">
                        <h6 class="text-sm text-gray-600">${description}</h6>
                        <ul class="text-sm">
                            ${featuresList}
                        </ul>
                    </div>
                    <button class="w-full border border-gray-300 rounded shadow-inner hover:bg-gray-100 shadow text-sm py-2 transition">Get Started with ${title}</button>
                </div>
                `;
    }
}

customElements.define('p-card', ActorImage);