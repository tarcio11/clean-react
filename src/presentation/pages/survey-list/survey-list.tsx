import React from 'react'
import Styles from './survey-list-styles.scss'
import { Footer, Logo } from '@/presentation/components'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyLisWrap}>
      <header className={Styles.headerWrap}>
        <div className={Styles.headerContent}>
          <Logo />
          <div className={Styles.logoutWrap}>
            <span>Tarcio</span>
            <a href="#">Sair</a>
          </div>
        </div>
      </header>
      <div className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>01</span>
                <span className={Styles.month}>02</span>
                <span className={Styles.year}>2021</span>
              </time>
              <p>Qual é o seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>01</span>
                <span className={Styles.month}>02</span>
                <span className={Styles.year}>2021</span>
              </time>
              <p>Qual é o seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>01</span>
                <span className={Styles.month}>02</span>
                <span className={Styles.year}>2021</span>
              </time>
              <p>Qual é o seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>01</span>
                <span className={Styles.month}>02</span>
                <span className={Styles.year}>2021</span>
              </time>
              <p>Qual é o seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
          <li>
            <div className={Styles.surveyContent}>
              <time>
                <span className={Styles.day}>01</span>
                <span className={Styles.month}>02</span>
                <span className={Styles.year}>2021</span>
              </time>
              <p>Qual é o seu framework web favorito?</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default SurveyList
