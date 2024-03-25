import certified from './assets/certified.svg';
import coffeeBeans from './assets/coffee-beans.svg';
import coffee from './assets/coffee.svg';
import freeDelivery from './assets/free-delivery.svg';

import menu1 from './assets/01.jpg';
import menu2 from './assets/02.jpg';
import menu3 from './assets/03.jpg';
import menu4 from './assets/04.jpg';
import menu5 from './assets/05.jpg';
import menu6 from './assets/06.jpg';
import menu7 from './assets/07.jpg';
import menu8 from './assets/08.jpg';

import gallery1 from './assets/gallery-1.jpg';
import gallery2 from './assets/gallery-2.jpg';
import gallery3 from './assets/gallery-3.jpg';
import gallery4 from './assets/gallery-4.jpg';
import gallery5 from './assets/gallery-5.jpg';
import gallery6 from './assets/gallery6.jpg';

import offer1 from './assets/offer-1.jpg';
import offer2 from './assets/offer-2.jpg';

import testimonial1 from './assets/santacruzlife.png';
import testimonial2 from './assets/goodtimes.png';
import testimonial3 from './assets/scsentinel.jpg';


export const links = [
  {
    name: 'Home',
    path: 'home',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Features',
    path: 'features',
  },
  {
    name: 'Menu',
    path: 'menu',
  },
  {
    name: 'Gallery',
    path: 'gallery',
  },
  {
    name: 'Chefs',
    path: 'team',
  },
  {
    name: 'Testimonials',
    path: 'testimonials',
  },
];

export const features = [
  {
    id: 1,
    img: freeDelivery,
    title: 'Free Shipping',
    description:
      'It is a long established fact that a reader will be by the readable content of a page looking at its layout.',
  },
  {
    id: 2,
    img: certified,
    title: 'Organic Certified',
    description:
      'It is a long established fact that a reader will be by the readable content of a page looking at its layout.',
  },
  {
    id: 3,
    img: coffee,
    title: 'High Quality',
    description:
      'It is a long established fact that a reader will be by the readable content of a page looking at its layout.',
  },
  {
    id: 4,
    img: coffeeBeans,
    title: 'Proper Roasting',
    description:
      'It is a long established fact that a reader will be by the readable content of a page looking at its layout.',
  },
];

export const menu = [
  {
    id: 1,
    img: menu1,
    title: 'Eggs Benedict',
    description: 'Two poached eggs with smoked Canadian bacon and our hollandaise sauce served on an English muffin with homefries.',
    price: 18.25,
  },
  {
    id: 2,
    img: menu2,
    title: 'Huevos Rancheros Con Carnitas ',
    description: 'Two egg, corn tortillas, black beans, grilled peppers, olives & pork Carnitas topped with Ranchero sauce, green onions and cheese.',
    price: 18.25,
  },
  {
    id: 3,
    img: menu3,
    title: 'Shrimp & Tomato Benedict',
    description: 'Sautéed bay shrimp and tomatoes on an English muffin, topped with poached eggs and our hollandaise sauce and served with homefries.',
    price: 18.25,
  },
  {
    id: 4,
    img: menu4,
    title: 'Blackened Ahi Benedict',
    description: 'Blackened ahi tuna, poached eggs and our hollandaise sauce on an English muffin. Served with homefries. ',
    price: 18.25,
  },
  {
    id: 5,
    img: menu5,
    title: 'Cafe Florentine',
    description: 'Two poached eggs with spinach, grilled tomatoes and our hollandaise sauce on an English muffin with homefries.',
    price: 18.25,
  },
  {
    id: 6,
    img: menu6,
    title: 'Old Special #1',
    description: 'Three eggs scrambled with potatoes, house-made salsa, olives, green onions, cheese and served with toast.',
    price: 18.25,
  },
  {
    id: 7,
    img: menu7,
    title: 'Huevos Mexicanos',
    description: 'Scrambled south of the border style with jalapeños, avocado, tomatoes and cheese. Served with black beans and tortillas. ',
    price: 18.25,
  },
  {
    id: 8,
    img: menu8,
    title: 'Chilaquiles',
    description: 'Three eggs scrambled with tortilla chips, green chilies, olives, tomatoes, onions, cheese and served with toast.',
    price: 18.25,
  },
];

export const gallery = [
  {
    id: 1,
    img: gallery1,
    title: 'Cappuccino Arabica',
  },
  {
    id: 2,
    img: gallery2,
    title: 'Cappuccino Arabica',
  },
  {
    id: 3,
    img: gallery3,
    title: 'Cappuccino Arabica',
  },
  {
    id: 4,
    img: gallery4,
    title: 'Cappuccino Arabica',
  },
  {
    id: 5,
    img: gallery5,
    title: 'Cappuccino Arabica',
  },
  {
    id: 6,
    img: gallery6,
    title: 'Cappuccino Arabica',
  },
];

export const offer = [
  {
    id: 1,
    img: offer1,
    title: 'Cappuccino Arabica',
    discount: 'Get 40% Offer',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.',
  },
  {
    id: 2,
    img: offer2,
    title: 'Cappuccino Arabica',
    discount: 'Get 40% Offer',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.',
  },
];

export const testimonials = [
  {
    id: 1,
    img: testimonial1,
    title: 'Santa Cruz Life',
    service: 'Journalist',
    link:'https://santacruzlife.com/walnut-cafe-santa-cruz/',
    description:
      '"You know a restaurant is serious about brunch when they aren’t even open for dinner. In Santa Cruz, that restaurant is the Walnut Avenue Cafe, located downtown off Pacific Avenue."',
  },
  {
    id: 2,
    img: testimonial2,
    title: 'Good Times',
    service: 'Journalist',
    link:'https://www.goodtimes.sc/foodie-file-walnut-avenue-cafe-11-29-23/',
    description:
      '"mainstay in the heart of downtown since 1993, locals have been going nuts for the popular Walnut Avenue Café. The menu is full of classic breakfast and lunch items, elevated comfort food made from scratch." ',
  },
  {
    id: 3,
    img: testimonial3,
    title: 'SC Sentinel',
    service: 'Journalist',
    link:'https://www.santacruzsentinel.com/2009/06/03/breakfast-has-a-starring-role-at-walnut-avenue-cafe/',
    description:
      '"The ambiance at Walnut Avenue mirrored its service: warm, relaxed, down-to-earth. Dozens of plants hung among the ceiling; The sundry seating included banquettes and tables, casual counter stools and curiously tiny two-tops."',
  },
 
];
