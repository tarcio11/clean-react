import React from 'react'
import Styles from './survey-item-empty-styles.scss'

const SurveyItemEmpty: React.FC = () => {
  return (
    <>
      <li className={Styles.SurveyItemEmpty}></li>
      <li className={Styles.SurveyItemEmpty}></li>
      <li className={Styles.SurveyItemEmpty}></li>
      <li className={Styles.SurveyItemEmpty}></li>
    </>
  )
}

export default SurveyItemEmpty
