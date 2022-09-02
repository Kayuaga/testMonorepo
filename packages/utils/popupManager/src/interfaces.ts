import { FC } from 'react'

interface IComponent {
  close: () => void
}

export enum EQuery {
  POPUP = 'popup',
}

export interface IConfig {
  [key: string]: FC<IComponent>
}
