import React from 'react'
import './Footer.css';


export default function Footer() {
  return (
<>
<footer>
<body>
   <section className='container'>
   <div className="row">
   
   <div className="col-sm-3">
     <div className="card">
       <div className="card-body">
         <h3 className="card-title">Opening Hours</h3>
         
             <tr>
                 <td className='day'>Mon</td>
                 <td className='time'> 09:00 to 23:00</td>
             </tr>
             <tr>
                 <td className='day'>Tue</td>
                 <td className='time'> 09:00 to 21:00</td>
             </tr>
             <tr>
                 <td className='day'>Wed</td>
                 <td className='time'> 09:00 to 21:00</td>
             </tr>
             <tr>
                 <td className='day'>Thu</td>
                 <td className='time'> 09:00 to 21:00</td>
             </tr>
             <tr>
                 <td className='day'>Fri</td>
                 <td className='time'> 09:00 to 21:00</td>
             </tr>
             <tr>
                 <td className='day'>Sat</td>
                 <td className='time'> 09:00 to 21:00</td>
             </tr>
             <tr>
                 <td className='day'>Sun</td>
                 <td className='time'> 09:00 to 21:00</td>
             </tr>
        
       </div>
     </div>
   </div>
   </div>
   <div className="col-sm-5">
<div className="card-index">
 <div className="card-body">
   <h3 className="card-title">Khyatijayswal</h3>
   <p className="card-text">fgmfgkfgdkfacmxddf</p>
  
 </div>
</div>
</div>
<div className="col-sm-3">
<div className="card">
 <div className="card-body">
   <h3 className="card-title">Contact us</h3>
   <ul>
               
                  <tr>
                   <td className="icon">
                       <i class="fa fa-phone" aria-hidden="true"></i>
                   </td>
                   <td className="links phone">
                       <a className="phone-number" href="tel:+447555563205">+447555563205</a>
                   </td>
               </tr>
               
                   <tr>
                       <td className="icon">
                           <i className="fa fa-at" aria-hidden="true"></i>
                       </td>
                       <td className="links emails">
                           <a href="mailto:khyatijayswal5@gmail.com">khyatijayswal5@gmail.com</a>
                       </td>
                   </tr>
               <tr>
                   <td className="icon">
                       <i className="fa fa-map-marker" aria-hidden="true"></i>
                   </td>
                   <td className="links">
                       <a href="https://www.google.com/maps/search/?api=1&amp;query=chennai, IN" target="_blank">cheshire, uk</a>
                   </td>
               </tr>
               <tr>
                   <td className="icon">
                       <i className="fa fa-globe" aria-hidden="true"></i>
                   </td>
                   <td className="links website">
                       <a href="http://khyatithoufiq.simplybook.me" rel="nofollow">
                           khyatithoufiq.simplybook.me
                       </a>
                   </td>
               </tr>
       </ul>

  </div>
</div>
</div>
   </section>
 </body> 
  <div className='footer-text'><a href="">My Personal Data</a></div>
</footer>
</>
  )
}