const HSLRegExp = /hsl\((\d+)deg \d+% \d+%\)/;

export function isHSLColor(color: string) {
  return HSLRegExp.test(color);
}

export function getHueFromHSLColor(color: string) {
  if (!isHSLColor(color)) return 0;

  return Number(color.match(HSLRegExp)?.[1]);
}
