import React from 'react';
import Header from './Header';
import './Home.css';
import Data from '../../Data';
const Home = () => {
   const blogItem = Data.map((item) => {
      return(
         <div className="col-md-4">
            <div className="box">
               <img src={item.img} alt="imgBlog"/>
               <h5>{item.title}</h5>
               <span>{item.time}</span>
               <h6>{item.price}</h6>
            </div>
            <button><a href="#">Order Nowgit </a></button>
         </div>
      )
   })
  return (
    <fragment>
      <Header />
         <section className="numbers">  
             <div className="container">
                  <div className="row">
                     <div className="col-md-3">
                        <h2>1287+</h2>
                        <h6>SAVINGS</h6>
                     </div>
                     <div className="col-md-3">
                        <h2>5786+</h2>
                        <h6>PHOTOS</h6>
                     </div>
                     <div className="col-md-3">
                        <h2>1440+</h2>
                        <h6>ROCKETS</h6>
                     </div>
                     <div className="col-md-3">
                        <h2>7110+</h2>
                        <h6>GLOBES</h6>
                     </div>
                  </div>
             </div>
         </section>
         <section className="pride">  
             <div className="container">
                  <div className="row">
                        <div className="col-md-6">
                            <img src="/images/2.jpg" alt="img-pride" />
                        </div>
                        <div className="col-md-6">
                           <h2>We pride ourselves on making real food from the best ingredients.</h2>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                           Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                           <button><a href="#">Learn More</a></button>
                        </div>
                        
                     
                  </div>
             </div>
         </section>
         <section className="ingredients">
           <div className="container">
              <div className="row">
                 <div className="col-md-6">
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>Lorem ipsum dolor sit
                     amet, consectetur adipiscing elit.Etiam et purus a odio finibus bibendum in sit amet leo. 
                     Mauris feugiat erat tellus.Far far away, behind the word moufar from the countries Vokalia 
                     and Consonantia, there live the blind texts.</p>
                    <ul>
                       <li>Etiam sed dolor ac diam volutpat.</li>
                       <li>Erat volutpat aliquet imperdiet.</li>
                       <li>purus a odio finibus bibendum.</li>
                    </ul>
                    <button>
                       <a href="#">learn more</a>
                    </button>
                 </div>
                 <div className="col-md-6">
                    <img src="/images/3.png" alt="ingrediens" />
                 </div>
              </div>
           </div>
         </section>
         <section className="paralex" >
             <div className="container">
                <div className="row">
                   <div className="col-lg-12 col-md-12">
                      <h2>When a man's stomach is full it makes no<br />
                         difference whether he is rich or poor.</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br />
                    finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                      <a href="#">Watch Our Story</a>
                   </div>
                </div>
             </div>
         </section>
         <section className="blogs">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-md-12">
                     <h2>Explore Our Foods </h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus
                      bibendum in sit amet leMauris feugiat erat tellus. Far far away, behind the word mountains, 
                      far from the countries Vokalia and Consonantia, there live the blind texts. Separated they
                       live in Bookmarksgrove.</p>
                  </div>
                  {blogItem}
               </div>
            </div>
         </section>
    </fragment>
  )
}

export default Home
