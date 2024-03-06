import React from 'react'
import './about1.css'
import about1 from '../../assets/about1.jpg';
export default function AboutusCMP1() {

  return (
    
        

    <div className="about-wrap">
       
       
       
       <div className="about-sub-con1">
         <div className="about-main-head">
              <h1 className="about-head">Our vision</h1>
         </div>
            <p className="about-para">
            At our e-channelling platform, our vision is to revolutionize the way healthcare services are accessed and delivered.<br/> 
            We aspire to create a seamless and efficient experience for both patients and healthcare providers, bridging the gap between them regardless of geographical boundaries.<br/><br/> 
            Our goal is to empower individuals to take control of their health by providing convenient access to a diverse range of healthcare professionals, services, and resources online. <br/>T
            hrough innovation and technology, we aim to enhance the accessibility, affordability, and quality of healthcare, ultimately improving the well-being of people worldwide. Join us on this journey as we transform the future of healthcare together.
            </p>
        </div>


            <div className="about-sub-con2">
                <img src={about1} alt="about1" className="about-img" />
            </div>


    </div>
        
      
    
  )
}
