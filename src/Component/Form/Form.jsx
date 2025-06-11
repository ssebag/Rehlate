import React from 'react'
import './Form.css'
import { useTranslation } from 'react-i18next';

export default function Form() {
    const { t, i18n } = useTranslation();

  return (
        <form>
            <div className="form-group">
                <h3 for="exampleFormControlInput1">{t('Contact.name')}</h3>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={t('Contact.placeholder_name')} />
            </div>
            <div className="form-group">
                <h3 for="exampleFormControlInput1">{t('Contact.email')}</h3>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={t('Contact.placeholder_email')} />
            </div>
            <div className="form-group">
                <h3 for="exampleFormControlTextarea1" >{t('Contact.subject')}</h3>
                <textarea placeholder={t('Contact.placeholder_subject')} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn bg-dark text-light">{t('Contact.send')}</button>
        </form>
  )
}
