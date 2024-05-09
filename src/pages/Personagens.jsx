import Professor_arthur from "../assets/professorarthur.webp"
import Mariano from "../assets/mariano.jpg"
import Aurora from "../assets/aurora.jpg"

export default function Personagens() {
  return (
    <div>
      <main>
        <img className=" rounded-md my-2 m-5" src={Professor_arthur} alt="imagem do professor" />
        <h2 className="	text-wrap inline-block align-middle md:indent-20">Sebastían Rulli</h2>
        <p>O personagem Arthur de la Barrera, é o professor de Teresa, que irá desencadear um papel muito importante para a história da novela</p>
      </main>
      <main>
        <img className= "rounded-md my-8 m-20" src={Mariano} alt="mariano" />
        <h2>Aarón Días</h2>
        <p>O personagem Mariano cresceu junto com a protagonista, Teresa, a atriz desenvolve um sentimento por ele, o</p>
      </main>
      <main>
        <img src={Aurora} alt="Imagem da Aurora" />
        <h2>Ana Brenda Contreras</h2>
        <p>A Atris Ana Brenda Contreras vai enterpletar o papel de melhor amiga da protagonista, que ira resultar em muitos problemas ja que a propria irá desencadear sentimentos pelo ex namorado de sua melhor amiga Mariano   . </p>
      </main>
    </div>
  )
}