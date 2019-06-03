import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders = []

  constructor() { }

  ngOnInit() {
    this.getSlider();
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
        "image": "slider0.png",
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
        "image": "slider1.png",
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
        "image": "slider2.jpg",
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
        "image": "slider3.jpg",
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
        "image": "slider4.jpg",
        "type": 4
      }
    ]  
  }

}
