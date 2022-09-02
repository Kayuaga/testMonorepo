import { useRouter } from 'next/router'

import { EQuery } from '../../../interfaces'

export const useQuery = <T extends string>(popupName: EQuery): T => {
  const router = useRouter()
  const query = router.query
  return query[popupName] as T
}
