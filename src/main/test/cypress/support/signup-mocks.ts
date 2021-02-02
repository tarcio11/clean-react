import * as Helper from './http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const mockUnexpectedErrorError = (): void => Helper.mockUnexpectedErrorError(/signup/, 'POST')
export const mockOk = (): void => Helper.mockOk(/signup/, 'POST', { accessToken: faker.random.uuid(), name: faker.name.findName() })
export const mockInvalidData = (): void => Helper.mockOk(/signup/, 'POST', { invalidProperty: faker.random.uuid() })
