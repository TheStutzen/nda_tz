import * as i18n from 'i18n'

i18n.configure({
  locales: ['en', 'ru'],
  directory: './src/locales/lang',
  extension: '.json',
  defaultLocale: 'en',
  queryParameter: 'lang',
  cookie: 'lang',
  header: 'lang',
  autoReload: false,
  syncFiles: false,
  updateFiles: false,
  objectNotation: true
})

export default i18n
