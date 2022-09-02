## Предназначение

Пакет инкапсулирует создание хранилища и предоставляет доступ к его экземпляру.<br/>
Может использоваться для получения состояния приложения внутри отдельных npm-пакетов.

## Использование

**store.ts**
```js
import { createStore } from '@platform/store'
import { reducer as app } from './app'
import { reducer as games } from './games'
import { IRootState } from './interfaces'
import { ReducersMapObject } from 'redux'

// Собираем все редюсеры в один объект
const reducers: ReducersMapObject<IRootState> = {
  app,
  games,
}

// Создаем хранилище
createStore<IRootState>({ reducers })
```

**App.tsx**
```js
import { store } from '@platform/store'

export const App = () => {
  return (
    <Provider store={store}>
      <div id="app">
        My app
      </div>
    </Provider>
  )
}

export default App
```

## Meta

Функция `createStore` принимает один параметр в виде объекта: `createStore({ reducers })`

**Допустимые параметры в объекте:**

| Name                   | Type                   | Required | Description                                                                                                                                                                                                                                                                                   |
| ---------------------- | ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **reducers**               | `ReducersMapObject`    | true    | Объект редюсеров, который будут передан в combineReducers при создании хранилища |
