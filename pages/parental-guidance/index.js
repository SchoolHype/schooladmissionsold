import Image from 'next/image';
import styles from './parentalGuidance.module.css';

export default function Registration() {
  return (
    <div className={styles.parentalGuidance}>
        <h1 className={styles.pgTitle}>A parental guide to choosing a school for your child. Here are the top considerations.</h1>
        <div className={styles.pgContent}>
          <div className={styles.pgText}>
                    1. Likelihood of admission
              <br />2. The school population
              <br />3. Admission procedure
              <br />4. Private vs Public | School Medium | Co-Education
              <br />5. School website, social media & digital presence
              <br />6. School board affiliation
              <br />7. Location & Proximity
              <br />8. Transportation facility
              <br />9. Affordability
              <br />10. Core values of the school
              <br />11. The infrastructure, safety, security, hygiene and cleanliness
              <br />12. Discipline
              </div>

              <div className={styles.pgImage}>
                <Image src='/Images/section.svg' height={700} width={1000} alt="" />
              </div>
        </div>

        <br /> <br />

        <div className={styles.pgContentRev}>
          <div className={styles.pgTextRev}>
                    13. Academic performance
              <br />14. A space that&apos;s conducive to learning
              <br />15. Management that&apos;s guided by a leader
              <br />16. A team of teacher that has the capacity and training
              <br />17. Class size & Student-teacher ratio
              <br />18. Teaching & learning style
              <br />19. Curriculum that&apos;s future ready
              <br />20. Co-curricular activities & life skills
              <br />21. Technology that can enhance learning experience
              <br />22. A system that is crafted for continuous improvement
              <br />23. Your child&apos;s needs & interests
              <br />24. Experience while meeting the school staff & the principal
              <br />25. Overall reputation
              </div>

              <div className={styles.pgImage}>
                <Image src='/Images/section.svg' height={700} width={1000} alt="" />
              </div>
        </div>
    </div>
  )
}
