
import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BannerImage from '../images/banner-img.jpg';
import AboutBg from '../images/about-bg.jpg';
import HeyImg from '../images/hey.png';
import Service1 from '../images/service1.jpg';
import Service2 from '../images/service2.jpg';
import Service3 from '../images/service3.jpg';
import Service4 from '../images/service4.jpg';
import Service5 from '../images/service5.jpg';
import Service6 from '../images/service6.jpg';
import Service7 from '../images/service7.jpg';
import RoundImg from '../images/round-slogan.svg';
import LogoIcon from '../images/logo-icon.svg';
import Logo1 from '../images/logo1.png';
import Logo2 from '../images/logo2.png';
import Logo3 from '../images/logo3.png';
import Logo4 from '../images/logo4.png';
import Logo5 from '../images/logo5.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { Link, useLocation } from 'react-router-dom';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

const Index = () => {
  const container = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [location]);


  const slogans = [
    "eCommerce", "Web Development", "Advertising", "Strategy Planning", 
    "Social Media", "SEO", "Web Design", "Marketing", "Media Coverage"
  ];

  useGSAP(() => {
    
    if (!container.current) return;

    const marquee = container.current.querySelector('.marquee') as HTMLElement;
    if (!marquee) return;

    const children = Array.from(marquee.children) as HTMLElement[];
    
    const totalWidth = children.reduce(
      (sum: number, child: HTMLElement) => sum + (child.offsetWidth || 0), 
      0
    );

    if (isNaN(totalWidth)) return;

    marquee.style.width = `${totalWidth / 2}px`;
    
    gsap.to('.marquee', {
      x: `-=${totalWidth / 2}`,
      duration: 35,
      ease: "none",
      repeat: -1
    });
  }, { scope: container });

  const isMobile = window.innerWidth <= 991;

   useGSAP(() => {
  if (!isMobile) { // Only run if not mobile
    const boxes = document.querySelectorAll('.service_box_wrap');
    
    boxes.forEach((box, i) => {
      ScrollTrigger.create({
        trigger: box,
        start: 'top 200px',
        endTrigger: '.servies_wrapper',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        markers: false,
      });
    });
  }
}, { scope: container });

