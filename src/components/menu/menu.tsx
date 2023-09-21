import { ReactComponent as Logo} from 'assets/imgs/logo.svg';
import style from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
    const rotas = [{
        label: 'Início',
        to: '/'
    }, {
        label: 'Cardápio',
        to: '/cardapio'
    }, {
        label: 'Sobre',
        to: '/sobre'
    }];
    return (
        <nav className={style.nav}>
            <Logo width={152} height={64}/>
            <ul className={style.nav__list}>
                {rotas.map((rota, index) => (
                    <li key={index} className={style.nav__link}>
                        <Link to={rota.to}>
                            {rota.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}