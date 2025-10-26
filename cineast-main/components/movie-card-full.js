class MovieCardFull extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <div class="">
            <img src="https://placehold.co/250x250" alt="Movie Image" class="w-full h-48 object-cover rounded shadow-sm">
            <div class="py-2">
                <h2 class="text-md font-semibold">Movie Title</h2>
                <p class="text-sm text-gray-600 line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum blanditiis natus, esse voluptatibus inventore quisquam tempore velit fuga quia eos quibusdam. Impedit unde minima minus rerum dolores recusandae reiciendis.</p>
            </div>
        </div>
        `;
    }
}

customElements.define('movie-card-full', MovieCardFull);