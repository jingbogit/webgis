
let gui = new dat.GUI()

var control = {
  map: 'build-in-0',
  showWireframe: false
}

let maps = {
  // build-in maps
  ['build-in-0']: new engine.EarthWmtsTileURL('mapName0', 'default'),
  ['build-in-1']: new engine.EarthWmtsTileURL('mapName1', 'Carto-Dark'),
  // customize
  ['Customize-map']: new engine.EarthWmtsTileURL('mapName2', function (level, x, y) {
    return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/${level}/${y}/${x}`
  }),
  // https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}
  ['Customize-map2']: new engine.EarthWmtsTileURL('mapName3', function (level, x, y) {
    let idx = (level + x + y + 2) % 4
    let s = ['a', 'b', 'c', 'd'][idx]

    return `https://stamen-tiles-${s}.a.ssl.fastly.net/watercolor/${level}/${x}/${y}.jpg`
  })
}
const keys = Object.keys(maps)

gui.add(control, 'map', keys).onChange((val) => {
  console.log(val)
  earth.renderItems.planet.wmtsTileURL = maps[val]
})

gui.add(control, 'showWireframe').onChange((val) => {
  earth.renderItems.planet.showPlanetWireframe = val
})
