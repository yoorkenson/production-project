## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start:dev или npm run start:dev:vite - запуск сервера + frontend проекта в dev режиме
```


# Production-Project

Проект - блог, в котором есть несколько страниц.

В проекте _лениво подгружаются_ не только страницы, но и некоторые _редусеры_, _библиотеки_
Код оптимизирован, иcпользуется _code splitting_
На странице _Статей_ можно искать, сортировать статьи. Реализован функционал по подгрузке статей при скролле страницы.
На странице _Профиля_ пользователя, можно оценивать профиль, редактировать его.
На странице _Отдельной статьи_ можно оставить комментарий, оценить статью.
На странице _Настроек_ можно переключать новый дизайн, на старый дизайн и обратно.

В проекте реализован _роутинг_, _фейковая авторизация_ с разными ролями пользователей и соответствующим доступом к страницам.
В проекте используется три цветовые _темы_ и два языка(_английский и русский_)
Кроме того, проект загружен на удаленный сервер с использованием _nginx_ технологии
Проект покрыт _тестами_, в том числе интеграционными
На большую часть компонентов написаны _stories_, которые поддерживают и старый дизайн и новый дизайн
В проекте использован свой _кастомный eslint plugin_ - который проверяет правильное использование FSD архитектуры
Весь проект создан с использованием _FSD архитектуры_
Для более быстрой и оптимизированной работы были написаны [хуки](/src/shared/lib/hooks)

### Стек технологий

- Typescript
- React
- Redux Toolkit
- RTK Query
- Jest
- React Testing Library
- Cypress
- Storybook
- Chromatic
- ESLint
- StyleLint
- Prettier
- Webpack
- Vite
- Babel
- Nginx

----

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Хапуск unit тестов с jest
- `npm run test:ui` - Хапуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run prepare` - прекоммит хуки
- `npm run generate:slice` - Скрипт для генерации FSD слайсов

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами хранятся в public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация i18next - [https://react.i18next.com/](https://react.i18next.com/)

----

## Тесты

В проекте используются 4 вида тестов:
1) Обычные unit тесты на jest - `npm run test:unit`
2) Тесты на компоненты с React testing library -`npm run test:unit`
3) Скриншотное тестирование с loki `npm run test:ui`
4) e2e тестирование с Cypress `npm run test:e2e`

Подробнее о тестах - [документация тестирование](/docs/tests.md)

----

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin *eslint-plugin-right-path-fsd*,
который содержит 3 правила
1) path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2) layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entities)
3) public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

----
## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со сторикейсами создает рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:
- `npm run storybook`

Все декораторы для работы со storybook лежат в [папке](/src/shared/config/storybook)

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import { Meta, StoryObj } from "@storybook/react";

import { Article } from "@/entities/Article";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/theme";

import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
};

export default meta;
type Story = StoryObj<typeof ArticleRecommendationsList>;

export const Primary: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
        ],
        delay: 2000,
      },
    ],
  },
};

Primary.decorators = [StoreDecorator({})];

export const PrimaryDark: Story = {
  args: {},
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: [
          { ...article, id: "1" },
          { ...article, id: "2" },
          { ...article, id: "3" },
        ],
      },
    ],
  },
};

PrimaryDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
```

---

## Конфигурация проекта

Для разработки проект содержит 2 конфига:
1. Webpack - ./config/build
2. vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config
- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

Глобальные переменные окружения:
- __IS_DEV__ - режим разработки или продакшна
- __API__ - адрес API
- __PROJECT__ - 'storybook' | 'jest' | 'frontend' - для выбора среды (стори в storybook, тесты в jest или разработка)
----

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

----

### Работа с данными

Взаимодействие с данными осуществляется с помощью redux toolkit.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Работа с feature-flags

Разрешено использование feature flags только с помощью хелпера toggleFeatures

В него передается объект с опциями

   - name: название фича-флага
   - on: функция, которая отработает после включения фичи
   - off: функция, которая отработает после выключения фичи

Для автоматического удаления фичи использовать скрипт remove-features.ts
который принимает 2 аргумента
1. Название удаленного фича-флага
2. состояние (on/off)

----

## Сущности (entities)

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Фичи (features)

- [addCommentForm](/src/features/addCommentForm)
- [articleEditForm](/src/features/articleEditForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)
- [UI](/src/features/UI)

## Виджеты (widgets)

- [ArticleAdditionalInfo](/src/widgets/ArticleAdditionalInfo)
- [ArticlesFilters](/src/widgets/ArticlesFilters)
- [NavBar](/src/widgets/NavBar)
- [Page](/src/widgets/Page)
- [PageError](/src/widgets/PageError)
- [PageLoader](/src/widgets/PageLoader)
- [ScrollToolbar](src/widgets/ScrollToolbar)
- [SideBar](/src/widgets/SideBar)

## Страницы (pages)

- [AboutPage](/src/pages/AboutPage)
- [AdminPanelPage](/src/pages/AdminPanelPage)
- [ArticleDetailPage](/src/pages/ArticleDetailPage)
- [ArticleEditPage](/src/pages/ArticleEditPage)
- [ArticleListPage](/src/pages/ArticleListPage)
- [ForbiddenPage](/src/pages/ForbiddenPage)
- [MainPage](/src/pages/MainPage)
- [NotFoundPage](/src/pages/NotFoundPage)
- [ProfilePage](/src/pages/ProfilePage)
- [SettingsPage](/src/pages/SettingsPage)

## Общее (shared)

Общий слой содержит компоненты и другой код, который может быть использован везде без привязки к конкретной бизнес-логике

Содержит

-[Redesigned Components](/src/shared/ui/redesigned) -[Deprecated Components](/src/shared/ui/deprecated)