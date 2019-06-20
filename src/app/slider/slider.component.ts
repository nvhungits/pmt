import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Image } from '../image';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders = []
  images: Image[] = new Array<Image>()
  filtersLoaded: Promise<boolean>

  constructor(private apiService: ApiService, private DomSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getImages()
    this.getSlider()
  }

  getSlider(){
    this.sliders = [
      {
        "title": "Slider 0",
        "label": "BẠN ĐANG MUỐN",
        "offsetxin": "right",
        "slidedelay": 7000,
        "transition2d_left": 24,
        "transition2d_right": 25,
        "transition2d_up": 27,
        "transition2d_down": 28,
        "image": "https://phucminhtam.net/layerslider/slider0.png",
        "type": 3,
        "textIsTrue": true
      },
      {
        "title": "Slider 1",
        "offsetxin": "right",
        "slidedelay": 7000,
        "transition2d_left": 110,
        "transition2d_right": 111,
        "transition2d_up": 112,
        "transition2d_down": 113,
        "image": this.images.length > 0 ? this.images[0].base64 : "https://phucminhtam.net/layerslider/june2019/slider1.jpg",
        "type": 1
      },
      {
        "title": "Slider 2",
        "offsetxin": "right",
        "slidedelay": 7000,
        "transition2d_left": 92,
        "transition2d_right": 93,
        "transition2d_up": 105,
        "transition2d_down": 0,
        "image": "https://phucminhtam.net/layerslider/june2019/slider2.jpg",
        "type": 2
      },
      {
        "title": "Slider 3",
        "offsetxin": "right",
        "slidedelay": 7000,
        "transition2d_left": 110,
        "transition2d_right": 111,
        "transition2d_up": 112,
        "transition2d_down": 113,
        "image": "https://phucminhtam.net/layerslider/june2019/slider3.jpg",
        "type": 3
      },
      {
        "title": "Slider 4",
        "offsetxin": "right",
        "slidedelay": 7000,
        "transition2d_left": 110,
        "transition2d_right": 111,
        "transition2d_up": 112,
        "transition2d_down": 113,
        "image": "https://phucminhtam.net/layerslider/june2019/slider4.jpg",
        "type": 4
      },
      {
        "title": "Slider 5",
        "offsetxin": "right",
        "slidedelay": 7000,
        "transition2d_left": 110,
        "transition2d_right": 111,
        "transition2d_up": 112,
        "transition2d_down": 113,
        "image": "https://phucminhtam.net/layerslider/june2019/slider5.jpg",
        "type": 4
      }
    ]  

    this.filtersLoaded = Promise.resolve(true)
  }

  getImages(){
    this.apiService.getImages().subscribe((images: Image[])=>{
      this.images = images
      //console.log(images)
      //this.getSlider()
    });
  }

}
