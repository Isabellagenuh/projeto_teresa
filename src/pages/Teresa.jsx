
import novelaTeresa from "../assets/novela.jpg"


export default function Teresa() {
  return (
    <div>
    <header className="bg-slate-200">
      <h1 className="text-7xl font-bold text-black text-center">Teresa</h1>
    </header>

      <main>
      <img className="rounded-md my-8 m-60" src={novelaTeresa}  alt="teresa em sua novela do SBT" />
        <h2 className="text-3xl font-bold text-gray-900 font-sans my-10 m-60">Novela do SBT</h2>
        <p className="text-xl text-center my-8 m-60">A trama conta a história de Teresa, uma jovem dominada pela ambição, mas que não está disposta a trabalhar para melhorar sua condição social e opta pelo caminho do engano e da traição. Seus pais fizeram um grande sacrifício para lhe dar uma vida digna e sem carências, mas para ela nada é suficiente. Mariano está loucamente apaixonado por ela e está sempre a sua disposição. Mas ela, apesar de gostar de Mariano, o vê apenas como algo de sua propriedade. Sempre que tem oportunidade deixa o jovem para ir atrás de homens com poder e fortuna. Ela só volta a ficar com ele quando sabe que há outras mulheres interessadas..</p>
        <a className="block px-10 py-3 bg-slate-950 text-white w-fit m-60 rounded-md" href="www.primevideo.com">Assistir</a>
      </main>
    </div>

    
  )
}

