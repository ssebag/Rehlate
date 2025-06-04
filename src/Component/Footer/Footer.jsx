import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    
    const { t, i18n } = useTranslation();
    
  return (
    <footer className={`bg-dark text-center text-lg-start text-white ${i18n.language ==='ar' ? 'arabic' : ''}`}>
        <div className="container p-4 pb-0">
            <section className="">
                <div className="row">
                    <div className={`col-lg-4 col-md-6 mb-4 ${i18n.language ==='en' ? 'arabic' : ''} `}>
                        <h5 className="text-uppercase">رحلاتي<span className='text-warning'>.</span> </h5> 

                        <p className='text-secondary'>
                           {t('footer.paragraph')}
                        </p>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4">
                        <h5 className="text-uppercase"> {t('footer.About.About')}</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.About.Company')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.About.AboutUs')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.About.Careers')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.About.Blog')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 ">
                        <h5 className="text-uppercase"> {t('footer.OurServices.OurServices')}</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.OurServices.FlightTickets')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.OurServices.Cruises')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.OurServices.Hotels')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.OurServices.LandTrips')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'> {t('footer.OurServices.VisaServices')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 ">
                        <h5 className="text-uppercase">{t('footer.Reservations.Reservations')}</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className='text-secondary'>{t('footer.Reservations.NewOffers')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('footer.Reservations.CheckBooking')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('footer.Reservations.Subscriptions')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('footer.Reservations.TravelMethods')}</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 mb-4 ">
                        <h5 className="text-uppercase">{t('footer.Website.Website')}</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a href="#!" className='text-secondary'>{t('footer.Website.PrivacyPolicy')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('footer.Website.TermsOfUse')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('footer.Website.ReportAProblem')}</a>
                            </li>
                            <li>
                            <a href="#!" className='text-secondary'>{t('footer.Website.ContactUs')}</a>
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
