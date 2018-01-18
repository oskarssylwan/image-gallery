import ElementBuilder from './elements';
import { fetch } from './utilities';



class Gallery {
  constructor(options) {
    this.options = options;
    this.category = 'nature';
    this.gallery = document.querySelector(`#${options.galleryId}`);
    this.content = document.querySelector(`#${options.galleryId} .content`);
    this.elementBuilder = new ElementBuilder();
    this.height = this.gallery.offsetHeight;
    this.width = this.gallery.offsetWidth;
    this.images = {};
  }

  getImages() {
    const url = this.options.flickrApi + `&tags=${this.category}`;
    fetch(url, (data) => {
      this.images = data.items.map(item => this.elementBuilder.buildImg(item.media.m));
      this.renderImagesToDom();
      this.toggleImageVisibility();
      window.onresize = () => {
        this.height = this.gallery.offsetHeight;
        this.toggleImageVisibility();
      }
    });
  }

  renderImagesToDom() {
    this.images.forEach(img => {
      this.images.forEach(img => this.content.appendChild(img));
    })
  }

  renderImagesToDom() {
    this.images.forEach(img => {
      this.images.forEach(img => this.content.appendChild(img));
    })
  }

  toggleImageVisibility() {
    if (this.images.length >= 1) {
      const numberToShow = parseInt((this.height / 200) - 1);
      console.log(numberToShow);
      this.images.forEach((img, index) => img.classList.toggle('hidden',( index > numberToShow )));
    }

  }


  // function placeImages() {
  //   this.gallery.appendChild(this.elementBuilder())
  // }
}

export default Gallery;