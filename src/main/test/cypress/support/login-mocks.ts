import * as Helper from './http-mocks'
import faker from 'faker'

export const mockInvalidCredentialsError = (): void => Helper.mockInvalidCredentialsError(/login/)
export const mockUnexpectedErrorError = (): void => Helper.mockUnexpectedErrorError(/login/, 'POST')
export const mockOk = (): void => Helper.mockOk(/login/, 'POST', { accessToken: faker.random.uuid(), name: faker.name.findName() })
export const mockInvalidData = (): void => Helper.mockOk(/login/, 'POST', { invalidProperty: faker.random.uuid() })
