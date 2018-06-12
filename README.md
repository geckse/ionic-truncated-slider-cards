# Ionic Slider (component) for a Truncated Horizontal Slider

I wanted to create something like you can see in the App-Screen below.
Somehow, horizontal slider with cards come quite popular and are yet easy to create with Ionic. 
We don't even need a new component though.

![UI-Example by UISTAR](/src/assets/imgs/BWf8VYDgTfZ_by_UISTAR.png)

> UI-Example / App-Screenshot Source: http://instagram.com/p/BWf8VYDgTfZ by UISTAR. Great Design. 
Just what we want. 🙌

So that's the goal. So where is the hack?

```html
<!-- here: -->
<ion-slides card-slides slidesPerView="1.18" spaceBetween="10"> ... </ion-slides>
    <!-- 
	   	card-slides: used for some sass stylings
	   	slidesPerView: defines the "ammount" of visible slides. the trick = decimal numbers. Default Slider.Component function.
	   	spaceBetween: is basically the margin between each slide in px. Default Slider-Component function.
	-->
```
With some Styling you'll achieve the horizontal sliding cards like in our inspiration.  
Feel free to clone and test some of the settings. 😄

```ssh
cd where-ever-your-git-lives/ionic-truncated-slider-cards/
npm install
ionic serve ios -c
```
