<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
import * as THREE from "three";

			// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
			// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// var OrbitControls = require(" three-orbit-controls")(THREE);
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { FontLoader } from 'three';

export default {
  name: "TheCanvas",
  data() {
    return {};
  },
  mounted() {
    let scene = new THREE.Scene();
    let fontLoader = new THREE.FontLoader();

    fontLoader.load("../assets/font.json", (font) => {
      let bevelSize = 0.02;
      let textGeometry = new THREE.TextGeometry("123123", {
        font: font,
        size: 0.5,
        height: 0,
        curveSegments: 2,
        bevelEnabled: true,
        bevelThickness: 0.03,
        bevelSize,
        bevelOffset: 0,
        bevelSegments: 2,
      });
      textGeometry.center();
      let textMaterial = new THREE.MeshStandardMaterial({ wireframe: false });
      let text = new THREE.Mesh(textGeometry, textMaterial);
      scene.add(text);
    });
    let sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    let camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 4;

    let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    let pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.x = 2;
    pointLight.position.y = 3;
    pointLight.position.z = 4;
    scene.add(pointLight);
    scene.add(camera);

    let canvas = document.querySelector("#canvas");

    let controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;

    let renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);

    let tick = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };

    tick();

    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      // Update Camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  },
};
</script>
<style lang="scss">
</style>