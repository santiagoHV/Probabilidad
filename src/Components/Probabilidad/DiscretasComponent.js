import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class DiscretasComponent extends Component {
    render() {
        return (
            <div className="">
                <h2>Distribución discreta de probabilidad</h2>
                <hr/>
                <div className="row">
                    <div className="col-8">
                        <p>
                        Una variable aleatoria discreta toma cada uno de sus valores con cierta probabilidad. Por ejemplo, allanzar una moneda tres veces, la variable X, que representa el número de caras, toma el valor 2 con 3/8 de probabilidad, pues 3 de los 8 puntos muestrales igualmente probables tienen como resultado dos caras y una cruz.
                        </p>
                    </div>
                    <div className="offset-3 col-8">
                        <p>
                        Con frecuencia es conveniente representar todas las probabilidades de una variablealeatoria X usando una fórmula, la cual necesariamente sería una función de los valores numéricos x que denotaremos con f (x), g(x), r (x) y así sucesivamente.<br/> Por lo tanto, escribimos f (x) = P(X = x); es decir, f (3) = P(X = 3). Al conjunto de pares ordenados (x,f (x)) se le llama función de probabilidad, función de masa de probabilidad o distribución de probabilidad de la variable aleatoria discreta X.
                        </p>
                    </div>
                    <div className="sub-container">
                        <p>
                        El conjunto de pares ordenados (x, f (x)) es una función de probabilidad, una función
                        de masa de probabilidad o una distribución de probabilidad de la variable aleatoria
                        discreta X si, para cada resultado x posible,
                        1. f (x ) ≥ 0,
                        2. x
                        f (x ) = 1,
                        3. P (X = x ) = f (x ).
                        </p>
                    </div>
                </div>
                <h3>Ejemplo interactivo</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-8">
                        Un embarque de 20 computadoras portátiles similares para una tienda minorista contiene 3 que están defectuosas. Si una escuela compra al azar 2 de estas computadoras, calcule la distribución de probabilidad para el número de computadoras defectuosas.
                        </div>
                    </div>
            </div>
        )
    }
}
