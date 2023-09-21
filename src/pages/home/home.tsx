import cardapio from 'data/cardapio.json';
import style from './Home.module.scss';
import TemaPadrao from 'styles/TemaPadrao.module.scss';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    let pratosRecommended = [...cardapio];
    pratosRecommended = pratosRecommended.sort(() => 0.5 - Math.random()).splice(0, 3);
    const navigate = useNavigate();

    function redirectToDetail(prato: typeof cardapio[0]) {
        navigate(`/prato/${prato.id}`, { state: { prato } });
    }

    return (
        <section>
            <h3 className={TemaPadrao.title}>
                Recomendações do chefe
            </h3>
            <div className={style.recommendeds}>
                {pratosRecommended.map(item => (
                    <div key={item.id} className={style.recommended}>
                        <div className={style.recommended__image}>
                            <img src={item.photo} alt={style.title} />
                        </div>
                        <button onClick={() => redirectToDetail(item)} className={style.recommended__button}>
                            Ver mais
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}