import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

// CLASE UNO

// function Hello(props) {
//   return <h1>{props.title}</h1>;
// }

// const Hello = (props) => {
//   return <h1>{props.title}</h1>;
// };

// class Hello extends Component {
//   render() {
//     return <h1>{this.props.title}</h1>;
//   }
// }

// class Text extends Component {
//   render() {
//     const {
//       isActivated,
//       arrayOfNumbers,
//       objetWithInfo,
//       multiply,
//       number,
//       text,
//       title,
//     } = this.props;
//     // Destructuración: accedemos a todas las pripiedades que necesitamos y simplificamos el codigo.

//     // const textoSegunBool = isActivated ? "On" : "Off";
//     const mappedNumbers = arrayOfNumbers.map(multiply);

//     return (
//       <div>
//         {title}
//         {/* <p>{this.props.text}</p>
//         <p>{this.props.number}</p>
//         <p>{textoSegunBool}</p> */}
//         <p>{mappedNumbers.join(", ")}</p>
//         {/* Con el join unimos los datos y los separamos por comas.*/}
//         <p>{objetWithInfo.key}</p>
//         <p>{objetWithInfo.key2}</p>
//         {/* <h1>{title}</h1> Asi no va!!!! */}
//         {/* Con '.key le digo que me muestre el valor de key'.*/}
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <Hello title="¡Hola, soy yo desde props!" />
//         <h3>aprendiendo react</h3> */}
//         <Text
//           arrayOfNumbers={[2, 3, 49821]}
//           objetWithInfo={{ key: "Primer.", key2: "Segundo." }}
//           // isActivated={false}
//           multiply={(number) => number * 10}
//           number={2}
//           text="Creando una clase texto, con un texto"
//           title={<h1>Este es el titulo.</h1>}
//         />
//       </header>
//     </div>
//   );
// }

// export default App;

// CALSE DOS

// class Title extends Component {
//   render() {
//     return <h1>{this.props.text}</h1>;
//   }
// }

// Title.defaultsProps = {
//   text: "Titulo por efecto.",
// };

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Title text="Otro titulo." />
//       </div>
//     );
//   }
// }

// export default App;

// CLASE TRES

class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: this.props.contadorInicial };
    setInterval(
      () => this.setState({ contador: this.state.contador + 1 }), //Para poder modificar el state necesito la funsión setState().
      1000
    );
  }
  render() {
    return <ContadorNumero numero={this.state.contador} />;
  }
}

class ContadorNumero extends Component {
  render() {
    console.log("contadorNumero render");

    return <span>{this.props.numero}</span>;
  }
}

Contador.defaultProps = {
  contadorInicial: 0,
}; //Necesito definir un valor por defecto para el contador, sino no lo toma como un valor numérico.

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Primer componenete con state.</p>
        <Contador contadorInicial={10} />
        {/* <Contador contadorInicial={parseInt(prompt("Infresá un número."))} /> */}
        {/* Me deje ingresar un nro y empezar a contar desde ese nro. */}
      </div>
    );
  }
}

export default App;

// Cómo inicializar el state de un componente usando Class Properties
// class Contador extends Component {
//   state = {contador: 0};

//   render() {
//     return (
//       <div>
//         <h2>El contador está a {this.state.contador}.</h2>
//       </div>
//     );
//   }
// }
