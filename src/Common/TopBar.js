                
import React from 'react'
import { Link } from 'react-router-dom'
export default function TopBar() {
    return (
        <>
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3">
                            <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                            <Link  className="text-white">Бишкек Турусбеков 109/2</Link>
                        </small>
                        <small className="me-3">
                            <i className="fas fa-envelope me-2 text-secondary"></i>
                            <Link  className="text-white">@aibeknabiev05@gmail.com</Link>
                        </small>
                    </div>
                    <div className="top-link pe-2">
                        <Link className="text-white"><small className="text-white mx-2">Купуялык саясаты</small>/</Link  >
                        <Link className="text-white"><small className="text-white mx-2">Пайдалануу шарттары</small>/</Link  >
                        <Link className="text-white"><small className="text-white ms-2">Сатуу жана кайтаруу</small></Link  >
                    </div>
                </div>
            </div>
        </>
    )
}