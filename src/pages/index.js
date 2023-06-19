import Head from 'next/head'
import Image from 'next/image'
import homeCover from '../../public/images/home-cover.svg'
import Button from '@/components/Button'
import sixOne from '../../public/images/six/one.svg'
import sixTwo from '../../public/images/six/two.svg'
import sixThree from '../../public/images/six/three.svg'
import sixFour from '../../public/images/six/four.svg'
import sixFive from '../../public/images/six/five.svg'
import sixSix from '../../public/images/six/Six.svg'
import nineOne from '../../public/images/nine/one.svg'
import nineTwo from '../../public/images/nine/two.svg'
import nineThree from '../../public/images/nine/three.svg'
import nineFour from '../../public/images/nine/four.svg'
import nineFive from '../../public/images/nine/five.svg'
import nineSix from '../../public/images/nine/six.svg'
import nineSeven from '../../public/images/nine/one.svg'
import nineEight from '../../public/images/nine/two.svg'
import nineNine from '../../public/images/nine/three.svg'
import testimonial from '../../public/images/testimonial.svg'
import {Tesimonial, Partner, Backer} from '@/components/Slider'
import Close from '@/components/Close'
import File from '@/components/icons/File'
import Link from 'next/link'
import Linkedin from '../components/icons/Linkedin'
import Twitter from '../components/icons/Twitter'
import Telegram from '../components/icons/Telegram'
// import Medium from '../components/icons/Medium'
import ExternalLink from '@/components/icons/ExternalLink'
import { useState } from 'react'
import { motion } from "framer-motion"


