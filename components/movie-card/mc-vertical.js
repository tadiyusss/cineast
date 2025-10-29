class MovieCardFull extends HTMLElement {
    connectedCallback() {
        const image = this.getAttribute('image') || 'https://placehold.co/200x300';
        const name = this.getAttribute('name') || 'Movie Title';
        const year = this.getAttribute('year') || '2022';
        const genre = this.getAttribute('genre') || 'Genre';
        const duration = this.getAttribute('duration') || '2h 0m';
        const rating = this.getAttribute('rating') || '8.1';
        const description = this.getAttribute('description') || 'Movie description goes here...';
        const link = this.getAttribute('link') || '#';

        this.innerHTML = `
        <a href="${link}">
            <article class="group relative w-48 overflow-hidden rounded-2xl shadow-sm">
                <img src="${image}" alt="${name} poster" class="aspect-[2/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]">
                <div class="absolute inset-x-0 bottom-0 translate-y-6 bg-gradient-to-t from-zinc-950 to-transparent p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 class="line-clamp-2 text-sm font-semibold text-white">${name}</h3>
                    <p class="mt-1 text-[11px] text-zinc-300">${year} • ${genre} • ${duration}</p>
                    <p class="mt-2 line-clamp-3 text-xs text-zinc-200">${description}</p>
                    <div class="mt-2 flex items-center gap-2">
                        <span class="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-[10px] font-semibold text-black">
                            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg> ${rating} </span>
                        <button class="rounded-md border border-zinc-700 px-2 py-1 text-[10px] text-white hover:bg-zinc-900">Watchlist</button>
                    </div>
                </div>
            </article>
        </a>
        `;
    }
}

customElements.define('mc-vertical', MovieCardFull);