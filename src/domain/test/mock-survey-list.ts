import { SurveyModel } from '@/domain/models'
import faker from 'faker'

export const mockSurveyListModel = (): SurveyModel[] => ([{
  id: faker.random.uuid(),
  question: faker.random.words(10),
  answers: [{
    answer: faker.random.words(4),
    image: faker.image.imageUrl()
  }, {
    answer: faker.random.words(4),
    image: faker.image.imageUrl()
  }],
  didAnswer: faker.random.boolean(),
  date: faker.date.recent()
}])