export default function Home() {

  const [popup, setPopup] = useState("hide");

 const popupClose = ()=>{
  setPopup("hide");
 }
 const popupShow = ()=>{
  setPopup("show");
 }

  return (
    <>
      <Head>
        <title>Home | Cyborg Network</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>

        <section className='common-section home-hero-section'>
        <div className='container'>
        <div className='home-wrap d-flex a-center'>
          <motion.div className='d-left' transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className='hw-left'>
          <h1 className="hero-heading"><span>Decentralizing </span>the Edge for Everyone</h1>
          <p className='home-desc'>Scalable, Secure, and Reliable Computing at the Edge</p>
          <span onClick={popupShow}><Button title="Learn More" link="/" size="btn-md"/></span>
          </div>
          </motion.div>
          <motion.div className='d-right' transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className="hw-right">
            <Image src={homeCover} alt='home-cover-image'/>
          </div>
          </motion.div>
          </div>
        </div>
        </section>

        <section className='common-section six-section middle-blur left-logo-bg'>
          <div className='container'>
          <motion.h2 className="section-heading" transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}><span>Unlock the Potential of the
          </span>Edge with Decentralized Computing</motion.h2>
          <div className='box-wrap'>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={sixOne} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Decentralized Infrastructure</h3>
                  <p>Efficient and reliable processing with distributed control.</p>
                </div>
                </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={sixTwo} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Connect to earn</h3>
                  <p>Earn rewards by joining our innovative network of providers for unmatched computing power.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={sixThree} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Secure and Private</h3>
                  <p>Ensure data privacy and security with end-to-end encryption.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={sixFour} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Seamless Integration</h3>
                  <p>Smooth integration with existing edge infrastructure and devices.</p>
                </div>
                </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={sixFive} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Efficient costing</h3>
                  <p>Maximize cost efficiency with affordable infrastructure and optimized ROI.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={sixSix} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Real-Time Data Processing</h3>
                  <p>Instant data processing and analysis at the edge.</p>
                </div>
              </div>
            </div>
            </motion.div>
          </div>
          </div>
        </section>

        <section className='common-section testimonial-section right-logo-bg left-blur'>
          <motion.div className='container' transition={{ ease: "easeInOut", duration: 0.75 }} initial={{ opacity: 0, translateY: 200 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='ts-heading'>
              <Image src={testimonial} alt='testimonial'/>
            </div>
            <div className='ts-slider-wrap custom-owl-dots'>
              <Tesimonial/>
            </div>
          </motion.div>
        </section>

        <section className='common-section partners-section right-blur'>
          <div className='container'>
          <motion.h2 className="section-heading" transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Our Trusted Partners</motion.h2>
          <div className='ps-slider-wrap custom-owl-dots'>
          <Partner/>
          </div>
          </div>
        </section>

        <section className='common-section backers-section right-blur'>
          <div className='container'>
          <motion.h2 className="section-heading" transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Our Backers</motion.h2>
          <motion.div className='ps-slider-wrap custom-owl-dots' transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}>
          <Backer/>
          </motion.div>
          </div>
        </section>

        <section className='common-section nine-section bottom-blur'>
          <div className='container'>
          <motion.h2 className="section-heading" transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}><span>Decentralized Edge Computing:
          </span>Redefining the Way We Connect</motion.h2>
          <div className='box-wrap'>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineOne} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Edge server providers</h3>
                  <p>Providers of edge server resources who can contribute their excess computing power to the platform and earn rewards.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineTwo} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>IoT device operators</h3>
                  <p>Operators of IoT devices such as sensors, cameras, and other edge devices who need low latency, real-time processing and analysis of data.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineThree} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Cloud service providers</h3>
                  <p>Cloud service providers who want to offer edge computing as a service to their customers.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineFour} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Content delivery networks</h3>
                  <p>Content delivery networks who need to deliver content with low latency and high throughput.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineFive} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Autonomous vehicle manufacturers</h3>
                  <p>Autonomous vehicle manufacturers who need real-time processing and analysis of sensor data for safe and efficient operation of their vehicles.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineSix} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Telecommunications providers</h3>
                  <p>Telecommunications providers who want to offer edge computing services to their customers for low latency and high throughput applications.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineSeven} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Gaming companies</h3>
                  <p>Gaming companies who want to offer low latency, high-performance gaming experiences to their customers.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineEight} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Healthcare providers</h3>
                  <p>Healthcare pro viders who need real-time processing and analysis of patient data for diagnosis and treatment.</p>
                </div>
              </div>
              </div>
            </motion.div>
            <motion.div className='box-content' transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
            <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
              <div className='box-items'>
                <div className='box-icon'>
                  <Image src={nineNine} alt='Decentralized Infrastructure'/>
                </div>
                <div className='box-text'>
                  <h3>Manufacturing companies</h3>
                  <p>Manufacturing companies who need real-time monitoring and analysis of machine data for predictive maintenance and optimization.</p>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        <div className={`learn-more-popup ${popup}`}>
          <div className='lm-content'>
            <span onClick={popupClose}><Close/></span>
              <h2 className='nm-head'>Connect With Us</h2>
              <ul className='social'>
                <li><Link href="https://twitter.com/Cyborg_network_"><Twitter/></Link></li>
                <li><Link href="https://in.linkedin.com/company/cyborg-network"><Linkedin/></Link></li>
                <li><Link href="https://t.me/CyborgNetworkOfficial"><Telegram/></Link></li>
                {/* <li><Link href="/"><Medium/></Link></li> */}
            </ul>
            <div className='lm-divide'>
                <p>Documents</p>
            </div>
            <div className='lm-link-wrap'>
              
              <div className='ll-content'>
              <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
                <div className='ll-box'>
                  <div className='ll-icon'><File/></div>
                  <div className='ll-text'>One Pager</div>
                  <a href="/docs/cyborg-one-pager.pdf" target="_blank" className='ll-link'>
                      <ExternalLink/>
                  </a>
                </div>
              </div>
              </div>
              <div className='ll-content'>
              <div className='clip-wrap'>
                <div className='box-clip clip-border'></div>
                <div className='ll-box'>
                  <div className='ll-icon'><File/></div>
                  <div className='ll-text'>Lite Paper</div>
                  <a href="/docs/cyborg-lite-paper-v1.pdf" target="_blank" className='ll-link'>
                      <ExternalLink/>
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
