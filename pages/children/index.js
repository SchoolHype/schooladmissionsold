//import React, { useEffect, useState } from 'react'
//import { Modal } from '../../Components/Modal/Modal'
//import styles from '../registration/parents/parentRegisteration.module.css'
//import { db } from '../../config/firebase';
//
//export default function Children() {
//  
//  const [show, setShow] = useState(false);
//  const [info , setInfo] = useState([]);
//
//      useEffect(() => {
//        window.addEventListener('load', () => {
//          Fetchdata();
//        });
//      })
//
//    const Fetchdata = ()=>{
//        db.collection("child").get().then((Snapshot) => {
//             
//            Snapshot.forEach(e => {
//                var data = e.data();
//                setInfo(arr => [...arr , data]);
//            });
//        })
//    }
//
//  const modalHandler = e => {
//    e.preventDefault();
//    setShow(true);
//}
//
//  return (
//    <>
//      <div>
//          <button  className={styles.formbutton} onClick={modalHandler}> add child </button>
//
//          <Modal onClose={() => setShow(false)} show={show} />
//      </div>
//
//      <div>
//              <>
//              <h2 style={{textAlign: "center"}}>Registerations</h2>
//              </>
//            
//          {
//              info.map((data, index) => (
//              <Info key={index} Name={data.cname} 
//                    Age={data.dob}
//                    Year={data.class_year}
//                    />
//              ))
//          }
//          </div>
//      </>
//  )
//}
//
//const Info = ({Name, Age, Year}) => {
//  return (
//      <>
//          <div>
//                    Name={Name} 
//                    Age={Age}
//                    Year={Year}
//          </div>
//      </>
//  );
//}


