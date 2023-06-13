import { Link } from "react-router-dom";
import { memo } from "react";
export const Categorias = memo(() => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-home fa-lg"></i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/1"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-laptop fa-lg"></i>
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/2"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-mobile fa-lg"></i>
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/category/3"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-tv fa-lg"></i>
                    </button>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to={"/category/4"}>
                    <button className='btn btn-secondary'>
                        <i className="fas fa-headphones fa-lg"></i>
                    </button>
                </Link>
            </li>

        </ul>
    );
})