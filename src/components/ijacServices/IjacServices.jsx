
import React from 'react'
import './ijacServices.scss'
import { useState, useEffect } from 'react'
import {getFirestore,collection, getDocs} from 'firebase/firestore' 
import { HashLoader } from "react-spinners";


const IjacServices = () => {

  const [technicals, setTechnicals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get fetch projects from firebase
    const db = getFirestore();
    const itemsCollection = collection(db, "technicals");
    getDocs(itemsCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setTechnicals(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      setLoading(false);
    });
  }, []);

  return (
    <>
    {
      loading ? 
      (
        <HashLoader color="#4cd636" className='spinner' animation="border" role="status"/>
      )
      :
      
        <section className='services__container' id='services'>
          <h2>Servicios</h2>
          {
              technicals.map((technical) => {
                return (


                  <div key={technical.id} className='services__container__card'>
                    <div className='services__container__text'>
                      <h3>{technical.name}</h3>
                      <p>{technical.description}</p>
                    </div>
                    <div className='services__container__img'>
                      <img src={technical.image} alt="services" />
                    </div>
                  </div>

                )
              })
            }
           
      
        </section>
       
    }
    </>
  )
}

export default IjacServices