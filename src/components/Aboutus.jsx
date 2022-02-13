import aboutus from '../img/aboutus.webp';

const Aboutus = () => {

    return (

        <div>
            <div id="container-aboutus" className="mx-auto" >

                <div className="container_imgTxt">

                    <h1>About us</h1>
                    <div className='img_aboutus'>
                        <img src={aboutus} alt=""/>
                    </div>
                      <div className='txt_aboutus'>
                        <p>"My husband asked me one afternoon how could we start a business
                            involving the passions and strengths of our family.
                            Being an artist and a mother of two my answer was: what I do
                            best is a home. So the project of creating a bed and
                            breakfast in our house came together combining our love for nature
                            (25 years of experience in landscape design in New York and Punta del Este), art and sailing."
                        </p> 
                    </div> 




                </div>

            </div>
        </div>



    )

}

export default Aboutus;