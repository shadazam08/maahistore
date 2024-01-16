import React from 'react';
// import './contact.scss'

const Contact = () => {
    const companyAddress = 'Maahi Store,  Maharajganj, in front of Hadayatullah sb. Laheriasarai, Darbhanga, Bihar 846001';
    // Maharajganj, in front of Hadayatullah sb. Laheriasarai, Darbhanga, Bihar 846001
    const companyName = 'Maahi Store'
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ display: 'flex', width: '80%' }}>
                {/* Map iframe on the left side */}
                <div style={{ flex: 1, height: '400px' }}>
                    <iframe
                        title="Company Map"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src={`https://maps.google.com/maps?q=${encodeURIComponent(companyAddress)}&output=embed`}
                    ></iframe>

                    {/* https://www.google.com/maps/place/MAAHI+GENERAL+STORE/@26.12683,85.890912,19z/data=!4m6!3m5!1s0x39edb94948f92dfb:0x18d5870c4f2b419f!8m2!3d26.1267652!4d85.8904621!16s%2Fg%2F11ptr7x9br?hl=en-US&entry=ttu */}
                </div>

                {/* Contact details on the right side */}
                <div style={{ flex: 1, padding: '20px' }}>
                    {/* <h1>Contact Details</h1> */}
                    <h1>{companyName}</h1>
                    <h6>Address: {companyAddress}</h6>
                    {/* <p>Email: info@example.com</p> */}
                    <h6>Phone: +91 985-210-9099 </h6>
                </div>
            </div>
        </div>
    );
}

export default Contact;
