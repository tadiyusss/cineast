class SiteHeader extends HTMLElement {
    connectedCallback() {

        this.innerHTML = `
        <div class="w-full border-b border-base-300 mr-0 md:mr-4 bg-white">
            <nav class="container mx-auto p-4 flex items-center justify-between flex-wrap" x-data="{ open_nav: false }">
                <div class="flex items-center justify-between w-full md:w-auto">
                    <a href="#" class="text-lg flex items-center space-x-2">
                        <h1>LOGO DITO</h1>
                    </a>
                    <button class="md:hidden block btn" @click="open_nav = !open_nav" aria-label="Toggle Navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" class="size-5">
                            <path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <ul class="w-full md:w-auto md:flex md:items-center mt-4 md:mt-0 md:space-y-0 text-sm md:space-x-4 space-y-2" :class="{ 'hidden': !open_nav }" class="md:flex">
                    <ul class="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="movie_list.html">Movies</a></li>
                        <li><a href="login.html">Login</a></li>
                    </ul>
                </ul>
            </nav>
        </div>`;
    }
}

customElements.define('top-navigation', SiteHeader);