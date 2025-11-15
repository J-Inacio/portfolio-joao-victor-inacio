import { useState } from 'react';
import styles from './About.module.css';
import TimelineCard from '../../components/TimelineCard';
import SkillsCard from '../../components/SkillsCard';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import naturaImg from '../../assets/img/natura.jpg';
import joaoImg from '../../assets/img/me.jpg';

const About = () => {
  const { t } = useTranslation();
  const [option, setOption] = useState('about');
  const texts = {
    about: (
      <>
        <img src={joaoImg} alt="Minha foto na natura" className={styles.aboutImg} />
        <p>{t('about.aboutP1')}</p>
        <p>{t('about.aboutP2')}</p>
        <p>{t('about.aboutP3')}</p>
      </>
    ),
    experience: (
      <TimelineCard
        data={'Set 2025 - Atualmente'}
        local={'Natura & Co'}
        title={'Estagiário Software Engineer'}
      >
        <p>{t('about.naturaP1')} </p>
        <p>{t('about.naturaP2')}</p>
        <img src={naturaImg} alt="Minha foto na natura" className={styles.naturaImg} />
        <SkillsCard skills={['Agile Methods', 'React', 'TypeScript', 'Clean Architecture']} />
      </TimelineCard>
    ),
    education: (
      <>
        <TimelineCard
          data={t('about.adsDate')}
          local={'UNIFECAF Taboão da Serra'}
          title={t('about.adsTitle')}
          text={t('about.adsText')}
        >
          <SkillsCard
            skills={[
              'Agile Methods',
              'Python',
              'Database',
              'HTTP Protocol',
              'Computer Architecture',
            ]}
          />
        </TimelineCard>

        <TimelineCard
          data={t('about.etecDate')}
          local={'ETEC de Embu'}
          title={t('about.etecTitle')}
          text={t('about.etecText')}
        >
          <SkillsCard
            skills={[
              'Javascript',
              'Python',
              'HTML',
              ' CSS',
              'MySQL',
              'C#',
              'Java',
              'Excel',
              'Word',
            ]}
          />
        </TimelineCard>
      </>
    ),
  };
  const { ref, inView } = useScrollAnimation();
  return (
    <Element name="about">
      <section
        ref={ref}
        id="about"
        className={`
					${styles.aboutContainer} 
					glassFilter
					fade-in-section
					${inView ? 'is-visible' : ''}
					`}
      >
        <nav>
          <button
            onClick={() => setOption('about')}
            className={`
						glass-btn 
						${styles.aboutBtn} 
						${option === 'about' ? styles.active : ''}`}
          >
            {t('about.aboutTitle')}
          </button>
          <button
            onClick={() => setOption('experience')}
            className={`
							glass-btn
							${styles.aboutBtn} 
							${option === 'experience' ? styles.active : ''}
							`}
          >
            {t('about.experienceTitle')}
          </button>
          <button
            onClick={() => setOption('education')}
            className={`
							glass-btn
							${styles.aboutBtn} 
							${option === 'education' ? styles.active : ''}
							`}
          >
            {t('about.educationTitle')}
          </button>
        </nav>
        <aside>{texts[option]}</aside>
      </section>
    </Element>
  );
};

export default About;
