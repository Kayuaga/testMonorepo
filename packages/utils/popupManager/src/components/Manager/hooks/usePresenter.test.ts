import { jest } from '@jest/globals'
import { renderHook, act } from '@testing-library/react-hooks'
import { usePresenter } from './usePresenter'

describe('Testing Manager usePresenter hook', () => {
  const push = jest.fn()

  beforeEach(() => {
    const useRouter = jest.spyOn(require('next/router'), 'useRouter')
    useRouter.mockImplementation(() => ({
      query: { popup: 'sign_in' },
      asPath: '/?popup=sign_in',
      push,
    }))
  })

  it('should return correct value', () => {
    const {
      result: {
        current: { popup, goBack },
      },
    } = renderHook(() => usePresenter())

    expect(popup).toEqual('sign_in')
  })

  it('check goBack', async () => {
    const { result } = renderHook(() => usePresenter())

    await act(async () => {
      await result.current.goBack()
    })

    expect(push).toBeCalled()
    expect(push).toBeCalledWith('/', '', { shallow: true, scroll: false })
  })
})
