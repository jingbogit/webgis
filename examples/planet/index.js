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
      planet: {
        showDem: true,
        showPlanetWireframe: false
      }
    }
})

if (Stats) {
    earth._stats = new Stats()
    earth.threeContainer.appendChild(earth._stats.dom)
}
