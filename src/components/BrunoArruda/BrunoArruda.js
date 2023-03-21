import React, {useState} from 'react';
import './BrunoArruda.css';

function BrunoArruda() {
    const [isOpen, setIsOpen] = useState("closed");
    const [stWord, setStWord] = useState("about");
    const [ndWord, setNdWord] = useState("me");

    const handleOpenAbout = () => {
        if (isOpen === "closed") {
            setIsOpen("open");
            setStWord("tank");
            setNdWord("you");
        } else {
            setIsOpen("closed");
            setStWord("about");
            setNdWord("me");
        }
    }

  return (
    <div className={`brunoArruda ${isOpen}`}>
        <div className='brunoArruda--button' onClick={handleOpenAbout}>
            <p>{stWord}<span className='dot'>.</span><span className='me'>{ndWord}</span></p>
        </div>
        <div className={`brunoArruda__content--${isOpen}`}>
        <div className='socialMedias'>
            <a href="https://github.com/BrunoArrm/PokedexV2" target="_blank">
                <div className='socialMedia github'></div>
            </a>
            <a href="https://linkedin.com/in/bruno-arruda-dev" target="_blank">
                <div className='socialMedia linkedin'></div>
            </a>
        </div>
        <div className='sign'>
        </div>
        <p>Desenvolvido por Bruno Arruda</p>
        <div className='motivacional__container'>
            <p className='motivacional'>“A única maneira de fazer algo excelente é amar o que você faz. Se você ainda não a encontrou, continue procurando. Não se acomode” - Steve Jobs.</p>
        </div>
        <div className='sign'>
            <p>Copyright © 2023 | <a className='pokeapi' href="https://pokeapi.co/" target="_blank">POKÉAPI</a> | Todos os direitos reservados.</p>
        </div>
        </div>
    </div>
  );
}

export default BrunoArruda;