useGSAP(() => {
  if (!isMobile) { // Only run if not mobile
    const title = document.querySelectorAll('.title_one_wrapper');
    ScrollTrigger.create({
      trigger: title,
      start: "top 200px",
      endTrigger: ".servies_wrapper",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
    });
  }
}, { scope: container });

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <section className="banner_wrapper" id='hero'>
              <div ref={container} className="marquee-container" style={{ overflow: 'hidden' }}>
                <div className="marquee" style={{ 
                  display: 'flex', 
                  width: 'fit-content',
                  whiteSpace: 'nowrap'
                }}>
                  {[...slogans, ...slogans].map((slogan, index) => (
                    <span 
                      key={index} 
                      className="slogan" 
                      style={{ 
                        display: 'inline-block',
                        padding: '0 70px',
                        fontSize: '140px'
                      }}
                    >
                      {slogan}
                    </span>
                  ))}
                </div>
              </div>
              <div className="banner_left_wrapper">
                <div className="banner_content">
                  <h1>We’re Not Just Coders <span>We’re Your Digital Growth Partners</span></h1>
                  <p>D-WEB brings together strategy, creativity, and engineering. We help brands build impactful websites, generate qualified leads, and dominate search rankings.</p>
                  <Link to="/" className='btn'>Explore our Work</Link>
                </div>
              </div>
              <div className="banner_right_wrapper">
                <div className="banner_img_wrapper">
                  <img src={BannerImage} alt="" />
                </div>
                <div className="slogan_wrapper">
                  <img src={HeyImg} alt="" />
                  <h6>“Our job isn’t finished until your goals become real results.”</h6>
                </div>
              </div>
            </section>

            <section className='servies_wrapper pt120 pb120 pt80-md pb80-md' id='service'>
              <Container>
                  <Row>
                    <Col lg='4'>
                      <div className="title_one_wrapper">
                        <h2>We want to bring and business the digital world.</h2>
                      </div>
                    </Col>
                    <Col lg='8'>
                      <div className="services_grid_Wrapper pl50 pl0-md">
                        <div className="service_box_wrap service_one">
                          <Row className='align-items-center'>
                            <Col md="5">
                              <div className="service_img">
                                <img src={Service1} alt="" />
                              </div>
                            </Col>
                            <Col md="7">
                              <div className="service_content">
                                <h5>Search</h5>
                                <ul>
                                  <li>Search Engine Optimization (SEO)</li>
                                  <li>Local SEO</li>
                                  <li>E-Commerce SEO</li>
                                  <li>Search Engine Marketing (SEM)</li>
                                  <li>Video SEO</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="service_box_wrap service_two">
                          <Row className='align-items-center'>
                            <Col md="5">
                              <div className="service_img">
                                <img src={Service2} alt="" />
                              </div>
                            </Col>
                            <Col md="7">
                              <div className="service_content">
                                <h5>Social</h5>
                                <ul>
                                  <li>Social Media Marketing</li>
                                  <li>Paid Social Media</li>
                                  <li>Social Commerce New</li>
                                  <li>Influencer Marketing</li>
                                  <li>Community Management</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="service_box_wrap service_three">
                          <Row className='align-items-center'>
                            <Col md="5">
                              <div className="service_img">
                                <img src={Service3} alt="" />
                              </div>
                            </Col>
                            <Col md="7">
                              <div className="service_content">
                                <h5>Methods & Techniques</h5>
                                <ul>
                                  <li>Video Marketing</li>
                                  <li>E-Commerce Marketing</li>
                                  <li>Email Marketing</li>
                                  <li>Email Automations</li>
                                  <li>Marketing Automation</li>
                                  <li>Guest Posting</li>
                                  <li>Affiliate Marketing</li>
                                  <li>Display Advertising</li>
                                  <li>Public Relations</li>
                                  <li>Text Message Marketing</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="service_box_wrap service_four">
                          <Row className='align-items-center'>
                            <Col md="5">
                              <div className="service_img">
                                <img src={Service4} alt="" />
                              </div>
                            </Col>
                            <Col md="7">
                              <div className="service_content">
                                <h5>Analytics & Strategy</h5>
                                <ul>
                                  <li>Marketing Strategy</li>
                                  <li>Brand Strategy New</li>
                                  <li>Digital Marketing Strategy New</li>
                                  <li>UGC Strategy New</li>
                                  <li>Marketing Concepts & Ideation</li>
                                  <li>Marketing Advice</li>
                                  <li>Web Analytics</li>
                                  <li>Conversion Rate Optimization (CRO)</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="service_box_wrap service_five">
                          <Row className='align-items-center'>
                            <Col md="5">
                              <div className="service_img">
                                <img src={Service5} alt="" />
                              </div>
                            </Col>
                            <Col md="7">
                              <div className="service_content">
                                <h5>Content Strategy</h5>
                                <ul>
                                  <li>Blog Writing</li>
                                  <li>Copywriting Services</li>
                                  <li>Content Optimization</li>
                                  <li>Visual Content Creation</li>
                                  <li>Content Calendars</li>
                                  <li>Content Planning</li>
                                  <li>AI-Powered Content Tools</li>
                                  <li>Repurposing Content</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="service_box_wrap service_six">
                          <Row className='align-items-center'>
                            <Col md="5">
                              <div className="service_img">
                                <img src={Service6} alt="" />
                              </div>
                            </Col>
                            <Col md="7">
                              <div className="service_content">
                                <h5>Web Development & UX</h5>
                                <ul>
                                  <li>Front-End Development</li>
                                  <li>Back-End Development</li>
                                  <li>Full Stack Web Development</li>
                                  <li>WordPress Development</li>
                                  <li>UI/UX Design</li>
                                  <li>Shopify / WooCommerce Development</li>
                                  <li>Custom Web Applications</li>
                                  <li>Mobile-Responsive Design</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="service_box_wrap service_seven">
                          <Row className='align-items-center'>
                            <Col md="5">
                              <div className="service_img">
                                <img src={Service7} alt="" />
                              </div>
                            </Col>
                            <Col md="7">
                              <div className="service_content">
                                <h5>Reputation Building</h5>
                                <ul>
                                  <li>Reputation Management</li>
                                  <li>Review Management</li>
                                  <li>Google My Business Optimization</li>
                                  <li>Brand Monitoring Tools</li>
                                  <li>Customer Testimonials Strategy</li>
                                  <li>Trust Signals & Badges</li>
                                  <li>Crisis Management</li>
                                  <li>Press Release Distribution</li>
                                  <li>Social Proof Integration</li>
                                </ul>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
              </Container>
            </section>

            <section className="about_wrapper pt150 pt100-md" id='about' style={{ backgroundImage: `url(${AboutBg})` }}>
              <Container>
                <div className="round_wrapper">
                  <div className="round_img_wrapper">
                    <img src={RoundImg} alt="" />
                  </div>
                    <img src={LogoIcon} className="logoIcon" alt="" />
                </div>
                <div className="about_title">
                  <h2>We Build More Than Websites</h2>
                  <p>“Your website should be your best salesperson—working 24/7.”</p>
                </div>
              </Container>
              <div className="about_description">
                <Container>
                  <p>At D-WEB, we don’t just design websites—we craft experiences that convert. Whether you're a startup or an established brand, our expert team blends modern design, smart development, and cutting-edge SEO to help your business get noticed, rank higher, and grow faster. From concept to launch, everything we build is tailored to your goals and your audience.</p>
                </Container>
              </div>
            </section>

            <section className='indystry_wrapper pt100 pb100  pt80-md pb80-md' id='industry'>
              <Container>
                <div className="title_two_wrapper">
                  <h2><span>Industry-Focused</span> Digital Solutions</h2>
                  <p>At D-WEB, we’re passionate about partnering with organizations in every field—from healthcare and finance to retail, hospitality, and beyond. We understand that every industry has its own challenges and opportunities, which is why we take a tailored approach to every project.</p>
                </div>
              </Container>
              <div className="industry_logo_wrapper">
                  <div className="insustry_logo_sider mb25">
                    <Swiper
                      slidesPerView={5}
                      spaceBetween={25}
                      freeMode={false}
                      loop={true}
                      speed={5000}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                      }}
                      modules={[Autoplay]}
                      className="industry_slider"
                      allowTouchMove={false}
                      resistance={false}
                      breakpoints={{
                      0: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                      },
                      481: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      991: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                      },
                    }}
                    >
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo1} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo2} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo3} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo4} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo5} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo1} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo2} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo3} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo4} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo5} alt="" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="insustry_logo_sider mb25">
                    <Swiper
                      slidesPerView={5}
                      spaceBetween={25}
                      freeMode={false}
                      loop={true}
                      speed={5000}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                      }}
                      modules={[Autoplay]}
                      className="industry_slider"
                      allowTouchMove={false}
                      resistance={false}
                      dir="rtl"
                      breakpoints={{
                      0: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                      },
                      481: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      991: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                      },
                    }}
                    >
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo1} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo2} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo3} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo4} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo5} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo1} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo2} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo3} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo4} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo5} alt="" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                  <div className="insustry_logo_sider ">
                    <Swiper
                      slidesPerView={5}
                      spaceBetween={25}
                      freeMode={false}
                      loop={true}
                      speed={5000}
                      autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                      }}
                      modules={[Autoplay]}
                      className="industry_slider"
                      allowTouchMove={false}
                      resistance={false}
                      breakpoints={{
                      0: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                      },
                      481: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                      },
                      991: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                      },
                    }}
                    >
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo1} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo2} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo3} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo4} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo5} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo1} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo2} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo3} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo4} alt="" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="client_logo_wrap">
                          <img src={Logo5} alt="" />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
              </div>
            </section>

            <section className="growth_wrapper pt100 pb100 pt80-md pb80-md">
              <Container>
                <Row>
                  <Col lg="6">
                      <div className="growth_left_wrap pr80 pr0-md">
                        <h3>Your Digital Growth, Covered From strategy to results, we handle it all</h3>
                      </div>
                  </Col>
                  <Col lg="6">
                      <div className="growth_right_Wrap">
                        <p className='mb30'>No matter where you are in your digital journey, D-WEB’s experts are here to help you achieve your next big goal. From strategy and creative design to technical execution and ongoing optimization, we deliver end-to-end solutions tailored to your business and your budget.</p>
                        <Link to="/" className='btn'>Explore our Work</Link>
                      </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="testimonial_wrapper pt100 pb100 pt80-md pb80-md" id='testimonial'>
              <Container>
                <div className="title mb50">
                  <h2 className='h3 fw_700 text-center mb0'>Trusted by people</h2>
                </div>
                <Row className='justify-content-center'>
                  <Col lg="6">
                      <div className="testimonial_slider_wrapper">
                        <Swiper navigation={true} modules={[Navigation]} loop={true} className="testimonial_slider">
                          <SwiperSlide>
                            <div className="testimonial_slide">
                              <p>"D-WEB helped us triple our website traffic in just 6 months. We’ve never looked more professional."</p>
                              <h6>— Sarah L., E-commerce Owner</h6>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="testimonial_slide">
                              <p>"D-WEB helped us triple our website traffic in just 6 months. We’ve never looked more professional."</p>
                              <h6>— Sarah L., E-commerce Owner</h6>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide>
                            <div className="testimonial_slide">
                              <p>"D-WEB helped us triple our website traffic in just 6 months. We’ve never looked more professional."</p>
                              <h6>— Sarah L., E-commerce Owner</h6>
                            </div>
                          </SwiperSlide>
                        </Swiper>
                      </div>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
