# Express.js test app

API будет доступен по `localhost:3000`

[GET] http://localhost:3000/api/v1/exchange?money=5000

Эндпоинт принимает единственный query-параметр `money`
Количество купюр в банке доступно в `bank/money.js`
По умолчанию это:
```js
[
    {'rate': 1000, 'count': 5},
    {'rate': 500, 'count': 5},
    {'rate': 100, 'count': 5},
    {'rate': 50, 'count': 5},
    {'rate': 10, 'count': 5},
    {'rate': 5, 'count': 5},
    {'rate': 3, 'count': 5},
    {'rate': 1, 'count': 5},
]
```

## Запуск

```bash
npm i
npm start
```

## Nodemon Запуск

```bash
npm run dev
```
