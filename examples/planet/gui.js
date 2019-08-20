
let gui = new dat.GUI()

var control = {
  map: 'build-in-0',
  showWireframe: false
}

let maps = {
  // build-in maps
  ['build-in-0']: new engine.EarthWmtsTileURL('mapName0', 'default'),
  ['build-in-1']: new engine.EarthWmtsTileURL('mapName1', 'Carto-Dark'),
  ['build-in-2']: new engine.EarthWmtsTileURL('mapName2', 'Google-Terrain'),
  // customize
  ['Customize-map']: new engine.EarthWmtsTileURL('mapName3', function (level, x, y) {
    return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/${level}/${y}/${x}`
  }),
  // https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}
  ['Customize-map2']: new engine.EarthWmtsTileURL('mapName4', function (level, x, y) {
    let idx = (level + x + y + 2) % 4
    let s = ['a', 'b', 'c', 'd'][idx]

    return `https://stamen-tiles-${s}.a.ssl.fastly.net/watercolor/${level}/${x}/${y}.jpg`
  }),
  ['alti-static']: new engine.EarthWmtsTileURL('mapName5', function (level, x, y) {
    if (level < 8) {
      // y = Math.pow(2, level) - 1 - y
      // https://cloudfront.altizure.com/bluemarble/dem201906/0/0/0.png
      return `https://cloudfront.altizure.com/bluemarble/dem201906/${level}/${x}/${y}.png`
    }
  }),
  // https://api.mapbox.com/v4/mapbox.terrain-rgb/0/0/0.pngraw?access_token=pk.eyJ1IjoibGl1amluZ2JvIiwiYSI6ImNqeHJuMDY5YjA1ZHIzaHBnODQwNHhmOWsifQ.32QUlK4sb6-FIRJxLyS1uw
  ['mapbox-terrain-rgb']: new engine.EarthWmtsTileURL('mapName6', function (level, x, y) {
    // if (level < 8) {
    return `https://api.mapbox.com/v4/mapbox.terrain-rgb/${level}/${x}/${y}.pngraw?access_token=pk.eyJ1IjoibGl1amluZ2JvIiwiYSI6ImNqeHJuMDY5YjA1ZHIzaHBnODQwNHhmOWsifQ.32QUlK4sb6-FIRJxLyS1uw`
    // }
  })
}

gui.add(control, 'map', [ 'build-in-0', 'build-in-1', 'build-in-2', 'Customize-map', 'Customize-map2', 'alti-static', 'mapbox-terrain-rgb' ] ).onChange((val) => {
  console.log(val)
  earth.renderItems.planet.wmtsTileURL = maps[val]
})

gui.add(control, 'showWireframe').onChange((val) => {
  console.log(val)
  earth.renderItems.planet.showPlanetWireframe = val
  // earth.renderItems.planet.wmtsTileURL = maps[val]
})
// function setupuiformtl (linemtl) {
//   gui.add(linemtl, 'heightInterval', 1, 100, 1).onChange(function (v) {
//     linemtl.heightInterval = v
//   })
//   gui.add(linemtl, 'mapAlpha', 0.0, 1.0, 0.01).onChange(function (v) {
//     linemtl.mapAlpha = v
//   })
//   gui.add(linemtl, 'lineWidth', 0.01, 10.0, 0.01).onChange(function (v) {
//     linemtl.lineWidth = v
//   })
//   let colorobj = {
//     color: new THREE.Color().copy({
//       r: linemtl.color.r * 255,
//       g: linemtl.color.g * 255,
//       b: linemtl.color.b * 255
//     })
//   }
//   gui.addColor(colorobj, 'color').onChange(function (v) {
//     colorobj.color = v
//     linemtl.color = new THREE.Color().copy({
//       r: v.r / 255,
//       g: v.g / 255,
//       b: v.b / 255
//     })
//   })
// }