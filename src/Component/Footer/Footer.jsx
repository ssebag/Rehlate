import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    
    const { t, i18n } = useTranslation('footer');
    
  return (
    <footer className={`bg-dark text-center text-lg-start text-white ${i18n.language ==='ar' ? 'arabic' : ''}`}>
        <div className="container p-4 pb-0">
            <section className="">
                <div className="row">
                    <div className={`col-lg-4 col-md-6 mb-4 ${i18n.language ==='en' ? 'arabic' : ''} `}>
                        <h5 className="text-uppercase">رحلاتي<span className='text-warning'>.</span> </h5> 

                        <p className='text-secondary'>
                           {t('paragraph')}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-uppercase"> {t('About.About')}</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className='text-secondary'> {t('About.Company')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('About.AboutUs')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('About.Careers')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('About.Blog')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 ">
                        <h5 className="text-uppercase"> {t('OurServices.OurServices')}</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className='text-secondary'> {t('OurServices.FlightTickets')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('OurServices.Cruises')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('OurServices.Hotels')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('OurServices.LandTrips')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('OurServices.VisaServices')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 ">
                        <h5 className="text-uppercase">{t('Reservations.Reservations')}</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className='text-secondary'>{t('Reservations.NewOffers')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('Reservations.CheckBooking')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('Reservations.Subscriptions')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('Reservations.TravelMethods')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 ">
                        <h5 className="text-uppercase">{t('Website.Website')}</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className='text-secondary'>{t('Website.PrivacyPolicy')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('Website.TermsOfUse')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('Website.ReportAProblem')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('Website.ContactUs')}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr className="mb-4" />
            <section className="text-center flex-bw">
              <p>جميع الحقوق محفوظة <span className='text-warning'>صبا غنيم 2025 </span></p>
              <div>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                   <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>

            </section>
        </div>
       
    </footer>
  )
}
