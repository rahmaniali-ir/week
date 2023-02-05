export function capitalize(str: string) {
  if (!str) return '';

  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}
