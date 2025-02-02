function hex(c: number) {
  var s = '0123456789abcdef'
  var i = c
  if (i == 0 || isNaN(c)) return '00'
  i = Math.round(Math.min(Math.max(0, i), 255))
  return s.charAt((i - (i % 16)) / 16) + s.charAt(i % 16)
}

/* Convert an RGB triplet to a hex string */
function convertToHex(rgb: number[]) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2])
}

/* Remove '#' in color hex string */
function trim(s: string) {
  return s.charAt(0) == '#' ? s.substring(1, 7) : s
}

/* Convert a hex string to an RGB triplet */
export function convertToRGB(hex: string) {
  var color = []
  color[0] = parseInt(trim(hex).substring(0, 2), 16)
  color[1] = parseInt(trim(hex).substring(2, 4), 16)
  color[2] = parseInt(trim(hex).substring(4, 6), 16)
  return color
}

/**
 * Generates a gradient of colors between two given colors.
 *
 * @param {string} colorStart - the starting color of the gradient in RGB or HEX format.
 * @param {string} colorEnd - the ending color of the gradient in RGB or HEX format.
 * @param {number} colorCount - the number of colors to compute between the start and end colors.
 * @return {string[]} an array of color strings in HEX format representing the gradient.
 */
export function generateGradientColor(colorStart: string, colorEnd: string, colorCount: number) {
  // The beginning of your gradient
  var start = convertToRGB(colorStart)

  // The end of your gradient
  var end = convertToRGB(colorEnd)

  // The number of colors to compute
  var len = colorCount

  //Alpha blending amount
  var alpha = 0.0

  var saida = []

  for (var i = 0; i < len; i++) {
    var c = []
    alpha += 1.0 / len

    c[0] = start[0] * alpha + (1 - alpha) * end[0]
    c[1] = start[1] * alpha + (1 - alpha) * end[1]
    c[2] = start[2] * alpha + (1 - alpha) * end[2]

    saida.push(`#${convertToHex(c)}`)
  }

  return saida
}
