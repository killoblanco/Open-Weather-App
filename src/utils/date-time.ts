export const parse24hTime = (dateTime: string, locale: string = 'es-CO') => new Intl
  .DateTimeFormat(locale, { timeStyle: 'short' })
  .format(new Date(dateTime))

export const parseShortDate = (dateTime: string, locale: string = 'es-CO') => new Intl
  .DateTimeFormat(locale, { dateStyle: 'short' })
  .format(new Date(dateTime))

export const parseRelativeTime = (dateTime: string, locale: string = 'es-CO') => new Intl
  .RelativeTimeFormat(locale, { numeric: 'auto' })
  .format(
    new Date(dateTime.replaceAll('-', '/')).getDate() - new Date().getDate(),
    'day'
  )
