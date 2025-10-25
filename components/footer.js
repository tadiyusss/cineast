class ActorImage extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <div class="space-y-2">
            <img src="https://placehold.co/250x250" alt="Actor Image" class="size-40 rounded-full object-cover mx-auto">
            <p class="text-center font-medium">Actor Name</p>
        </div>
        `;
    }
}

customElements.define('actor-image', ActorImage);