import Head from 'next/head'
import Image from 'next/image'
import Mission from '../../public/images/mission.png'
import Vision from '../../public/images/vision.png'
import Values from '../../public/images/values.png'
import Barath from '../../public/images/team/barath.png'
import Kresna from '../../public/images/team/kresna.png'
import Megha from '../../public/images/team/megha.png'
import Link from 'next/link'
import Linkedin from '@/components/icons/Linkedin'
import Button from '@/components/Button'
import AngleDown from '@/components/icons/AngleDown'
import { useEffect, useState } from 'react'
import { sendContactForm } from '@/lib/api'
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Check from '@/components/icons/Check'
import Cross from '@/components/icons/Cross'

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


const initValues = { name:"", email:"", subject:"", message:"" }
const initState = { error: "", values : initValues }

export default function About() {

  const [sucMsg, setSucMsg] = useState();

  const [state, setState] = useState(initState);

  const {values, error} = state;

  const handleChange = ({target}) => setState((prev)=>({
        ...prev,
        values: {
          ...prev.values,
          [target.name] : target.value,
        },
  }));

  useEffect(()=>{
    setTimeout(()=>{
      setState((prev) => ({
        ...prev,
        error:"",
      }));
      setSucMsg("");
    },3000)
  },[sucMsg,error])

  const onSubmit = async(event) => {
    event.preventDefault()
    setState((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
      setSucMsg("Message sent sucessfully.")
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };



  const [showClass, setShowClass] = useState("false");
  const [showClass1, setShowClass1] = useState("false");
  const [showClass2, setShowClass2] = useState("false");
  const [showClass3, setShowClass3] = useState("false");
  const [showClass4, setShowClass4] = useState("false");
  const [showClass5, setShowClass5] = useState("false");
  const [showClass6, setShowClass6] = useState("false");
  const [showClass7, setShowClass7] = useState("false");
  const [showClass8, setShowClass8] = useState("false");
  const [showClass9, setShowClass9] = useState("false");



  return (
    <>
    <Head>
        <title>About | Cyborg Network</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>

        <section className='common-section about-hero-section'>
          <div className='about-bg left-logo-bg'>
        <div className='container custom-owl-dots'>
        <h1 className="hero-heading center-hero-heading">About Us</h1>
        <div className='mob-about'>
        <OwlCarousel className='owl-theme' loop items={1} autoplay dots smartSpeed={1500} autoplayTimeout={5000}>
        <div className='about-wrap d-flex a-center'>
          <div className='d-left'>
          <div className='aw-left'>
          <Image src={Mission} className="aw-img" alt='Our Mission'/>
          </div>
          </div>
          <div className='d-right'>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Our Mission</h2>
            <p>At Cyborg Network, our mission is to transform the way edge computing applications are developed and deployed by providing a decentralized and incentivized infrastructure platform that leverages Substrate-based blockchain technology. We aim to empower developers and businesses to harness the full potential of edge computing while maintaining the highest standards of data privacy and security.</p>
          </div>
          </div>
          </div>
          </div>
          <div className='about-wrap d-flex a-center d-reverse'>
          <div className='d-left'>
          <div className='aw-left'>
          <Image src={Vision} className="aw-img" alt='Our Vision'/>
          </div>
          </div>
          <div className='d-right'>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Our Vision</h2>
            <p>Our vision at Cyborg Network is to revolutionize the world of edge computing by creating a decentralized and incentivized infrastructure platform that enables developers and businesses to easily build and deploy cutting-edge applications. We strive to be the leading provider of blockchain-based solutions that allow businesses to harness the full potential of edge computing, while maintaining the highest levels of data privacy and security. Through innovation, collaboration, and a commitment to excellence, we aim to empower our clients to transform their industries and build a better future for all</p>
          </div>
          </div>
          </div>
          </div>
          <div className='about-wrap d-flex a-center'>
          <div className='d-left'>
          <div className='aw-left'>
          <Image src={Values} className="aw-img" alt='Our Values'/>
          </div>
          </div>
          <div className='d-right'>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Our Values</h2>
            <p>Cyborg Network cultivates an entrepreneurial spirit that inspires initiative, independence, and informed decisions. Our commitment to excellence ensures world-class performance and high standards. Curiosity fuels our speedy learning in technological ventures. Our collaborative culture encourages transparent communication, candid feedback, and diversity. Guided by the Japanese concept of Ikigai, we intertwine passion and purpose, aligning our skills with societal needs—these values are our identity.</p>
          </div>
          </div>
          </div>
          </div>
          </OwlCarousel>
          </div>
          <div className='web-about'>
          <div className='about-wrap d-flex a-center'>
          <div className='d-left'>
          <div className='aw-left'>
          <Image src={Mission} className="aw-img" alt='Our Mission'/>
          </div>
          </div>
          <div className='d-right'>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Our Mission</h2>
            <p>At Cyborg Network, our mission is to transform the way edge computing applications are developed and deployed by providing a decentralized and incentivized infrastructure platform that leverages Substrate-based blockchain technology. We aim to empower developers and businesses to harness the full potential of edge computing while maintaining the highest standards of data privacy and security.</p>
          </div>
          </div>
          </div>
          </div>
          <div className='about-wrap d-flex a-center d-reverse'>
          <div className='d-left'>
          <div className='aw-left'>
          <Image src={Vision} className="aw-img" alt='Our Vision'/>
          </div>
          </div>
          <div className='d-right'>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Our Vision</h2>
            <p>Our vision at Cyborg Network is to revolutionize the world of edge computing by creating a decentralized and incentivized infrastructure platform that enables developers and businesses to easily build and deploy cutting-edge applications. We strive to be the leading provider of blockchain-based solutions that allow businesses to harness the full potential of edge computing, while maintaining the highest levels of data privacy and security. Through innovation, collaboration, and a commitment to excellence, we aim to empower our clients to transform their industries and build a better future for all</p>
          </div>
          </div>
          </div>
          </div>
          <div className='about-wrap d-flex a-center'>
          <div className='d-left'>
          <div className='aw-left'>
          <Image src={Values} className="aw-img" alt='Our Values'/>
          </div>
          </div>
          <div className='d-right'>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Our Values</h2>
            <p>Cyborg Network cultivates an entrepreneurial spirit that inspires initiative, independence, and informed decisions. Our commitment to excellence ensures world-class performance and high standards. Curiosity fuels our speedy learning in technological ventures. Our collaborative culture encourages transparent communication, candid feedback, and diversity. Guided by the Japanese concept of Ikigai, we intertwine passion and purpose, aligning our skills with societal needs—these values are our identity.</p>
          </div>
          </div>
          </div>
          </div>
          </div>
        </div>
        </div>
        </section>

        <section className='common-section team-section right-blur right-logo-bg'>
        <div className='left-blur'>
          <div className='container'>
          <h2 className="section-heading">Founding Team</h2>
          <div className='team-wrap'>
            <div className='tw-content'>
              <div className='tw-box'>
                <div className='tw-header'>
                  <div className='tw-img'>
                  <div className='clip-wrap'>
                <div className='box-clip clip-border'></div>
                    <Image src={Barath} alt='Barath'/>
                  </div>
                  </div>
                  <div className='tw-info'>
                    <h3>Barath Kanna</h3>
                    <p>Founder & CEO</p>
                    <Link href="https://in.linkedin.com/in/barath-kanna-23a23a172"><Linkedin/></Link>
                  </div>
                </div>
                <div className='tw-body'>
                  <p className='tw-desc'>Barath is an experienced entrepreneur who has a deep understanding of the technical challenges and opportunities in these areas and has significant experience in the blockchain sector. As a leader, he spearheads the team&apos;s vision and directs the overarching strategy of the Cyborg Network</p>
                </div>
              </div>
            </div>
            <div className='tw-content'>
              <div className='tw-box'>
                <div className='tw-header'>
                  <div className='tw-img'>
                  <div className='clip-wrap'>
                <div className='box-clip clip-border'></div>
                    <Image src={Kresna} alt='Kresna'/>
                    </div>
                  </div>
                  <div className='tw-info'>
                    <h3>Kresna Sucandra</h3>
                    <p>Founder & CTO</p>
                    <Link href="https://id.linkedin.com/in/kresna-sucandra"><Linkedin/></Link>
                  </div>
                </div>
                <div className='tw-body'>
                  <p className='tw-desc'>Kresna is a specialist in blockchain and decentralized systems, with notable expertise as a Rust/Substrate developer in various blockchain projects. After working with prominent tech companies, Kresna now oversees the development and execution of Cyborg Network&apos;s technological framework.</p>
                </div>
              </div>
            </div>
            <div className='tw-content'>
              <div className='tw-box'>
                <div className='tw-header'>
                  <div className='tw-img'>
                  <div className='clip-wrap'>
                <div className='box-clip clip-border'></div>
                    <Image src={Megha} alt='Megha'/>
                  </div>
                  </div>
                  <div className='tw-info'>
                    <h3>Megha Varshini</h3>
                    <p>Founder & COO</p>
                    <Link href="https://in.linkedin.com/in/megha-varshini-tamilarasan-b1247a212"><Linkedin/></Link>
                  </div>
                </div>
                <div className='tw-body'>
                  <p className='tw-desc'>Megha has an impressive history in business development and operations, with experience spanning both startups and well-established companies. She is responsible for managing daily operations, forging partnerships, and ensuring the continued growth and success of the Cyborg Network.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </section>

        <section className='common-section faq-section static-border middle-blur' id='faq'>
          <div className='container'>
          <h2 className="section-heading">FAQ</h2>
          <div className={`faq-wrap ${showClass ? "show-five" : "show-all"}`}>
            <div className='fw-list'>
              <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
                <div className={`fw-item ${showClass1 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass1(!showClass1)}>
                    <h4>What is Cyborg Network?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>Cyborg Network is a marketplace for decentralized computing power that benefits both Edge providers and users by facilitating the sharing of resources and making computing more accessible and cost-effective.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
                <div className={`fw-item ${showClass2 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass2(!showClass2)}>
                    <h4>Why is this important now?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>The reason for the current scenario emphasizing the importance of edge computing is due to the increasing use of IoT devices and 5G networks. As these technologies become more prevalent, there is a growing need for real-time data processing and low-latency data transmission. This demand cannot be fully met by traditional cloud computing solutions, which can cause delays and security risks due to the centralized nature of their infrastructure. Therefore, the rise of edge computing is seen as a solution to this problem, allowing data to be processed closer to its source and improving overall performance and security.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className={`fw-item ${showClass3 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass3(!showClass3)}>
                    <h4>Is Cyborg Network a mobile application?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>Cyborg Network is not specifically a mobile application. However, depending on the implementation, it can have a mobile application interface to provide users with easy access to the marketplace in the future.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className={`fw-item ${showClass4 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass4(!showClass4)}>
                    <h4>What technology is being used?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>Cyborg Network employs a blend of edge computing and blockchain technologies, utilizing the Substrate framework for blockchain development and Rust as the primary programming language. Edge computing enables decentralized data processing and storage near the source, leading to reduced latency and enhanced efficiency. Meanwhile, the Cyborg Blockchain acts as a layer 1 blockchain, providing a secure, transparent, and tamper-proof decentralized ledger for transactions, which fosters trust among network participants. Additionally, the Cyborg Network leverages Polkadot and Kusama as layer 0 platforms, offering shared security and facilitating seamless interoperability between different blockchains.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className={`fw-item ${showClass5 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass5(!showClass5)}>
                    <h4>How can blockchain leverage edge computing?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>With Blockchain technology, edge computing networks can offer increased security, transparency, and efficiency, making them a promising solution for a range of applications, particularly in the context of IoT devices and 5G networks.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className={`fw-item ${showClass6 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass6(!showClass6)}>
                    <h4>How will my personal data be protected?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>In the Cyborg Network, personal data protection is ensured through advanced encryption methods and the inherent security features of blockchain technology. Each transaction is securely encrypted and stored on the blockchain, which is distributed across multiple nodes, making it virtually impossible to tamper with. Also, the use of decentralized identities (DID) could further enhance privacy by providing users control over their personal data. However, specific data protection measures may depend on the exact implementation of the network.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className={`fw-item ${showClass7 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass7(!showClass7)}>
                    <h4>Who can join your network?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>Cyborg Network is open to a wide range of participants, including edge server providers, IoT device operators, cloud service providers, content delivery networks, autonomous vehicle manufacturers, telecommunications providers, gaming companies, healthcare providers, and manufacturing companies. All these participants can contribute to the network in their respective ways, and benefit from the low latency, real-time processing, and improved security and transparency provided by the platform.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className={`fw-item ${showClass8 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass8(!showClass8)}>
                    <h4>How can I get early access?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>At present, we are focused on developing our project and do not offer early access. However, we invite interested individuals to join our community to stay informed about our progress and to be among the first to enjoy the benefits of early adoption when they become available.</p>
                  </div>
                </div>
                </div>
                </div>
                <div className='fwl-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className={`fw-item ${showClass9 ? "" : "active"}`}>
                  <div className='fw-header' onClick={() => setShowClass9(!showClass9)}>
                    <h4>Are you a Blockchain or an Edge Computing startup?</h4>
                    <span><AngleDown/></span>
                  </div>
                  <div className='fw-body'>
                    <p>While Cyborg Network&apos;s primary aim is to provide utility in every possible industry using blockchain technology, we are currently focused on disrupting the edge computing industry. Although blockchain technology is the foundation of our platform, we leverage it to provide security and transparency in the edge computing space. Therefore, we would be more accurately described as a blockchain startup specializing in edge computing.</p>
                  </div>
                </div>
                </div>
                </div>
            </div>
            <div className='fw-list-btn'>
              <button onClick={() => setShowClass(!showClass)} type='button' className='btn btn-md'>{showClass ? "Show More" : "Show Less"}</button>
            </div>
          </div>
          </div>
        </section>

        
<section className='common-section contact-section left-blur right-logo-bg'>
          <div className='container'>
          <h2 className="section-heading">Contact Us</h2>
          <div className='contact-wrap'>
            <div className='cw-form'>
              <form method='post'>
                <div className='cw-field'>
                  <input type='text' name='name' placeholder='Name' value={values.name} onChange={handleChange} required/>
                </div>
                <div className='cw-field'>
                  <input type='email' name='email' placeholder='Email' value={values.email} onChange={handleChange} required/>
                </div>
                <div className='cw-field'>
                  <input type='text' name='subject' placeholder='Subject' value={values.subject} onChange={handleChange} required/>
                </div>
                <div className='cw-field'>
                  <textarea name='message' placeholder='Message' rows="4" value={values.message} onChange={handleChange} required></textarea>
                </div>
                <div className='cw-btn'>
                  <button type='submit' className='cw-submit' onClick={onSubmit} disabled={
          !values.name || !values.email || !values.subject || !values.message
        }>Submit</button>
                </div>
              </form>
            </div>
          </div>
          </div>
        </section>
        <div className={`form-toast ${error ? "error" : ""} ${error || sucMsg ? "" : "d-none"}`}>
          <div className='clip-wrap'>
          <div className='box-clip clip-border'></div>
            <p><span><Check/><Cross/></span>{error}{sucMsg}</p>
          </div>
        </div>
    </>
  )
}
