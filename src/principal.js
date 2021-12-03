// Este é o ponto de entrada do Webpack
import Pessoa from "./pessoa"
import './assets' // Por padrão vai buscar dentro da pasta pelo arquivo index.js

const atendente = new Pessoa
console.log(atendente.cumprimentar())

// Para cada tipo de arquivo tem q ter um loader para atender ele, senão o build vai dar problema.
// O mesmo loader pode tratar mais de um tipo de arquivo.