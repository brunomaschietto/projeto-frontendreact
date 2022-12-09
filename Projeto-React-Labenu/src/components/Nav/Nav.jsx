import { DivPai, DivFilhoUm } from "./styles";
import iconeSatelite from "../Fotos/iconeSatelite.png";

export default function Nav() {
  return (
    <DivPai>
      <DivFilhoUm>
      <img src={iconeSatelite} />
      <h1>Seja muito bem-vindo(a) a maior exposição de satélites do mundo!</h1>
      </DivFilhoUm>
      <h2>
        Só aqui você encontra os satélites mais raros já enviados ao espaço.
      </h2>
      <h2>Fique à vontade para escolher o modelo que mais lhe agrada.</h2>
    </DivPai>
  );
}
