import { getDoc, doc } from "@firebase/firestore";
import { GetServerSideProps } from "next";
import { database } from "../../config/firebase";
import styles from './school.module.css'
import Image from 'next/image'

import { GiPositionMarker } from "react-icons/gi";
import { FaMapPin, FaSchool } from "react-icons/fa";
import HomeCarousel from "../../Components/Search/School/Carasousel/Carasouel";

export const getServerSideProps = async (school) => {
  const docRef = doc(database, "schools", school.query.id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data()
  console.log(data)
  if (!data) return { notFound: true };
  return { props: { data } };
};

const Post = ({data}) => {
  if (!data) {
    return "Loading...";
  }

  return (
    <div className={styles.schoolDetails}>
      <div className={styles.schoolMain}>
        <Image className={styles.logo} src='/Images/logo.jpg' alt="" height={80} width={100}/>
        <h1>{data.institute}</h1>
      </div>

      <div className={styles.markerSection}>
        <FaSchool className={styles.i} />
        <p>{data.address}</p>

        <GiPositionMarker className={styles.i} />
        <p>{data.city}, {data.state}</p>

        <FaMapPin className={styles.i} />
        <p>{data.pin}</p>
      </div>

      <div className={styles.schoolDetailsList}>
        <p>Level: {data.level}</p>
        <p>Living: {data.living}</p>
        <p>Endowment: {data.endowment}</p>
        <p>Gender: {data.gender}</p>
      </div>

      <HomeCarousel />
    </div>
  );
}

export default Post;