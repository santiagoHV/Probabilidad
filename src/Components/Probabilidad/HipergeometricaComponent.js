import React, { Component } from 'react'

export default class HipergeometricaComponent extends Component {
    render() {
        return (
            <div>
                <h2>Distribución discreta de probabilidad </h2>
                <hr/>
                <div className="row">
                    <div className="col-8">
                        <p className="comun-text">
                        Es una distribución discreta que modela el número de eventos en una muestra de tamaño fijo cuando se conoce el número total de elementos en la población de la cual proviene la muestra. Cada elemento de la muestra tiene dos resultados posibles (es un evento o un no evento). Las muestras no tienen reemplazo, por lo que cada elemento de la muestra es diferente. Cuando se elige un elemento de la población, no se puede volver a elegir. Por lo tanto, la probabilidad de que un elemento sea seleccionado aumenta con cada ensayo, presuponiendo que aún no haya sido seleccionado.</p>
                    </div>
                    <div className="offset-3 col-8">
                        <p className="comun-text">
                        Se utiliza la distribución hipergeométrica para muestras obtenidas de poblaciones relativamente pequeñas, sin reemplazo. Por ejemplo, la distribución hipergeométrica se utiliza en la prueba exacta de Fisher para probar la diferencia entre dos proporciones y en muestreos de aceptación por atributos cuando se toman muestras de un lote aislado de tamaño finito.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
