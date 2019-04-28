import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /*
    ---
    fullsiz'isch slider
    ---
    
    spaceBetween: 0 <- Spacing is made trough ion-cards margin
    slidesPerView: 1.15 <- Amount of visible Slides, or in our example: Cards

    You may check different Breakpoint sizes
    but thanks to Swiper slider this is easy as well.

    breakpointsInverse: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1.2,
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 1.3,
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 1.75,
      }
   }

    ! Check the Docu for more awesome stuff: http://idangero.us/swiper/api/

  */
  slideOptsTop = {
    spaceBetween: 0,
    slidesPerView: 1.15,
  };
  /*
    slider with more narrow cards, 2 fully visible slides
  */
  slideOptsThumbs = {
    spaceBetween: 0,
    slidesPerView: 2.65,
  };
}
