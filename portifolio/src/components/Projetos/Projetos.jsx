import './projetos.css'

function Projetos(){
    return(
        <section className="projetos" id="projetos">
            <h2>Projetos</h2>
            <p>
                Logo abaixo listarei alguns projetos feitos no qual foram utilizados as skills citadas acimma:
            </p>
            <div className='btn'>
                <button>Ver mais</button>
            </div>
            <ul className='listagem2'>
                <li>
                    <a href="https://projeto3-virid.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        🎹 Loja de instrumentos
                    </a>
                </li>
                <li>
                    <a href="https://ebac-tech-talks-viinii3.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        🗓️ Contador de eventos
                    </a>
                </li>
                <li>
                    <a href="https://clone-disney-plus-mauve.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        🎞️ Clone Disney+
                    </a>
                </li>
                <li>
                    <a href="https://horario-em-tempo-real-pi.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        ⏰ Que horas são?
                    </a>
                </li>
                <li>
                    <a href="https://landing-page-nemo.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        🎬 Landing-page Filme favorito
                    </a>
                </li>
                <li>
                    <a href="https://projeto2-ebac-zeta.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        📞 Lista telefonica
                    </a>
                </li>
                <li>
                    <a href="https://to-do-vue-js-chi.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        📌 To-do afazeres
                    </a>
                </li>
                <li>
                    <a href="https://calculadora-imc-jet.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        📱 Calculadora de IMC
                    </a>
                </li>
                <li>
                    <a href="https://galeria-de-imagens-gamma.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        🖼️ Galeria de imagens
                    </a>
                </li>
                <li>
                    <a href="https://mentalista-theta.vercel.app/">
                        {/* caso queira colocar imagem sera aqui */}
                        🔮 Jogo mentalista
                    </a>
                </li>
            {/* add mais projetos aqui */}
            </ul>
        </section>
    )
}

export default Projetos;