import React, { useContext, useEffect, useState } from 'react'
import { Error, SurveyContext, SurveyListItem } from '@/presentation/pages/survey-list/components'
import { Footer, Header } from '@/presentation/components'
import { ApiContext } from '@/presentation/contexts'
import { LoadSurveyList } from '@/domain/usecases'
import { AccessDeniedError } from '@/domain/errors'
import Styles from './survey-list-styles.scss'
import { useHistory } from 'react-router-dom'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const history = useHistory()
  const { setCurrentAccount, getCurrentAccount } = useContext(ApiContext)
  const [state, setState] = useState({
    surveys: [] as LoadSurveyList.Model[],
    error: '',
    reload: false
  })

  useEffect(() => {
    loadSurveyList.loadAll()
      .then(surveys => setState({ ...state, surveys }))
      .catch(error => {
        if (error instanceof AccessDeniedError) {
          setCurrentAccount(undefined)
          history.replace('/login')
        } else {
          setState({ ...state, error: error.message })
        }
      })
  }, [state.reload])

  return (
    <div className={Styles.surveyLisWrap}>
      <Header />
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <SurveyContext.Provider value={{ state, setState }}>
          {state.error ? <Error /> : <SurveyListItem />}
        </SurveyContext.Provider>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
