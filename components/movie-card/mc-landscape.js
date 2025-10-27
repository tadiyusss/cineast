class MovieCardFull extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <!-- Movie Card · Split + Rating Ring -->
        <article class="grid w-72 grid-cols-[112px,1fr] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        	<img src="https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg" alt="Oppenheimer poster" class="h-full w-full object-cover">
        	<div class="flex min-w-0 flex-col p-3">
        		<div class="flex items-start justify-between gap-2">
        			<h3 class="line-clamp-2 pr-1 text-sm font-semibold text-white">Oppenheimer</h3>
        			<!-- Circular rating (static 92%) -->
        			<div class="relative h-8 w-8">
        				<svg viewBox="0 0 36 36" class="h-8 w-8">
        					<circle cx="18" cy="18" r="15.5" fill="none" class="stroke-zinc-800" stroke-width="3"></circle>
        					<circle cx="18" cy="18" r="15.5" fill="none" class="stroke-white" stroke-width="3" stroke-linecap="round" stroke-dasharray="97 100" transform="rotate(-90 18 18)"></circle>
        				</svg>
        				<span class="absolute inset-0 grid place-items-center text-[10px] font-semibold text-white">9.2</span>
        			</div>
        		</div>
        		<p class="mt-1 text-[11px] text-zinc-400">2023 • Drama • 3h</p>
        		<p class="mt-2 line-clamp-3 text-sm text-zinc-300"> The story of J. Robert Oppenheimer and the development of the atomic bomb… </p>
        		<div class="mt-auto flex gap-2 pt-3">
        			<a href="#" class="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black hover:bg-zinc-200">Details</a>
        			<button class="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-white hover:bg-zinc-900">Watchlist</button>
        		</div>
        	</div>
        </article>
        `;
    }
}

customElements.define('mc-landscape', MovieCardFull);