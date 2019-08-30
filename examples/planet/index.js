console.log('engine', engine)

let earth = new engine.EarthViewer('page-content', {
    camera: {
        poseTo: { 
          lng: 40.0806517300019,
          lat: 69.30164428343042,
          alt: 5381218.414810358,
          north: 14.593612589954724,
          tilt: 28.613539993204636
        },
        flyTo: {
          lng: 40.0806517300019,
          lat: 69.30164428343042,
          alt: 5381218.414810358,
          north: 14.593612589954724,
          tilt: 28.613539993204636
        }
    },
    renderItems: {
      planet: 'earth',
      earthUseTexture: true,
      showOrbitRing: true,
      background: {
        transparent: false,
        opacity: 1,
        color: 0x272727,
        image: undefined
      },
      showDem: true,
      showPlanetWireframe: true
    }
})

if (Stats) {
    earth._stats = new Stats()
    earth.threeContainer.appendChild(earth._stats.dom)
}

let pose = {lng: 2.9140569337386957, lat: 9.483359221240466, alt: 128327.80865956678, north: 29.358947146100345, tilt: 74.30177840457195}

let pose2 = {lng: -6.417844292045522, lat: 12.226183652022733, alt: 86712.87473378573, north: 3.8738914224903622, tilt: 74.33863647397504}

// earth.renderer.domElement.addEventListener('click', (e) => {
//   // console.log(e)
//   let pt = earth.control.pickProjectContactPointInEarth({
//     rawX: e.x, rawY: e.y
//   }, 'planet')
//   // if (pt) {
//   //   console.log(pt)
//   // }
// })

      // setInterval(() => {
      //   earth.updateScene();
      // }, 1000/30)