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
      }
    }
})

if (Stats) {
    earth._stats = new Stats()
    earth.threeContainer.appendChild(earth._stats.dom)
}

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