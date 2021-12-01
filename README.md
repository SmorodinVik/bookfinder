## 📚 Book Finder
Тестовое задание для Future-group.
### [bookfinder.vercel.app](https://bookfinder.vercel.app/)
---
### Задача была:
- Разработать React-приложение поиска книг с помощью [Google Books API](https://developers.google.com/books/docs/overview).
- Фильтрация по категориям: all, art, biography, computers, history, medical, poetry.
- Сортировка: relevance или newest.
- Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги, названия книги, названия категории и имен авторов.
- Над блоком с карточками отображается количество найденных по запросу книг.
- Пагинация по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.
- При клике на карточку происходит переход на детальную страницу книги.
- Верстка не должна ломаться при разрешениях от 320px до 1920px.

### В проекте мною были использованы:

**Redux Toolkit** - сильно облегчает работу с redux, из коробки имеет подключенный redux-thunk, а также позволяет использовать Redux DevTools.

**React-Redux** - для подключения Redux к React.

**React Router DOM** - маршрутизация между страницами (ResultsPage, BookPage, ErrorPage).

**Formik** - работа с формой поиска.

**i18next** - организация текстов интерфейса и плюрализация сообщения о количестве найденных книг. Позволяет легко добавить в приложение новый язык при необходимости.

**Axios** - взаимодействие с API.

**ESLint** - контроль качества кода и вылавливание глупых ошибок:)

**Webpack** - для сборки проекта.

**Vercel** - для деплоя.

***Отдельное спасибо за помощь в нахождении ошибок хочу сказать DevTools, Redux DevTools и конечно, console.log :)***

*К сожалению, я пока не имею опыта тестирования фронтенда. Знаком с библиотекой Jest, тестировал консольные приложения с ее помощью. Имею представление об ее применении к тестированию сайтов, благодаря встроенному в нее jsdom, позволяющему эмулировать функции браузера.*
