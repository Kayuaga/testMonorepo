import React, { FC } from 'react'

import { IConfig } from '../../interfaces'

import { usePresenter } from './hooks/usePresenter'

interface IProps {
  config: IConfig
}
export const Manager: FC<IProps> = ({ config }) => {
  const { popup, goBack } = usePresenter()
  const ModalWindow = config[popup]

  return <>{Boolean(ModalWindow) && <ModalWindow close={goBack} />}</>
}
