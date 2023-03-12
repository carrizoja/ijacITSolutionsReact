
import React from 'react'
import './ijacServices.scss'
import { useState, useEffect } from 'react'
import {getFirestore,collection, getDocs} from 'firebase/firestore' 
import { HashLoader } from "react-spinners";

const IjacServices = () => {

  const [technicals, setTechnicals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [designs, setDesigns] = useState([]);
 
  useEffect(() => {
    // get fetch projects from firebase and order it by name
    const db = getFirestore();
    const itemsCollection = collection(db, "technicals");
    const itemsCollection2 = collection(db,"designs")
    getDocs(itemsCollection).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setTechnicals(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
      setLoading(false);
    });
    getDocs(itemsCollection2).then((querySnapshot) => {
      if (querySnapshot.empty) {
        console.log('No matching documents.');
      }
      setDesigns(querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
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
                  <div key={technical.id} className='services__container__card' data-aos="zoom-in">
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
            }{
              designs.map((design) => {
                return (
                  <div key={design.id} className='services__container__card services__container__card__design ' data-aos="zoom-in">
                     <div className='services__container__img'>
                      <img src={design.image} alt="services" />
                    </div>
                    <div className='services__container__text'>
                      <h3>{design.name}</h3>
                      <p>{design.description}</p>
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