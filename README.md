# NuxtJS модуль/плагин для сохранения координат скролла в SessionStorage

## Установка и настройка модуля/плагина

```code
npm i @rkaliev/nuxtjs-session-scroll-savior
```

Необходимо в nuxt.config.js в секции modules добавить:

```code
modules: [
    [
      '@rkaliev/nuxtjs-session-scroll-savior',
      {
        key?: string,
      },
    ],
  ],
```

Модуль/плагин добавляет обработчик события onbeforeunload и сохраняет координаты скролла в SessionStorage,
чтоб при перезагрузке страницы их восстановить.

key - необязательный параметр, задает название ключа по которому будут сохраняться координаты в SessionStorage.

Больше информации по Nuxt.js:

* [Ссылка на документацию Nuxt.js docs](https://nuxtjs.org).
* [Ссылка на документацию Nuxt.js Module docs](https://nuxtjs.org/api/internals-module-container#introduction).
