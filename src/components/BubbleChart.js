import React from 'react';
import { InteractionManager, StyleSheet, View, Text, WebView, Platform} from 'react-native';
var Dimensions = require("Dimensions");
var { width, height } = Dimensions.get("window");

const _chartData = `
<!DOCTYPE html>
<html lang="en" >

<head>
  <meta charset="UTF-8">
  <title>·•● Bubble • Layout ●•·</title>
  <meta name="viewport"  content="width=768px, user-scalable=no" />

  
      <style>
      /* NOTE: The styles were added inline because Prefixfree needs access to your styles and they must be inlined if they are on local disk! */
      body {
  background: #28143f;
  font-size: 16px;
  margin: 0;
  padding: 0;
  user-select: none;
  overflow: hidden;
  font-family: Open Sans, sans-serif;
  min-width: 768px;
}
.curtain {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #28143f;
  z-index: 30;
  opacity: 1;
  transition: all 0.8s ease-out;
}
.curtain__progress {
  height: 0.0625rem;
  width: 9.375rem;
  border-radius: 0.25rem;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -4.6875rem;
  margin-top: -0.0625rem;
  transition: width 0.3s ease-out;
}
.curtain__progress-text,
.curtain__progress-text-gradient {
  position: absolute;
  color: #fff;
  font-size: 0.625rem;
  font-weight: 100;
  letter-spacing: 0.0875rem;
  position: absolute;
  margin-left: -4.6875rem;
  margin-top: -1.25rem;
  top: 50%;
  left: 50%;
}
.curtain__progress-text-gradient {
  width: 14.0625rem;
  height: 1rem;
  z-index: 1;
  transition: transform 0.3s ease-out;
  background: linear-gradient(to right, rgba(40,18,64,0) 20%, #281240 50%);
}
.curtain.is-hide {
  opacity: 0;
  z-index: 0;
}
.badge {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  color: #fff;
}
.wrapper {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
}
.particles {
  perspective: 500px;
  perspective-origin: 50% 50%;
  overflow: visible;
  position: relative;
  user-select: none;
  position: absolute;
  z-index: 1;
  tap-highlight-color: rgba(0,0,0,0);
  user-select: none;
  text-size-adjust: none;
}
.particle {
  width: 9.375rem;
  height: 9.375rem;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  display: block;
  line-height: 9.375rem;
}
.particle.is-open {
  z-index: 20;
}
.particle.is-open .particle__inner {
  transform: scale(15) translateZ(-1000px);
}
.particle.is-open .particle__content {
  display: block;
}
.particle__inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
}
.particle__over-mobile {
  display: none;
}
.desktop .particle__over-mobile {
  display: block;
}
.content {
  position: fixed;
  width: 33.75rem;
  height: 17.5rem;
  display: block;
  margin-left: -16.875rem;
  margin-top: -8.75rem;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translateX(-5000px);
}
.content__inner {
  position: absolute;
  width: 100%;
  height: 100%;
}
.content.is-show {
  display: block;
}
.project {
  color: #fff;
  position: relative;
  width: 100%;
  height: 100%;
}
.project__text,
.project__img {
  position: absolute;
  width: 50%;
  height: 100%;
}
.project__text {
  left: 57%;
  margin-top: 1.875rem;
  width: 40%;
  text-align: left;
  line-height: 1.6;
}
.project h2 {
  text-transform: uppercase;
}
.project__shadow-wrap {
  transform-origin: 100% center;
}
.project__shadow {
  position: absolute;
  width: 300px;
  height: 50px;
  opacity: 0;
  top: 204px;
  right: 8px;
  transform: rotateX(80deg);
  border-radius: 26px;
  background: linear-gradient(to right, rgba(58,8,57,0) 0%, rgba(58,8,57,0.65) 100%);
  transform-origin: 100% center;
}
.ie .project__shadow {
  display: none;
}
.by {
  background: #fff;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 1.75rem;
  width: 6.875rem;
  z-index: 40;
  opacity: 0.75;
  border-top-left-radius: 0.75rem;
}
.by:hover {
  opacity: 1;
}
.by__text {
  color: #28143f;
  font-size: 0.53125rem;
  letter-spacing: 0.0125rem;
  position: absolute;
  top: 0.5625rem;
}
.ios .by__text {
  top: 0.5rem;
}
.by__text--1 {
  left: 0.4375rem;
}
.by__text--2 {
  left: 4.375rem;
}
.by__logo {
  background: #f1f1f1;
  position: absolute;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: url("") no-repeat center;
center
  background-size: 100% 100%;
  top: 0.4375rem;
}
.ios .by__logo {
  top: 0.375rem;
}
.by__logo--mojs {
  left: 3.0625rem;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/mojs.svg");
}
.by__logo--legomushroom {
  left: 5.3125rem;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/legomushroom.svg");
}
.sprite__frame {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
}
.sprite__ellipse {
  fill: none;
  stroke: #fff;
}
.dust {
  position: absolute;
  width: 12.5rem;
  height: 12.5rem;
  height: 3.125rem;
}
.dust--1 {
  top: 16.875rem;
  left: 6.25rem;
}
.dust--2,
.dust--3 {
  top: 14.1875rem;
}
.dust--2 {
  left: -2.5rem;
  opacity: 0.9;
}
.dust--3 {
  left: -4.375rem;
  opacity: 0.7;
}
.blob-circle {
  position: absolute;
  top: -50%;
  left: -50%;
  z-index: 1;
  margin-left: -3.125rem;
  margin-top: -3.125rem;
  width: 6.25rem;
  height: 6.25rem;
}
.blob-circle-wrap {
  width: 0px;
  height: 0px;
  overflow: hidden;
}
.close {
  position: fixed;
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  top: 20%;
  left: -10%;
  z-index: -1;
  transition: opacity 0.25s ease-out;
  display: none;
}
.close:hover {
  cursor: pointer;
}
.close.is-show {
  display: block;
  opacity: 1;
  left: 75%;
  z-index: 10;
}
.image-ie {
  width: 16rem;
  height: 12rem;
  background: url("i/mojs-logo.png") no-repeat center center;
  background-size: 100% 100%;
  position: absolute;
  top: 2.8125rem;
  left: 0.5rem;
  border-radius: 0.9375rem;
  display: none;
}
.ie .image-ie {
  display: block;
}
.image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 100%;
  background: url("i/mojs-logo.png") no-repeat center center;
}
.ie .image {
  display: none;
}
.scene,
.shape,
.face,
.face-wrapper,
.cr {
  position: absolute;
  transform-style: preserve-3d;
}
.shape {
  opacity: 0;
}
.scene {
  width: 80em;
  height: 80em;
  top: 50%;
  left: 50%;
  margin: -40em 0 0 -40em;
  transform: rotateX(90deg);
}
.cub-1 .ft .photon-shader,
.cub-1 .bk .photon-shader,
.cub-1 .bm .photon-shader {
  background-color: #fff;
}
.cub-1 .ft .photon-shader,
.cub-1 .bk .photon-shader,
.cub-1 .rt .photon-shader,
.cub-1 .lt .photon-shader {
  background-color: #ccc;
}
.cub-1 .bm .photon-shader {
  background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/mojs-logo.png") no-repeat center center;
  background-size: 100% 100%;
}
.cub-1 .cr .photon-shader {
  background-color: #ccc;
}
.shape {
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  transform-origin: 50%;
}
.face,
.face-wrapper {
  overflow: hidden;
  transform-origin: 0 0;
  backface-visibility: hidden;
/* hidden by default, prevent blinking and other weird rendering glitchs */
}
.face {
  background-size: 100% 100% !important;
  background-position: center;
}
.face-wrapper .face {
  left: 100%;
  width: 100%;
  height: 100%;
}
.photon-shader {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.side {
  left: 50%;
}
.cr,
.cr .side {
  height: 100%;
}
[class*="cuboid"] .ft,
[class*="cuboid"] .bk {
  width: 100%;
  height: 100%;
}
[class*="cuboid"] .bk {
  left: 100%;
}
[class*="cuboid"] .rt {
  transform: rotateY(-90deg) translateX(-50%);
}
[class*="cuboid"] .lt {
  transform: rotateY(90deg) translateX(-50%);
}
[class*="cuboid"] .tp {
  transform: rotateX(90deg) translateY(-50%);
}
[class*="cuboid"] .bm {
  transform: rotateX(-90deg) translateY(-50%);
}
[class*="cuboid"] .lt {
  left: 100%;
}
[class*="cuboid"] .bm {
  top: 100%;
}
/* .cub-1 styles */
.cub-1 {
  transform: translate3D(0em, 0em, 0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  width: 16em;
  height: 1em;
  margin: -0.5em 0 0 -8em;
}
.cub-1 .ft {
  transform: translateZ(6em);
}
.cub-1 .bk {
  transform: translateZ(-6em) rotateY(180deg);
}
.cub-1 .rt,
.cub-1 .lt {
  width: 12em;
  height: 1em;
}
.cub-1 .tp,
.cub-1 .bm {
  width: 16em;
  height: 12em;
}
.cub-1 .face {
  background-color: #fff;
}
.cub-1 .ft {
  width: 14em;
  margin-left: 1em;
}
.cub-1 .bk {
  width: 14em;
  margin-left: -1em;
}
.cub-1 .rt,
.cub-1 .lt {
  width: 10em;
}
.cub-1 .tp,
.cub-1 .bm,
.cub-1 .tp .photon-shader,
.cub-1 .bm .photon-shader {
  border-radius: 1em;
}
.cub-1 .cr {
  width: 1em;
  left: 0.5em;
}
.cub-1 .cr-0 {
  transform: translate3D(14em, 0, 5em);
}
.cub-1 .cr-1 {
  transform: translate3D(14em, 0, -5em);
}
.cub-1 .cr-2 {
  transform: translate3D(0, 0, -5em);
}
.cub-1 .cr-3 {
  transform: translate3D(0, 0, 5em);
}
.cub-1 .cr-0 .s0 {
  transform: rotateY(15deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-0 .s1 {
  transform: rotateY(45deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-0 .s2 {
  transform: rotateY(75deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-1 .s0 {
  transform: rotateY(105deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-1 .s1 {
  transform: rotateY(135deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-1 .s2 {
  transform: rotateY(165deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-2 .s0 {
  transform: rotateY(195deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-2 .s1 {
  transform: rotateY(225deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-2 .s2 {
  transform: rotateY(255deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-3 .s0 {
  transform: rotateY(285deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-3 .s1 {
  transform: rotateY(315deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .cr-3 .s2 {
  transform: rotateY(345deg) translate3D(-50%, 0, 0.975em);
}
.cub-1 .side {
  width: 0.560898384862245em;
}

    </style>

    

</head>

<body>

  <head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=768px, user-scalable=no"/>
</head>
<body>
  <div class="by">
    <div class="by__text by__text--1">demo for</div>
    <div class="by__text by__text--2">by</div><a href="https://github.com/legomushroom/mojs" title="mojs github page" class="by__logo by__logo--mojs"></a><a href="https://twitter.com/legomushroom" title="@legomushroom on twitter" class="by__logo by__logo--legomushroom"></a>
  </div>
  <div id="js-curtain" class="curtain">
    <div class="curtain__progress-text">loading..</div>
    <div id="js-progress-gradient" class="curtain__progress-text-gradient"></div>
    <div id="js-progress" class="curtain__progress"></div>
  </div>
  <div id="js-close-btn" class="close">
    <div id="js-close-btn-inner" class="close__inner"></div>
  </div>
  <div id="js-content" class="content">
    <div id="js-dust-1" class="dust dust--1 sprite">
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="0" ry="0" stroke-width="10" stroke-dasharray="0" stroke-dashoffset="0" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="1.6" ry="0.2" stroke-width="9.8" stroke-dasharray="3.4" stroke-dashoffset="6.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="3.2" ry="0.4" stroke-width="9.6" stroke-dasharray="6.8" stroke-dashoffset="13.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="4.800000000000001" ry="0.6000000000000001" stroke-width="9.4" stroke-dasharray="10.2" stroke-dashoffset="20.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="6.4" ry="0.8" stroke-width="9.2" stroke-dasharray="13.6" stroke-dashoffset="27.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="8" ry="1" stroke-width="9" stroke-dasharray="17" stroke-dashoffset="34" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="9.600000000000001" ry="1.2000000000000002" stroke-width="8.8" stroke-dasharray="20.4" stroke-dashoffset="40.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="11.200000000000001" ry="1.4000000000000001" stroke-width="8.6" stroke-dasharray="23.8" stroke-dashoffset="47.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="12.8" ry="1.6" stroke-width="8.4" stroke-dasharray="27.2" stroke-dashoffset="54.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="14.4" ry="1.8" stroke-width="8.2" stroke-dasharray="30.599999999999998" stroke-dashoffset="61.199999999999996" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="16" ry="2" stroke-width="8" stroke-dasharray="34" stroke-dashoffset="68" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="17.6" ry="2.2" stroke-width="7.8" stroke-dasharray="37.4" stroke-dashoffset="74.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="19.200000000000003" ry="2.4000000000000004" stroke-width="7.6" stroke-dasharray="40.8" stroke-dashoffset="81.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="20.8" ry="2.6" stroke-width="7.4" stroke-dasharray="44.199999999999996" stroke-dashoffset="88.39999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="22.400000000000002" ry="2.8000000000000003" stroke-width="7.199999999999999" stroke-dasharray="47.6" stroke-dashoffset="95.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="24" ry="3" stroke-width="7" stroke-dasharray="51" stroke-dashoffset="102" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="25.6" ry="3.2" stroke-width="6.8" stroke-dasharray="54.4" stroke-dashoffset="108.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="27.200000000000003" ry="3.4000000000000004" stroke-width="6.6" stroke-dasharray="57.8" stroke-dashoffset="115.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="28.8" ry="3.6" stroke-width="6.4" stroke-dasharray="61.199999999999996" stroke-dashoffset="122.39999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="30.400000000000002" ry="3.8000000000000003" stroke-width="6.199999999999999" stroke-dasharray="64.6" stroke-dashoffset="129.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="32" ry="4" stroke-width="6" stroke-dasharray="68" stroke-dashoffset="136" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="33.6" ry="4.2" stroke-width="5.8" stroke-dasharray="71.39999999999999" stroke-dashoffset="142.79999999999998" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="35.2" ry="4.4" stroke-width="5.6" stroke-dasharray="74.8" stroke-dashoffset="149.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="36.800000000000004" ry="4.6000000000000005" stroke-width="5.3999999999999995" stroke-dasharray="78.2" stroke-dashoffset="156.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="38.400000000000006" ry="4.800000000000001" stroke-width="5.199999999999999" stroke-dasharray="81.6" stroke-dashoffset="163.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="40" ry="5" stroke-width="5" stroke-dasharray="85" stroke-dashoffset="170" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="41.6" ry="5.2" stroke-width="4.8" stroke-dasharray="88.39999999999999" stroke-dashoffset="176.79999999999998" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="43.2" ry="5.4" stroke-width="4.6" stroke-dasharray="91.8" stroke-dashoffset="183.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="44.800000000000004" ry="5.6000000000000005" stroke-width="4.3999999999999995" stroke-dasharray="95.2" stroke-dashoffset="190.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="46.400000000000006" ry="5.800000000000001" stroke-width="4.199999999999999" stroke-dasharray="98.6" stroke-dashoffset="197.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="48" ry="6" stroke-width="4" stroke-dasharray="102" stroke-dashoffset="204" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="49.6" ry="6.2" stroke-width="3.8" stroke-dasharray="105.39999999999999" stroke-dashoffset="210.79999999999998" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="51.2" ry="6.4" stroke-width="3.5999999999999996" stroke-dasharray="108.8" stroke-dashoffset="217.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="52.800000000000004" ry="6.6000000000000005" stroke-width="3.3999999999999995" stroke-dasharray="112.2" stroke-dashoffset="224.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="54.400000000000006" ry="6.800000000000001" stroke-width="3.1999999999999993" stroke-dasharray="115.6" stroke-dashoffset="231.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="56" ry="7" stroke-width="3" stroke-dasharray="119" stroke-dashoffset="238" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="57.6" ry="7.2" stroke-width="2.8" stroke-dasharray="122.39999999999999" stroke-dashoffset="244.79999999999998" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="59.2" ry="7.4" stroke-width="2.5999999999999996" stroke-dasharray="125.8" stroke-dashoffset="251.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="60.800000000000004" ry="7.6000000000000005" stroke-width="2.3999999999999995" stroke-dasharray="129.2" stroke-dashoffset="258.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="62.400000000000006" ry="7.800000000000001" stroke-width="2.1999999999999993" stroke-dasharray="132.6" stroke-dashoffset="265.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="64" ry="8" stroke-width="2" stroke-dasharray="136" stroke-dashoffset="272" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="65.60000000000001" ry="8.200000000000001" stroke-width="1.799999999999999" stroke-dasharray="139.4" stroke-dashoffset="278.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="67.2" ry="8.4" stroke-width="1.5999999999999996" stroke-dasharray="142.79999999999998" stroke-dashoffset="285.59999999999997" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="68.8" ry="8.6" stroke-width="1.4000000000000004" stroke-dasharray="146.2" stroke-dashoffset="292.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="70.4" ry="8.8" stroke-width="1.1999999999999993" stroke-dasharray="149.6" stroke-dashoffset="299.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="72" ry="9" stroke-width="1" stroke-dasharray="153" stroke-dashoffset="306" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="73.60000000000001" ry="9.200000000000001" stroke-width="0.7999999999999989" stroke-dasharray="156.4" stroke-dashoffset="312.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="75.2" ry="9.4" stroke-width="0.5999999999999996" stroke-dasharray="159.79999999999998" stroke-dashoffset="319.59999999999997" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="76.80000000000001" ry="9.600000000000001" stroke-width="0.3999999999999986" stroke-dasharray="163.2" stroke-dashoffset="326.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="78.4" ry="9.8" stroke-width="0.1999999999999993" stroke-dasharray="166.6" stroke-dashoffset="333.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
    </div>
    <div id="js-dust-2" class="dust dust--2 sprite">
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="0" ry="0" stroke-width="8" stroke-dasharray="0" stroke-dashoffset="0" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="1" ry="0.16" stroke-width="7.84" stroke-dasharray="3.6" stroke-dashoffset="1.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="2" ry="0.32" stroke-width="7.68" stroke-dasharray="7.2" stroke-dashoffset="2.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="3" ry="0.48" stroke-width="7.52" stroke-dasharray="10.8" stroke-dashoffset="4.199999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="4" ry="0.64" stroke-width="7.36" stroke-dasharray="14.4" stroke-dashoffset="5.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="5" ry="0.8" stroke-width="7.2" stroke-dasharray="18" stroke-dashoffset="7" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="6" ry="0.96" stroke-width="7.04" stroke-dasharray="21.6" stroke-dashoffset="8.399999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="7" ry="1.12" stroke-width="6.88" stroke-dasharray="25.2" stroke-dashoffset="9.799999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="8" ry="1.28" stroke-width="6.72" stroke-dasharray="28.8" stroke-dashoffset="11.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="9" ry="1.44" stroke-width="6.5600000000000005" stroke-dasharray="32.4" stroke-dashoffset="12.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="10" ry="1.6" stroke-width="6.4" stroke-dasharray="36" stroke-dashoffset="14" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="11" ry="1.76" stroke-width="6.24" stroke-dasharray="39.6" stroke-dashoffset="15.399999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="12" ry="1.92" stroke-width="6.08" stroke-dasharray="43.2" stroke-dashoffset="16.799999999999997" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="13" ry="2.08" stroke-width="5.92" stroke-dasharray="46.800000000000004" stroke-dashoffset="18.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="14" ry="2.24" stroke-width="5.76" stroke-dasharray="50.4" stroke-dashoffset="19.599999999999998" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="15" ry="2.4" stroke-width="5.6" stroke-dasharray="54" stroke-dashoffset="21" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="16" ry="2.56" stroke-width="5.4399999999999995" stroke-dasharray="57.6" stroke-dashoffset="22.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="17" ry="2.72" stroke-width="5.279999999999999" stroke-dasharray="61.2" stroke-dashoffset="23.799999999999997" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="18" ry="2.88" stroke-width="5.12" stroke-dasharray="64.8" stroke-dashoffset="25.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="19" ry="3.04" stroke-width="4.96" stroke-dasharray="68.4" stroke-dashoffset="26.599999999999998" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="20" ry="3.2" stroke-width="4.8" stroke-dasharray="72" stroke-dashoffset="28" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="21" ry="3.36" stroke-width="4.640000000000001" stroke-dasharray="75.60000000000001" stroke-dashoffset="29.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="22" ry="3.52" stroke-width="4.48" stroke-dasharray="79.2" stroke-dashoffset="30.799999999999997" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="23" ry="3.68" stroke-width="4.32" stroke-dasharray="82.8" stroke-dashoffset="32.199999999999996" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="24" ry="3.84" stroke-width="4.16" stroke-dasharray="86.4" stroke-dashoffset="33.599999999999994" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="25" ry="4" stroke-width="4" stroke-dasharray="90" stroke-dashoffset="35" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="26" ry="4.16" stroke-width="3.84" stroke-dasharray="93.60000000000001" stroke-dashoffset="36.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="27" ry="4.32" stroke-width="3.6799999999999997" stroke-dasharray="97.2" stroke-dashoffset="37.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="28" ry="4.48" stroke-width="3.5199999999999996" stroke-dasharray="100.8" stroke-dashoffset="39.199999999999996" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="29" ry="4.64" stroke-width="3.3600000000000003" stroke-dasharray="104.4" stroke-dashoffset="40.599999999999994" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="30" ry="4.8" stroke-width="3.2" stroke-dasharray="108" stroke-dashoffset="42" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="31" ry="4.96" stroke-width="3.04" stroke-dasharray="111.60000000000001" stroke-dashoffset="43.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="32" ry="5.12" stroke-width="2.88" stroke-dasharray="115.2" stroke-dashoffset="44.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="33" ry="5.28" stroke-width="2.7199999999999998" stroke-dasharray="118.8" stroke-dashoffset="46.199999999999996" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="34" ry="5.44" stroke-width="2.5599999999999996" stroke-dasharray="122.4" stroke-dashoffset="47.599999999999994" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="35" ry="5.6000000000000005" stroke-width="2.3999999999999995" stroke-dasharray="126" stroke-dashoffset="49" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="36" ry="5.76" stroke-width="2.24" stroke-dasharray="129.6" stroke-dashoffset="50.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="37" ry="5.92" stroke-width="2.08" stroke-dasharray="133.20000000000002" stroke-dashoffset="51.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="38" ry="6.08" stroke-width="1.92" stroke-dasharray="136.8" stroke-dashoffset="53.199999999999996" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="39" ry="6.24" stroke-width="1.7599999999999998" stroke-dasharray="140.4" stroke-dashoffset="54.599999999999994" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="40" ry="6.4" stroke-width="1.5999999999999996" stroke-dasharray="144" stroke-dashoffset="56" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="41" ry="6.5600000000000005" stroke-width="1.4399999999999995" stroke-dasharray="147.6" stroke-dashoffset="57.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="42" ry="6.72" stroke-width="1.2800000000000002" stroke-dasharray="151.20000000000002" stroke-dashoffset="58.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="43" ry="6.88" stroke-width="1.12" stroke-dasharray="154.8" stroke-dashoffset="60.199999999999996" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="44" ry="7.04" stroke-width="0.96" stroke-dasharray="158.4" stroke-dashoffset="61.599999999999994" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="45" ry="7.2" stroke-width="0.7999999999999998" stroke-dasharray="162" stroke-dashoffset="62.99999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="46" ry="7.36" stroke-width="0.6399999999999997" stroke-dasharray="165.6" stroke-dashoffset="64.39999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="47" ry="7.5200000000000005" stroke-width="0.47999999999999954" stroke-dasharray="169.20000000000002" stroke-dashoffset="65.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="48" ry="7.68" stroke-width="0.3200000000000003" stroke-dasharray="172.8" stroke-dashoffset="67.19999999999999" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="49" ry="7.84" stroke-width="0.16000000000000014" stroke-dasharray="176.4" stroke-dashoffset="68.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
    </div>
    <div id="js-dust-3" class="dust dust--3 sprite">
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="0" ry="0" stroke-width="5" stroke-dasharray="0" stroke-dashoffset="0" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="0.6" ry="0.08" stroke-width="4.9" stroke-dasharray="1.8" stroke-dashoffset="0.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="1.2" ry="0.16" stroke-width="4.8" stroke-dasharray="3.6" stroke-dashoffset="0.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="1.7999999999999998" ry="0.24" stroke-width="4.7" stroke-dasharray="5.4" stroke-dashoffset="1.2000000000000002" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="2.4" ry="0.32" stroke-width="4.6" stroke-dasharray="7.2" stroke-dashoffset="1.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="3" ry="0.4" stroke-width="4.5" stroke-dasharray="9" stroke-dashoffset="2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="3.5999999999999996" ry="0.48" stroke-width="4.4" stroke-dasharray="10.8" stroke-dashoffset="2.4000000000000004" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="4.2" ry="0.56" stroke-width="4.3" stroke-dasharray="12.6" stroke-dashoffset="2.8000000000000003" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="4.8" ry="0.64" stroke-width="4.2" stroke-dasharray="14.4" stroke-dashoffset="3.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="5.3999999999999995" ry="0.72" stroke-width="4.1" stroke-dasharray="16.2" stroke-dashoffset="3.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="6" ry="0.8" stroke-width="4" stroke-dasharray="18" stroke-dashoffset="4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="6.6" ry="0.88" stroke-width="3.9" stroke-dasharray="19.8" stroke-dashoffset="4.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="7.199999999999999" ry="0.96" stroke-width="3.8" stroke-dasharray="21.6" stroke-dashoffset="4.800000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="7.8" ry="1.04" stroke-width="3.7" stroke-dasharray="23.400000000000002" stroke-dashoffset="5.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="8.4" ry="1.12" stroke-width="3.5999999999999996" stroke-dasharray="25.2" stroke-dashoffset="5.6000000000000005" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="9" ry="1.2" stroke-width="3.5" stroke-dasharray="27" stroke-dashoffset="6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="9.6" ry="1.28" stroke-width="3.4" stroke-dasharray="28.8" stroke-dashoffset="6.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="10.2" ry="1.36" stroke-width="3.3" stroke-dasharray="30.6" stroke-dashoffset="6.800000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="10.799999999999999" ry="1.44" stroke-width="3.2" stroke-dasharray="32.4" stroke-dashoffset="7.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="11.4" ry="1.52" stroke-width="3.0999999999999996" stroke-dasharray="34.2" stroke-dashoffset="7.6000000000000005" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="12" ry="1.6" stroke-width="3" stroke-dasharray="36" stroke-dashoffset="8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="12.6" ry="1.68" stroke-width="2.9" stroke-dasharray="37.800000000000004" stroke-dashoffset="8.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="13.2" ry="1.76" stroke-width="2.8" stroke-dasharray="39.6" stroke-dashoffset="8.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="13.799999999999999" ry="1.84" stroke-width="2.6999999999999997" stroke-dasharray="41.4" stroke-dashoffset="9.200000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="14.399999999999999" ry="1.92" stroke-width="2.5999999999999996" stroke-dasharray="43.2" stroke-dashoffset="9.600000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="15" ry="2" stroke-width="2.5" stroke-dasharray="45" stroke-dashoffset="10" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="15.6" ry="2.08" stroke-width="2.4" stroke-dasharray="46.800000000000004" stroke-dashoffset="10.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="16.2" ry="2.16" stroke-width="2.3" stroke-dasharray="48.6" stroke-dashoffset="10.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="16.8" ry="2.24" stroke-width="2.1999999999999997" stroke-dasharray="50.4" stroke-dashoffset="11.200000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="17.4" ry="2.32" stroke-width="2.0999999999999996" stroke-dasharray="52.2" stroke-dashoffset="11.600000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="18" ry="2.4" stroke-width="2" stroke-dasharray="54" stroke-dashoffset="12" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="18.599999999999998" ry="2.48" stroke-width="1.9" stroke-dasharray="55.800000000000004" stroke-dashoffset="12.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="19.2" ry="2.56" stroke-width="1.7999999999999998" stroke-dasharray="57.6" stroke-dashoffset="12.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="19.8" ry="2.64" stroke-width="1.6999999999999997" stroke-dasharray="59.4" stroke-dashoffset="13.200000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="20.4" ry="2.72" stroke-width="1.5999999999999996" stroke-dasharray="61.2" stroke-dashoffset="13.600000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="21" ry="2.8000000000000003" stroke-width="1.5" stroke-dasharray="63" stroke-dashoffset="14" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="21.599999999999998" ry="2.88" stroke-width="1.4" stroke-dasharray="64.8" stroke-dashoffset="14.4" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="22.2" ry="2.96" stroke-width="1.2999999999999998" stroke-dasharray="66.60000000000001" stroke-dashoffset="14.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="22.8" ry="3.04" stroke-width="1.1999999999999997" stroke-dasharray="68.4" stroke-dashoffset="15.200000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="23.4" ry="3.12" stroke-width="1.0999999999999996" stroke-dasharray="70.2" stroke-dashoffset="15.600000000000001" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="24" ry="3.2" stroke-width="1" stroke-dasharray="72" stroke-dashoffset="16" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="24.599999999999998" ry="3.2800000000000002" stroke-width="0.8999999999999995" stroke-dasharray="73.8" stroke-dashoffset="16.400000000000002" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="25.2" ry="3.36" stroke-width="0.7999999999999998" stroke-dasharray="75.60000000000001" stroke-dashoffset="16.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="25.8" ry="3.44" stroke-width="0.7000000000000002" stroke-dasharray="77.4" stroke-dashoffset="17.2" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="26.4" ry="3.52" stroke-width="0.5999999999999996" stroke-dasharray="79.2" stroke-dashoffset="17.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="27" ry="3.6" stroke-width="0.5" stroke-dasharray="81" stroke-dashoffset="18" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="27.599999999999998" ry="3.68" stroke-width="0.39999999999999947" stroke-dasharray="82.8" stroke-dashoffset="18.400000000000002" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="28.2" ry="3.7600000000000002" stroke-width="0.2999999999999998" stroke-dasharray="84.60000000000001" stroke-dashoffset="18.8" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="28.799999999999997" ry="3.84" stroke-width="0.1999999999999993" stroke-dasharray="86.4" stroke-dashoffset="19.200000000000003" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
      <svg class="sprite__frame">
        <ellipse id="js-blob-circle-ellipse" cx="100" cy="10" rx="29.4" ry="3.92" stroke-width="0.09999999999999964" stroke-dasharray="88.2" stroke-dashoffset="19.6" stroke-linecap="round" class="sprite__ellipse"></ellipse>
      </svg>
    </div>
    <div id="js-content-inner" class="content__inner">
      <div class="project">
        <div class="project__img">
          <div id="js-shadow-wrap" class="project__shadow-wrap">
            <div id="js-shadow" class="project__shadow"></div>
          </div>
          <div class="image-ie"></div>
          <div class="image">
            <div class="scene">
              <div class="shape cuboid-1 cub-1">
                <div class="face ft">
                  <div class="photon-shader"></div>
                </div>
                <div class="face bk">
                  <div class="photon-shader"></div>
                </div>
                <div class="face rt">
                  <div class="photon-shader"></div>
                </div>
                <div class="face lt">
                  <div class="photon-shader"></div>
                </div>
                <div class="face bm">
                  <div class="photon-shader"></div>
                </div>
                <div class="face tp">
                  <div class="photon-shader"></div>
                </div>
                <div class="cr cr-0">
                  <div class="face side s0">
                    <div class="photon-shader"> </div>
                  </div>
                  <div class="face side s1">
                    <div class="photon-shader"></div>
                  </div>
                  <div class="face side s2">
                    <div class="photon-shader"></div>
                  </div>
                </div>
                <div class="cr cr-1">
                  <div class="face side s0">
                    <div class="photon-shader"></div>
                  </div>
                  <div class="face side s1">
                    <div class="photon-shader"></div>
                  </div>
                  <div class="face side s2">
                    <div class="photon-shader"></div>
                  </div>
                </div>
                <div class="cr cr-2">
                  <div class="face side s0">
                    <div class="photon-shader"></div>
                  </div>
                  <div class="face side s1">
                    <div class="photon-shader"></div>
                  </div>
                  <div class="face side s2">
                    <div class="photon-shader"></div>
                  </div>
                </div>
                <div class="cr cr-3">
                  <div class="face side s0">
                    <div class="photon-shader"></div>
                  </div>
                  <div class="face side s1">
                    <div class="photon-shader"></div>
                  </div>
                  <div class="face side s2">
                    <div class="photon-shader"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="js-text" class="project__text">
          <h2>Some project</h2>
          <p>This section is intended to represent some project but for now has dummy placeholder and points to mo · js library.</p>
        </div>
      </div>
    </div>
  </div>
  <div id="js-badge" class="badge"></div>
  <div id="js-wrapper" class="wrapper">
    <div id="scroller" class="particles">
      <div class="blob-circle-wrap">
        <div id="js-blob-circle" class="blob-circle sprite">
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
          <svg class="sprite__frame">
            <ellipse id="js-blob-circle-ellipse" cx="50" cy="50" fill="none" class="sprite__ellipse"></ellipse>
          </svg>
        </div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="0" style="left: 0px; top: 0px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="0" style="left: 175px; top: 0px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="0" style="left: 350px; top: 0px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="0" style="left: 525px; top: 0px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="0" style="left: 700px; top: 0px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="0" style="left: 875px; top: 0px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="0" style="left: 1050px; top: 0px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="0" style="left: 1225px; top: 0px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="0" style="left: 1400px; top: 0px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="0" style="left: 1575px; top: 0px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="0" style="left: 1750px; top: 0px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="0" style="left: 1925px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="0" style="left: 2100px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="0" style="left: 2275px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="0" style="left: 2450px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="0" style="left: 2625px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="0" style="left: 2800px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="0" style="left: 2975px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="0" style="left: 3150px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="0" style="left: 3325px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="0" style="left: 3500px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="0" style="left: 3675px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="0" style="left: 3850px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="0" style="left: 4025px; top: 0px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="137.5" style="left: 87.5px; top: 137.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="137.5" style="left: 262.5px; top: 137.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="137.5" style="left: 437.5px; top: 137.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="137.5" style="left: 612.5px; top: 137.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="137.5" style="left: 787.5px; top: 137.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="137.5" style="left: 962.5px; top: 137.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="137.5" style="left: 1137.5px; top: 137.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="137.5" style="left: 1312.5px; top: 137.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="137.5" style="left: 1487.5px; top: 137.5px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="137.5" style="left: 1662.5px; top: 137.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="137.5" style="left: 1837.5px; top: 137.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="137.5" style="left: 2012.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="137.5" style="left: 2187.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="137.5" style="left: 2362.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="137.5" style="left: 2537.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="137.5" style="left: 2712.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="137.5" style="left: 2887.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="137.5" style="left: 3062.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="137.5" style="left: 3237.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="137.5" style="left: 3412.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="137.5" style="left: 3587.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="137.5" style="left: 3762.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="137.5" style="left: 3937.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="137.5" style="left: 4112.5px; top: 137.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="275" style="left: 0px; top: 275px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="275" style="left: 175px; top: 275px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="275" style="left: 350px; top: 275px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="275" style="left: 525px; top: 275px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="275" style="left: 700px; top: 275px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="275" style="left: 875px; top: 275px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="275" style="left: 1050px; top: 275px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="275" style="left: 1225px; top: 275px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="275" style="left: 1400px; top: 275px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="275" style="left: 1575px; top: 275px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="275" style="left: 1750px; top: 275px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="275" style="left: 1925px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="275" style="left: 2100px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="275" style="left: 2275px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="275" style="left: 2450px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="275" style="left: 2625px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="275" style="left: 2800px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="275" style="left: 2975px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="275" style="left: 3150px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="275" style="left: 3325px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="275" style="left: 3500px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="275" style="left: 3675px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="275" style="left: 3850px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="275" style="left: 4025px; top: 275px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="412.5" style="left: 87.5px; top: 412.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="412.5" style="left: 262.5px; top: 412.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="412.5" style="left: 437.5px; top: 412.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="412.5" style="left: 612.5px; top: 412.5px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="412.5" style="left: 787.5px; top: 412.5px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="412.5" style="left: 962.5px; top: 412.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="412.5" style="left: 1137.5px; top: 412.5px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="412.5" style="left: 1312.5px; top: 412.5px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="412.5" style="left: 1487.5px; top: 412.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="412.5" style="left: 1662.5px; top: 412.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="412.5" style="left: 1837.5px; top: 412.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="412.5" style="left: 2012.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="412.5" style="left: 2187.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="412.5" style="left: 2362.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="412.5" style="left: 2537.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="412.5" style="left: 2712.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="412.5" style="left: 2887.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="412.5" style="left: 3062.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="412.5" style="left: 3237.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="412.5" style="left: 3412.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="412.5" style="left: 3587.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="412.5" style="left: 3762.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="412.5" style="left: 3937.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="412.5" style="left: 4112.5px; top: 412.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="550" style="left: 0px; top: 550px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="550" style="left: 175px; top: 550px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="550" style="left: 350px; top: 550px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="550" style="left: 525px; top: 550px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="550" style="left: 700px; top: 550px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="550" style="left: 875px; top: 550px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="550" style="left: 1050px; top: 550px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="550" style="left: 1225px; top: 550px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="550" style="left: 1400px; top: 550px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="550" style="left: 1575px; top: 550px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="550" style="left: 1750px; top: 550px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="550" style="left: 1925px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="550" style="left: 2100px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="550" style="left: 2275px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="550" style="left: 2450px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="550" style="left: 2625px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="550" style="left: 2800px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="550" style="left: 2975px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="550" style="left: 3150px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="550" style="left: 3325px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="550" style="left: 3500px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="550" style="left: 3675px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="550" style="left: 3850px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="550" style="left: 4025px; top: 550px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="687.5" style="left: 87.5px; top: 687.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="687.5" style="left: 262.5px; top: 687.5px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="687.5" style="left: 437.5px; top: 687.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="687.5" style="left: 612.5px; top: 687.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="687.5" style="left: 787.5px; top: 687.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="687.5" style="left: 962.5px; top: 687.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="687.5" style="left: 1137.5px; top: 687.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="687.5" style="left: 1312.5px; top: 687.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="687.5" style="left: 1487.5px; top: 687.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="687.5" style="left: 1662.5px; top: 687.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="687.5" style="left: 1837.5px; top: 687.5px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="687.5" style="left: 2012.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="687.5" style="left: 2187.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="687.5" style="left: 2362.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="687.5" style="left: 2537.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="687.5" style="left: 2712.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="687.5" style="left: 2887.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="687.5" style="left: 3062.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="687.5" style="left: 3237.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="687.5" style="left: 3412.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="687.5" style="left: 3587.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="687.5" style="left: 3762.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="687.5" style="left: 3937.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="687.5" style="left: 4112.5px; top: 687.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="825" style="left: 0px; top: 825px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="825" style="left: 175px; top: 825px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="825" style="left: 350px; top: 825px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="825" style="left: 525px; top: 825px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="825" style="left: 700px; top: 825px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="825" style="left: 875px; top: 825px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="825" style="left: 1050px; top: 825px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="825" style="left: 1225px; top: 825px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="825" style="left: 1400px; top: 825px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="825" style="left: 1575px; top: 825px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="825" style="left: 1750px; top: 825px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="825" style="left: 1925px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="825" style="left: 2100px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="825" style="left: 2275px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="825" style="left: 2450px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="825" style="left: 2625px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="825" style="left: 2800px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="825" style="left: 2975px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="825" style="left: 3150px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="825" style="left: 3325px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="825" style="left: 3500px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="825" style="left: 3675px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="825" style="left: 3850px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="825" style="left: 4025px; top: 825px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="962.5" style="left: 87.5px; top: 962.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="962.5" style="left: 262.5px; top: 962.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="962.5" style="left: 437.5px; top: 962.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="962.5" style="left: 612.5px; top: 962.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="962.5" style="left: 787.5px; top: 962.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="962.5" style="left: 962.5px; top: 962.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="962.5" style="left: 1137.5px; top: 962.5px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="962.5" style="left: 1312.5px; top: 962.5px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="962.5" style="left: 1487.5px; top: 962.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="962.5" style="left: 1662.5px; top: 962.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="962.5" style="left: 1837.5px; top: 962.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="962.5" style="left: 2012.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="962.5" style="left: 2187.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="962.5" style="left: 2362.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="962.5" style="left: 2537.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="962.5" style="left: 2712.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="962.5" style="left: 2887.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="962.5" style="left: 3062.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="962.5" style="left: 3237.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="962.5" style="left: 3412.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="962.5" style="left: 3587.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="962.5" style="left: 3762.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="962.5" style="left: 3937.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="962.5" style="left: 4112.5px; top: 962.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="1100" style="left: 0px; top: 1100px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="1100" style="left: 175px; top: 1100px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="1100" style="left: 350px; top: 1100px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="1100" style="left: 525px; top: 1100px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="1100" style="left: 700px; top: 1100px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="1100" style="left: 875px; top: 1100px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="1100" style="left: 1050px; top: 1100px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="1100" style="left: 1225px; top: 1100px" class="particle">
        <div style="background: #FCB635" class="particle__inner">
             <img src="IMG_6271.jpg" alt="Trulli" width="150" height="150" style="border-radius: 50%;">
        </div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="1100" style="left: 1400px; top: 1100px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="1100" style="left: 1575px; top: 1100px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="1100" style="left: 1750px; top: 1100px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="1100" style="left: 1925px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="1100" style="left: 2100px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="1100" style="left: 2275px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="1100" style="left: 2450px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="1100" style="left: 2625px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="1100" style="left: 2800px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="1100" style="left: 2975px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="1100" style="left: 3150px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="1100" style="left: 3325px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="1100" style="left: 3500px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="1100" style="left: 3675px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="1100" style="left: 3850px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="1100" style="left: 4025px; top: 1100px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="1237.5" style="left: 87.5px; top: 1237.5px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="1237.5" style="left: 262.5px; top: 1237.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="1237.5" style="left: 437.5px; top: 1237.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="1237.5" style="left: 612.5px; top: 1237.5px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="1237.5" style="left: 787.5px; top: 1237.5px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="1237.5" style="left: 962.5px; top: 1237.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="1237.5" style="left: 1137.5px; top: 1237.5px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="1237.5" style="left: 1312.5px; top: 1237.5px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="1237.5" style="left: 1487.5px; top: 1237.5px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="1237.5" style="left: 1662.5px; top: 1237.5px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="1237.5" style="left: 1837.5px; top: 1237.5px" class="particle">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="1237.5" style="left: 2012.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="1237.5" style="left: 2187.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="1237.5" style="left: 2362.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="1237.5" style="left: 2537.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="1237.5" style="left: 2712.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="1237.5" style="left: 2887.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="1237.5" style="left: 3062.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="1237.5" style="left: 3237.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="1237.5" style="left: 3412.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="1237.5" style="left: 3587.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="1237.5" style="left: 3762.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="1237.5" style="left: 3937.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="1237.5" style="left: 4112.5px; top: 1237.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="1375" style="left: 0px; top: 1375px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="1375" style="left: 175px; top: 1375px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="1375" style="left: 350px; top: 1375px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="1375" style="left: 525px; top: 1375px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="1375" style="left: 700px; top: 1375px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="1375" style="left: 875px; top: 1375px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="1375" style="left: 1050px; top: 1375px" class="particle">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="1375" style="left: 1225px; top: 1375px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="1375" style="left: 1400px; top: 1375px" class="particle">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="1375" style="left: 1575px; top: 1375px" class="particle">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="1375" style="left: 1750px; top: 1375px" class="particle">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="1375" style="left: 1925px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="1375" style="left: 2100px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="1375" style="left: 2275px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="1375" style="left: 2450px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="1375" style="left: 2625px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="1375" style="left: 2800px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="1375" style="left: 2975px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="1375" style="left: 3150px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="1375" style="left: 3325px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="1375" style="left: 3500px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="1375" style="left: 3675px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="1375" style="left: 3850px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="1375" style="left: 4025px; top: 1375px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="1512.5" style="left: 87.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="1512.5" style="left: 262.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="1512.5" style="left: 437.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="1512.5" style="left: 612.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="1512.5" style="left: 787.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="1512.5" style="left: 962.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="1512.5" style="left: 1137.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="1512.5" style="left: 1312.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="1512.5" style="left: 1487.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="1512.5" style="left: 1662.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="1512.5" style="left: 1837.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="1512.5" style="left: 2012.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="1512.5" style="left: 2187.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="1512.5" style="left: 2362.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="1512.5" style="left: 2537.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="1512.5" style="left: 2712.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="1512.5" style="left: 2887.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="1512.5" style="left: 3062.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="1512.5" style="left: 3237.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="1512.5" style="left: 3412.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="1512.5" style="left: 3587.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="1512.5" style="left: 3762.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="1512.5" style="left: 3937.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="1512.5" style="left: 4112.5px; top: 1512.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="1650" style="left: 0px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="1650" style="left: 175px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="1650" style="left: 350px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="1650" style="left: 525px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="1650" style="left: 700px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="1650" style="left: 875px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="1650" style="left: 1050px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="1650" style="left: 1225px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="1650" style="left: 1400px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="1650" style="left: 1575px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="1650" style="left: 1750px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="1650" style="left: 1925px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="1650" style="left: 2100px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="1650" style="left: 2275px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="1650" style="left: 2450px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="1650" style="left: 2625px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="1650" style="left: 2800px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="1650" style="left: 2975px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="1650" style="left: 3150px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="1650" style="left: 3325px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="1650" style="left: 3500px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="1650" style="left: 3675px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="1650" style="left: 3850px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="1650" style="left: 4025px; top: 1650px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="1787.5" style="left: 87.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="1787.5" style="left: 262.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="1787.5" style="left: 437.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="1787.5" style="left: 612.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="1787.5" style="left: 787.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="1787.5" style="left: 962.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="1787.5" style="left: 1137.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="1787.5" style="left: 1312.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="1787.5" style="left: 1487.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="1787.5" style="left: 1662.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="1787.5" style="left: 1837.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="1787.5" style="left: 2012.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="1787.5" style="left: 2187.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="1787.5" style="left: 2362.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="1787.5" style="left: 2537.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="1787.5" style="left: 2712.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="1787.5" style="left: 2887.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="1787.5" style="left: 3062.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="1787.5" style="left: 3237.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="1787.5" style="left: 3412.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="1787.5" style="left: 3587.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="1787.5" style="left: 3762.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="1787.5" style="left: 3937.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="1787.5" style="left: 4112.5px; top: 1787.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="1925" style="left: 0px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="1925" style="left: 175px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="1925" style="left: 350px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="1925" style="left: 525px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="1925" style="left: 700px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="1925" style="left: 875px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="1925" style="left: 1050px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="1925" style="left: 1225px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="1925" style="left: 1400px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="1925" style="left: 1575px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="1925" style="left: 1750px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="1925" style="left: 1925px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="1925" style="left: 2100px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="1925" style="left: 2275px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="1925" style="left: 2450px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="1925" style="left: 2625px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="1925" style="left: 2800px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="1925" style="left: 2975px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="1925" style="left: 3150px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="1925" style="left: 3325px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="1925" style="left: 3500px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="1925" style="left: 3675px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="1925" style="left: 3850px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="1925" style="left: 4025px; top: 1925px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="2062.5" style="left: 87.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="2062.5" style="left: 262.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="2062.5" style="left: 437.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="2062.5" style="left: 612.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="2062.5" style="left: 787.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="2062.5" style="left: 962.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="2062.5" style="left: 1137.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="2062.5" style="left: 1312.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="2062.5" style="left: 1487.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="2062.5" style="left: 1662.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="2062.5" style="left: 1837.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="2062.5" style="left: 2012.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="2062.5" style="left: 2187.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="2062.5" style="left: 2362.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="2062.5" style="left: 2537.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="2062.5" style="left: 2712.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="2062.5" style="left: 2887.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="2062.5" style="left: 3062.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="2062.5" style="left: 3237.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="2062.5" style="left: 3412.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="2062.5" style="left: 3587.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="2062.5" style="left: 3762.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="2062.5" style="left: 3937.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="2062.5" style="left: 4112.5px; top: 2062.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="2200" style="left: 0px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="2200" style="left: 175px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="2200" style="left: 350px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="2200" style="left: 525px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="2200" style="left: 700px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="2200" style="left: 875px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="2200" style="left: 1050px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="2200" style="left: 1225px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="2200" style="left: 1400px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="2200" style="left: 1575px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="2200" style="left: 1750px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="2200" style="left: 1925px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="2200" style="left: 2100px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="2200" style="left: 2275px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="2200" style="left: 2450px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="2200" style="left: 2625px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="2200" style="left: 2800px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="2200" style="left: 2975px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="2200" style="left: 3150px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="2200" style="left: 3325px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="2200" style="left: 3500px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="2200" style="left: 3675px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="2200" style="left: 3850px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="2200" style="left: 4025px; top: 2200px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="2337.5" style="left: 87.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="2337.5" style="left: 262.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="2337.5" style="left: 437.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="2337.5" style="left: 612.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="2337.5" style="left: 787.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="2337.5" style="left: 962.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="2337.5" style="left: 1137.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="2337.5" style="left: 1312.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="2337.5" style="left: 1487.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="2337.5" style="left: 1662.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="2337.5" style="left: 1837.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="2337.5" style="left: 2012.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="2337.5" style="left: 2187.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="2337.5" style="left: 2362.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="2337.5" style="left: 2537.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="2337.5" style="left: 2712.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="2337.5" style="left: 2887.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="2337.5" style="left: 3062.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="2337.5" style="left: 3237.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="2337.5" style="left: 3412.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="2337.5" style="left: 3587.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="2337.5" style="left: 3762.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="2337.5" style="left: 3937.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="2337.5" style="left: 4112.5px; top: 2337.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="2475" style="left: 0px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="2475" style="left: 175px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="2475" style="left: 350px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="2475" style="left: 525px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="2475" style="left: 700px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="2475" style="left: 875px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="2475" style="left: 1050px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="2475" style="left: 1225px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="2475" style="left: 1400px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="2475" style="left: 1575px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="2475" style="left: 1750px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="2475" style="left: 1925px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="2475" style="left: 2100px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="2475" style="left: 2275px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="2475" style="left: 2450px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="2475" style="left: 2625px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="2475" style="left: 2800px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="2475" style="left: 2975px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="2475" style="left: 3150px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="2475" style="left: 3325px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="2475" style="left: 3500px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="2475" style="left: 3675px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="2475" style="left: 3850px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="2475" style="left: 4025px; top: 2475px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="2612.5" style="left: 87.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="2612.5" style="left: 262.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="2612.5" style="left: 437.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="2612.5" style="left: 612.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="2612.5" style="left: 787.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="2612.5" style="left: 962.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="2612.5" style="left: 1137.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="2612.5" style="left: 1312.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="2612.5" style="left: 1487.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="2612.5" style="left: 1662.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="2612.5" style="left: 1837.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="2612.5" style="left: 2012.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="2612.5" style="left: 2187.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="2612.5" style="left: 2362.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="2612.5" style="left: 2537.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="2612.5" style="left: 2712.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="2612.5" style="left: 2887.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="2612.5" style="left: 3062.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="2612.5" style="left: 3237.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="2612.5" style="left: 3412.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="2612.5" style="left: 3587.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="2612.5" style="left: 3762.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="2612.5" style="left: 3937.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="2612.5" style="left: 4112.5px; top: 2612.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="2750" style="left: 0px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="2750" style="left: 175px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="2750" style="left: 350px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="2750" style="left: 525px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="2750" style="left: 700px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="2750" style="left: 875px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="2750" style="left: 1050px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="2750" style="left: 1225px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="2750" style="left: 1400px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="2750" style="left: 1575px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="2750" style="left: 1750px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="2750" style="left: 1925px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="2750" style="left: 2100px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="2750" style="left: 2275px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="2750" style="left: 2450px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="2750" style="left: 2625px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="2750" style="left: 2800px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="2750" style="left: 2975px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="2750" style="left: 3150px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="2750" style="left: 3325px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="2750" style="left: 3500px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="2750" style="left: 3675px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="2750" style="left: 3850px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="2750" style="left: 4025px; top: 2750px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="2887.5" style="left: 87.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="2887.5" style="left: 262.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="2887.5" style="left: 437.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="2887.5" style="left: 612.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="2887.5" style="left: 787.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="2887.5" style="left: 962.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="2887.5" style="left: 1137.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="2887.5" style="left: 1312.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="2887.5" style="left: 1487.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="2887.5" style="left: 1662.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="2887.5" style="left: 1837.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="2887.5" style="left: 2012.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="2887.5" style="left: 2187.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="2887.5" style="left: 2362.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="2887.5" style="left: 2537.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="2887.5" style="left: 2712.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="2887.5" style="left: 2887.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="2887.5" style="left: 3062.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="2887.5" style="left: 3237.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="2887.5" style="left: 3412.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="2887.5" style="left: 3587.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="2887.5" style="left: 3762.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="2887.5" style="left: 3937.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="2887.5" style="left: 4112.5px; top: 2887.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="3025" style="left: 0px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="3025" style="left: 175px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="3025" style="left: 350px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="3025" style="left: 525px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="3025" style="left: 700px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="3025" style="left: 875px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="3025" style="left: 1050px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="3025" style="left: 1225px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="3025" style="left: 1400px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="3025" style="left: 1575px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="3025" style="left: 1750px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="3025" style="left: 1925px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="3025" style="left: 2100px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="3025" style="left: 2275px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="3025" style="left: 2450px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="3025" style="left: 2625px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="3025" style="left: 2800px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="3025" style="left: 2975px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="3025" style="left: 3150px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="3025" style="left: 3325px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="3025" style="left: 3500px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="3025" style="left: 3675px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="3025" style="left: 3850px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="3025" style="left: 4025px; top: 3025px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="87.5" data-top="3162.5" style="left: 87.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="262.5" data-top="3162.5" style="left: 262.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="437.5" data-top="3162.5" style="left: 437.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="612.5" data-top="3162.5" style="left: 612.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="787.5" data-top="3162.5" style="left: 787.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="962.5" data-top="3162.5" style="left: 962.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1137.5" data-top="3162.5" style="left: 1137.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1312.5" data-top="3162.5" style="left: 1312.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1487.5" data-top="3162.5" style="left: 1487.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1662.5" data-top="3162.5" style="left: 1662.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1837.5" data-top="3162.5" style="left: 1837.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="2012.5" data-top="3162.5" style="left: 2012.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2187.5" data-top="3162.5" style="left: 2187.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2362.5" data-top="3162.5" style="left: 2362.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2537.5" data-top="3162.5" style="left: 2537.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2712.5" data-top="3162.5" style="left: 2712.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2887.5" data-top="3162.5" style="left: 2887.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="3062.5" data-top="3162.5" style="left: 3062.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3237.5" data-top="3162.5" style="left: 3237.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3412.5" data-top="3162.5" style="left: 3412.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3587.5" data-top="3162.5" style="left: 3587.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3762.5" data-top="3162.5" style="left: 3762.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3937.5" data-top="3162.5" style="left: 3937.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4112.5" data-top="3162.5" style="left: 4112.5px; top: 3162.5px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-0" data-left="0" data-top="3300" style="left: 0px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-1" data-left="175" data-top="3300" style="left: 175px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-2" data-left="350" data-top="3300" style="left: 350px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-3" data-left="525" data-top="3300" style="left: 525px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-4" data-left="700" data-top="3300" style="left: 700px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-5" data-left="875" data-top="3300" style="left: 875px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-6" data-left="1050" data-top="3300" style="left: 1050px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-7" data-left="1225" data-top="3300" style="left: 1225px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-8" data-left="1400" data-top="3300" style="left: 1400px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-9" data-left="1575" data-top="3300" style="left: 1575px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-10" data-left="1750" data-top="3300" style="left: 1750px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-11" data-left="1925" data-top="3300" style="left: 1925px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-12" data-left="2100" data-top="3300" style="left: 2100px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #4A90E2" class="particle__inner"></div>
      </div>
      <div id="js-particle-13" data-left="2275" data-top="3300" style="left: 2275px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-14" data-left="2450" data-top="3300" style="left: 2450px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-15" data-left="2625" data-top="3300" style="left: 2625px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-16" data-left="2800" data-top="3300" style="left: 2800px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-17" data-left="2975" data-top="3300" style="left: 2975px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-18" data-left="3150" data-top="3300" style="left: 3150px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-19" data-left="3325" data-top="3300" style="left: 3325px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #11CDC5" class="particle__inner"></div>
      </div>
      <div id="js-particle-20" data-left="3500" data-top="3300" style="left: 3500px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
      <div id="js-particle-21" data-left="3675" data-top="3300" style="left: 3675px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #c1c1c1" class="particle__inner"></div>
      </div>
      <div id="js-particle-22" data-left="3850" data-top="3300" style="left: 3850px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FC2D79" class="particle__inner"></div>
      </div>
      <div id="js-particle-23" data-left="4025" data-top="3300" style="left: 4025px; top: 3300px" class="particle particle__over-mobile">
        <div style="background: #FCB635" class="particle__inner"></div>
      </div>
    </div>
  </div>
  <style>
    .particles {
      width:  1675px;
      height: 1200px;
      margin-left: -175px;
      margin-top: -175px;
    }
    .desktop .particles {
      width:  3865px;
      height: 2875px;
    }
  </style>
</body>
<script src='https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.26/howler.min.js'></script>
<script src='https://cdn.jsdelivr.net/mojs/0.119.0/mo.min.js'></script>
<script src='https://cdn.jsdelivr.net/hammerjs/2.0.4/hammer.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/iScroll/5.1.1/iscroll-probe.min.js'></script>

<script type="text/javascript" src="bubble.min.js"></script>




</body>

</html>
  `;


  const _chartData1 = `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
          <title>Animated 3D Bar Chart with CSS3</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
          <meta name="description" content="Animated 3D Bar Chart with CSS3" />
          <meta name="keywords" content="css3, bar chart, animation, 3d" />
          <meta name="author" content="Sergey Lukin for Codrops" />
          <link rel="shortcut icon" href="../favicon.ico"> 
          <link rel="stylesheet" type="text/css" href="demo.css" />
          <link rel="stylesheet" type="text/css" href="graph.css" />
          <link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:700,300,300italic' rel='stylesheet' type='text/css'>
          <!--[if lt IE 9]>
              <script type="text/javascript" src="js/modernizr.custom.04022.js"></script> 
              <style>.ie-note-1{display:block;} .main{display:none;}</style>
          <![endif]-->
          <!--[if IE 9]><style>.ie-note-2{display:block;}</style><![endif]-->
      </head>
      <body>
          <div class="container" style="">
   
  
              <section class="main">
                  
                  <span class="button-label">Size:</span>
                  <input type="radio" name="resize-graph" id="graph-small" /><label for="graph-small">Small</label>
                  <input type="radio" name="resize-graph" id="graph-normal" checked="checked" /><label for="graph-normal">Normal</label>
                  <input type="radio" name="resize-graph" id="graph-large" /><label for="graph-large">Large</label>   
  
                  <span class="button-label">Color:</span>
                  <input type="radio" name="paint-graph" id="graph-blue" checked="checked" /><label for="graph-blue">Blue</label>
                  <input type="radio" name="paint-graph" id="graph-green" /><label for="graph-green">Green</label>
                  <input type="radio" name="paint-graph" id="graph-rainbow" /><label for="graph-rainbow">Rainbow</label>
  
                  <span class="button-label">Product:</span>
                  <input type="radio" name="fill-graph" id="f-none" /><label for="f-none">None</label>
                  <input type="radio" name="fill-graph" id="f-product1" checked="checked" /><label for="f-product1">Product 1</label>
                  <input type="radio" name="fill-graph" id="f-product2" /><label for="f-product2">Product 2</label>
                  <input type="radio" name="fill-graph" id="f-product3" /><label for="f-product3">Product 3</label>
  
                  <ul class="graph-container">
                      <li>
                          <span>2008</span>
                          <div class="bar-wrapper">
                              <div class="bar-container">
                                  <div class="bar-background"></div>
                                  <div class="bar-inner">25</div>
                                  <div class="bar-foreground"></div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <span>2009</span>
                          <div class="bar-wrapper">
                              <div class="bar-container">
                                  <div class="bar-background"></div>
                                  <div class="bar-inner">50</div>
                                  <div class="bar-foreground"></div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <span>2010</span>
                          <div class="bar-wrapper">
                              <div class="bar-container">
                                  <div class="bar-background"></div>
                                  <div class="bar-inner">75</div>
                                  <div class="bar-foreground"></div>
                              </div>
                          </div>
                      </li>
               
                      <li>
                          <span>2012</span>
                          <div class="bar-wrapper">
                              <div class="bar-container">
                                  <div class="bar-background"></div>
                                  <div class="bar-inner">50</div>
                                  <div class="bar-foreground"></div>
                              </div>
                          </div>
                      </li>
                      <li>
                          <ul class="graph-marker-container">
                              <li style="bottom:25%;"><span>25%</span></li>
                              <li style="bottom:50%;"><span>50%</span></li>
                              <li style="bottom:75%;"><span>75%</span></li>
                              <li style="bottom:100%;"><span>100%</span></li>
                          </ul>
                      </li>
                  </ul>
  
              </section>
  
          </div>
  
      </body>
  </html>  
  `;
class BubbleChart extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <View  style={{ height: height }}>
                <WebView
                    source={{
                        html: _chartData1 ,
                        baseUrl:
                        Platform.OS == "ios" ? `file://${RNFS.MainBundlePath}/3dbar/` : `file:///android_asset/3dbar/`}}
                    style={styles.full}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={Platform.OS === 'ios' ? false : true}
                    scrollEnabled={false}
                    automaticallyAdjustContentInsets={true}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    full: {
      flex: 1,
      backgroundColor: "transparent"
    }
  });
export default BubbleChart;
