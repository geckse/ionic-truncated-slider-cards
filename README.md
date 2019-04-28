# Ionic 4 Slider (component) for a Truncated Horizontal Slider

I wanted to create something like you can see in the App-Screen below.
Somehow horizontal slider with cards became quite popular and are yet easy to create with Ionic. (Even more easy in Ionic 4). We don't even need a new component, though.

![UI-Example by UISTAR](/src/assets/imgs/BWf8VYDgTfZ_by_UISTAR.png)

> UI-Example / App-Screenshot Source: http://instagram.com/p/BWf8VYDgTfZ by UISTAR. Great Design.
Just what we want. 🙌

So that's the goal. So where is the hack?

In your Template:
```html
<!-- usage of ion-slide and ion-card -->
<!-- customize swipe slider options in your component typescript -->
<ion-slides [options]="slideOpts">
  <ion-slide>
    <ion-card class="ion-text-start">
      ...
    </ion-card>
  </ion-slide>
</ion-slides>
```

And in your Components code:
```javascript
@Component({
...
})
export class YourComponent {
  /*
    spaceBetween: 0 <- Spacing is made trough ion-cards margin
    slidesPerView: 1.15 <- Amount of visible Slides, or in our example: Cards
  */
  slideOpts: {
    spaceBetween: 0,
    slidesPerView: 1.15,  
  };

  constructor(){
  }
}
```

Basically done. Ofc with some more adjustments you'll receive a more fabulous result, but just using Ionic 4 default components styling your card slider already looks awesome.

With default Ionic 4 Stylings you should receive something like this:
![Ionic 4 iOS Resul](/src/assets/imgs/default_ionic_4_result.png)


## Testing the Example:

```ssh
cd where-ever-your-git-lives/ionic-truncated-slider-cards/
npm install
ionic serve --platform ios -c
```

### Looking for an Ionic 3 solution?
https://github.com/geckse/ionic-truncated-slider-cards/tree/ionic-3
