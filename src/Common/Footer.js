import React from 'react'
import { socialIcon } from '../Data/Data'

export default function Footer() {
    return (
        <>
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
                <div className="container py-5">
                    <div className="pb-4 mb-4" style={{borderBottom: "1px solid rgba(226, 175, 24, 0.5)"}}>
                        <div className="row g-4">
                            <div className="col-lg-3">
                                <a href="#">
                                    <h1 className="text-primary mb-0">Fruitables</h1>
                                    <p className="text-secondary mb-0">Жаңы продуктылар</p>
                                </a>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mx-auto">
                                    <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="email" placeholder="Your Email" />
                                    <button type="тапшыруу" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{top: "0", right: "0"}}>Азыр жазылыңыз</button>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="d-flex justify-content-end pt-3">
                                    {socialIcon.map((icons, index) => (
                                        <a className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle" href="" key={index}>{icons.icon}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Эмне үчүн адамдар бизге жагат!</h4>
                                <p className="mb-4">терүү, негизинен өзгөрүүсүз бойдон калууда. Ал эле
                                    1960-жылдары Aldus PageMaker, анын ичинде Лорем Ипсум менен популярдуу болгон.</p>
                                <a href="" className="btn border-secondary py-2 px-4 rounded-pill text-primary">Кененирээк окуу</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Дүкөн маалыматы</h4>
                                <a className="btn-link" href="">Биз жөнүндө</a>
                                <a className="btn-link" href="">Биз менен байланыш</a>
                                <a className="btn-link" href="">Купуялык саясаты</a>
                                <a className="btn-link" href="">Шарттары жана шарттары</a>
                                <a className="btn-link" href="">Кайтаруу саясаты</a>
                                <a className="btn-link" href="">Көп берилүүчү суроолор жана жардам</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="d-flex flex-column text-start footer-item">
                                <h4 className="text-light mb-3">Каттоо эсеби</h4>
                                <a className="btn-link" href="">Менин аккаунтум</a>
                                <a className="btn-link" href="">Дүкөндүн чоо-жайы</a>
                                <a className="btn-link" href="">Соода корзинасы</a>
                                <a className="btn-link" href="">Каалоо тизмеси</a>
                                <a className="btn-link" href="">Заказ тарыхы</a>
                                <a className="btn-link" href="">Эл аралык заказдар</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Байланыш</h4>
                                <p>Дарек: Бишкек Турусбеков 109/2</p>
                                <p>Email: @aibeknabiev05@gmail.com</p>
                                <p>Телефон: 0702 952 200</p>
                                <p>Төлөм кабыл алынды</p>
                                <img src="img/payment.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}