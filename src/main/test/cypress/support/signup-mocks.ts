import * as Http from './http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => Http.mockForbiddenError(/signup/, 'POST')
export const mockUnexpectedErrorError = (): void => Http.mockServerErrorError(/signup/, 'POST')
export const mockOk = (): void => Http.mockOk(/signup/, 'POST', { accessToken: faker.random.uuid(), name: faker.name.findName() })
