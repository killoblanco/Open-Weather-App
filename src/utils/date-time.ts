export const parse24hTime = (dateTime: string, locale: string = 'es-CO') => new Intl
  .DateTimeFormat(locale, {timeStyle: 'short'})
  .format(new Date(dateTime))
