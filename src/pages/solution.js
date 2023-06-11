import Head from 'next/head'
import Image from 'next/image'
import solutionCover from '../../public/images/solution-cover.svg'
import Architecture from '../../public/images/architecture.svg'
import ArchitectureMob from '../../public/images/architecture-mob.svg'
import StackBarChart from '@/components/StackBarChart'
import LineBarChart from '@/components/LineBarChart'
import Circle from '@/components/icons/Circle'


export default function Solution() {
  return (
    <>
      <Head>
        <title>Solution | Cyborg Network</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>
        <section className='common-section solution-hero-section'>
        <div className='container'>
        <h1 className="hero-heading center-hero-heading">Why Cyborg?</h1>
        <div className='solution-wrap d-flex a-center'>
          <div className='d-left'>
          <div className='sw-left'>
          <Image src={solutionCover} alt='solution-cover-image'/>
          </div>
          </div>
          <div className='d-right'>
          <div className="sw-right">
          <div className='sw-detail'>
            <h2>An Untapped Market</h2>
            <p>Many businesses and individuals already rely on edge computing to manage and process their data, but the potential for edge systems to become the backbone of the decentralized web remains largely untapped. With the emergence of IoT, 5G networks, and smart cities, the demand for edge computing infrastructure is only going to increase.</p>
          </div>
          <div className='sw-detail'>
            <h2>Our Solution</h2>
            <p>At Cyborg, we are committed to providing a secure and decentralized infrastructure for edge computing that empowers businesses to leverage the full potential of the decentralized web. Our platform leverages blockchain technology to create an incentivized and efficient ecosystem for edge computing, enabling the secure exchange of data, and reducing the risk of data breaches.</p>
          </div>
          </div>
          </div>
          </div>
        </div>
        </section>

        <section className='common-section architecture-section middle-blur left-logo-bg'>
          <div className='container'>
            <h2 className="section-heading">Architecture</h2>
            <Image src={Architecture} alt='Architecture Diagram' className='arc-img arc-web'/>
            <Image src={ArchitectureMob} alt='Architecture Diagram' className='arc-img arc-mob'/>
          </div>
        </section>

        <section className='common-section market-section un-clip right-logo-bg left-blur'>
          <div className='container'>
            <div className='sh-wrap'>
              <h2 className="section-heading">Market Validation</h2>
              <p className='section-desc'>Experience our purpose-built platform for edge computing, meeting rising demand for secure and decentralized infrastructure. With a projected <strong>CAGR</strong> of <strong>29%</strong>, we&apos;ll transform the industry, shaping the future and empowering businesses with cutting-edge solutions. Join us now and unlock new possibilities.</p>
            </div>
            <div className='market-wrap d-flex'>
              <div className='d-left'>
                <div className='mw-left'>
                <div className='clip-wrap'>
                <div className='box-clip clip-border'></div>
                  <div className='mw-content'>
                    <div className='mw-header'>
                      <h3 className='mw-head'>Total edge computing addressable revenue by value chain component, 2020 - 2030</h3>
                      <h4 className='mw-highlight'>(In Billions $USD)</h4>
                    </div>
                    <div className='mw-graph'>
                      <StackBarChart/>
                    </div>
                  </div>
                  </div>
                  <div className='mw-footer'>
                    <p className='mw-desc'>Our cutting-edge technology is being designed to meet the needs of the booming edge market, which is projected to be worth nearly <strong>USD 300 Billion</strong> by <strong>2025</strong>, with over <strong>1,500</strong> network edge data centers expected to be built by telecom operators</p>
                  </div>
                </div>
              </div>
              <div className='d-right'>
                <div className='mw-right'>
                <div className='clip-wrap'>
                <div className='box-clip clip-border'></div>
                <div className='mw-content'>
                  <div className='mw-header'>
                    <h3 className='mw-head'>Network edge data centre* capacity (available to developers/enterprises)</h3>
                  </div>
                  <div className='mw-graph'>
                  <LineBarChart/>
                  </div>
                </div>
                </div>
                <div className='mw-footer'>
                    <p className='mw-desc'>*Network edge data centres refer to edge data centres within telecom operator facilities that are used for enterprises/consumer applications, but also host network infrastructure (e.g. core, access network)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='common-section roadmap-section right-blur'>
          <div className='roadmap-bg'>
          <div className='container'>
            <div className='sh-wrap'>
              <h2 className="section-heading">Roadmap</h2>
              <p className='section-desc'>We have a clear roadmap to guide us in the development and launch of our platform, with milestones including:</p>
            </div>
            <div className='roadmap-wrap'>
              <div className='rw-content'>
                <div className='rw-line'></div>
                <div className='rw-item'>
                  <div className='rw-time'><h4>Q2 2023</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'>
                    <div className='rw-detail-desc'>
                    <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
                    <p><span>Q2 2023</span>Launch of the website and publication of the Litepaper</p>
                    </div>
                    </div>
                    </div>
                </div>
                <div className='rw-item'>
                  <div className='rw-time'><h4>Q3 2023</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q3 2023</span>Commencement of PoC development</p></div></div>
                </div>
                </div>
                <div className='rw-item'>
                  <div className='rw-time'><h4>Q4 2023</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'>
                  <div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q4 2023</span>Release of the Minimum Viable Product (MVP)</p></div></div>
                </div>
                </div>
                <div className='rw-item'>
                  <div className='rw-time'><h4>Q1 2024</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q1 2024</span>Testing, Validation, and Documentation</p></div></div>
                </div>
                </div>
                <div className='rw-item'>
                  <div className='rw-time'><h4>Q2 2024</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q2 2024</span>Community Building and Marketing</p></div></div>
                </div>
                </div>
                <div className='rw-item'>
                  <div className='rw-time'><h4>Q3 2024</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q3 2024</span>Expansion and Partnerships</p></div></div>
                </div>
                </div>
                <div className='rw-item'>
                  <div className='rw-time'><h4>Q4 2024</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q4 2024</span>Full product launch with open access and marketing outreach to increase adoption</p></div></div>
                </div>
                </div>
              </div>
              </div>
            </div>
            </div>
            </section>
    </>
  )
}
