import { useRouter } from 'next/router'
import { jest } from '@jest/globals'

import { useQuery } from './useQuery'
import { EQuery } from '../../../interfaces'

jest.mock('next/router')

describe('Testing Manager useQuery hook', () => {
  beforeEach(() => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')
    useRouter.mockImplementation(() => ({
      query: { popup: 'sign_in' },
    }))
  })

  it('should return popup as string value', () => {
    const popup = useQuery(EQuery.POPUP)
    expect(typeof popup).toBe('string')
  })

  it('should return correct value', () => {
    const popup = useQuery(EQuery.POPUP)
    expect(popup).toEqual('sign_in')
  })
})
