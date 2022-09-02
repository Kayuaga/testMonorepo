import { useCallback } from 'react'
import { useRouter } from 'next/router'

import { useQuery } from './useQuery'
import { EQuery } from '../../../interfaces'

interface IPresenter {
  popup: string
  goBack: () => void
}

export const usePresenter = (): IPresenter => {
  const router = useRouter()
  const popup = useQuery<string>(EQuery.POPUP)

  const goBack = useCallback(async () => {
    const backPathWithoutQuery = router.asPath.split('?')[0]
    await router.push(backPathWithoutQuery, '', { shallow: true, scroll: false })
  }, [router])

  return { popup, goBack }
}
