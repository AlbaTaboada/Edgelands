import { BitmapText, Graphics } from 'pixi.js'
import { group, mean, polygonHull, polygonCentroid } from 'd3'
import { average, rgb, formatHex } from 'culori'

const splitInTwo = string => {
    const middle = Math.round(string.length / 2)
    for (let i = middle, j = middle; i < string.length || j >= 0; i++, j--) {
        if (string[i] === ' ') return string.substring(0, i) + '\n' + string.substring(i + 1)
        if (string[j] === ' ') return string.substring(0, j) + '\n' + string.substring(j + 1)
    }
    return string
}

const width = .6
const cellSize = 1
const bandwidth = 10
const thresholds = 10

export default entities => {

    const stage = new Graphics()
    stage.interactiveChildren = false
    stage.name = 'clusters'
    stage.alpha = 1
    s.viewport.addChild(stage)

    group(entities, e => e.cluster)
        .forEach(cluster => {

            const temperature = mean(cluster.map(e => e.temperature))
            const coordinates = cluster.map(e => [e.x, e.y])
            const polygon = polygonHull(coordinates)
            const center = polygonCentroid(polygon)
            // const colors = cluster.map(e => e['color'])
            const colors = cluster.map(e => rgb(parseInt(e['color'], 16).toString(16).padStart(6, '0')))
            const colorRGB = average(colors, 'rgb')
            const colorHex = formatHex(colorRGB)
            const color = '0x' + colorHex.substring(1)

            stage.lineStyle(.4, color)
            stage.beginFill(color, 0)
            // stage.alpha = .5
            polygon.forEach((p, i) => (i == 0) ? stage.moveTo(p[0], p[1]) : stage.lineTo(p[0], p[1]))
            stage.closePath()

            const bitmap = new BitmapText(
                // (temperature > 0) ? 'H' : 'L',
                splitInTwo(cluster[0].cluster_subject_x),
                {
                    fontName: 'Lato',
                    fontSize: 5,
                    align: 'center',
                    tint: (temperature > 0 ? 0xFF0000 : 0x0000FF),
                })

            bitmap.position.set(center[0] - bitmap.textWidth / 2, center[1] - bitmap.textHeight / 2)


            // const background = new Graphics()
            // background.lineStyle(.5, 0x00FF00, .6) // Draw contour to verify
            // background.beginFill(0xFFFFFF, 1)
            // background.drawRoundedRect(bitmap.x, bitmap.y + 1.5, bitmap.textWidth, bitmap.textHeight, 1)
            // stage.addChild(background)

            stage.addChild(bitmap)

            // s.bitmaps.push(bitmap)

        })


}