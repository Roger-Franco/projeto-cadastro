import Cabecalho from "../components/Cabecalho";
import Layout from "../components/Layout";

export default function Exemplo() {
  return (
    <Layout titulo="Usando componentes">
    <h1>Exemplo</h1>
    <Cabecalho titulo="Aprenda Next.js"/>
    <Cabecalho titulo="Aprenda React.js"/>
    </Layout>
  )
}