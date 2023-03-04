import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  const body = document.body;
  let lastScroll = 0;

    window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if(currentScroll <= 0) {
        body.classList.remove("scroll-up")
    }

    if(currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    }
    if(currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }


    lastScroll = currentScroll;
});
