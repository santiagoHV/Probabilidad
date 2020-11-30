import React, { Component } from 'react'
import { MathComponent as Math} from 'mathjax-react';
import {Form, FormGroup, Input, Label, Col} from 'reactstrap';
import '../../assets/operations'
import 'bootstrap/dist/css/bootstrap.min.css';

var enumer =  [0,1,2];

class DiscretasComponent extends Component {

    

    constructor(props){
        super(props);
        this.state = {
            poblacion: 20,
            exitos: 3,
            muestra: 2, 
        };
        
        this.handleOnchange = this.handleOnchange.bind(this);
    }

    setEnumer(limit){
        for(var i = 0; i <= limit; i++){
            enumer.push(i)
        }
    }
    handleOnchange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }
    combinatoria(n,x){
        return (this.factorial(n)/(this.factorial(x)*(this.factorial(n-x))));
      }
    factorial(x){
        if(x === 0){
            return 1;
        }
        else return x*this.factorial(x-1);
    }
    


    render() {
        const operations = enumer.map((i) => {
                return(
                    <div className='col-5 math'>
                        <Math tex={String.raw`f(${i}) = P(X = ${i}) = \frac{\left[\begin{array}s${this.state.exitos} \\ ${i} \end{array}\right] \left[\begin{array}s${this.state.poblacion - this.state.exitos} \\ ${this.state.muestra - i} \end{array}\right]}{\left[\begin{array} s
                            ${this.state.poblacion} \\ ${this.state.muestra} \end{array}\right]} = \frac{${this.combinatoria(this.state.exitos,i) * this.combinatoria(this.state.poblacion - this.state.exitos,this.state.muestra - i)}}{${this.combinatoria(this.state.poblacion,this.state.muestra)}}`}/>
                    </div>
                );
        });
        console.log(this.combinatoria(this.state.exitos,0));
        console.log(this.combinatoria(this.state.poblacion - this.state.exitos,this.state.muestra - 0));
        return (
            <div className="">
                <h2>Distribución discreta de probabilidad </h2>
                <hr/>
                <div className="row">
                    <div className="col-8">
                        <p className="comun-text">
                        Una variable aleatoria discreta toma cada uno de sus valores con cierta probabilidad. Por ejemplo, allanzar una moneda tres veces, la variable X, que representa el número de caras, toma el valor 2 con 3/8 de probabilidad, pues 3 de los 8 puntos muestrales igualmente probables tienen como resultado dos caras y una cruz.
                        </p>
                    </div>
                    <div className="offset-3 col-8">
                        <p className="comun-text">
                        Con frecuencia es conveniente representar todas las probabilidades de una variablealeatoria X usando una fórmula, la cual necesariamente sería una función de los valores numéricos x que denotaremos con f (x), g(x), r (x) y así sucesivamente.<br/> Por lo tanto, escribimos f (x) = P(X = x); es decir, f (3) = P(X = 3). Al conjunto de pares ordenados (x,f (x)) se le llama función de probabilidad, función de masa de probabilidad o distribución de probabilidad de la variable aleatoria discreta X.
                        </p>
                    </div>
                    <div className="sub-container">
                        <p className='comun-text'>
                        El conjunto de pares ordenados (x, f (x)) es una función de probabilidad, una función
                        de masa de probabilidad o una distribución de probabilidad de la variable aleatoria
                        discreta X si, para cada resultado x posible,
                        <ol>
                            <li> <Math tex={String.raw`{f(x) ≥ 0}`}/></li>
                            <li> <Math tex={String.raw`\sum _x^{ }\:f\left(x\right)\:=\:1`}/></li>
                            <li> <Math tex={String.raw`P(X = x) = f(x)` } color={'red'}/></li>
                        </ol>
                        </p>
                    </div>
                </div>
                <h3 className='ml-4'>Ejemplo interactivo</h3>
                    <hr/>
                    <div className="row">
                        <div className="col-md-7  col-12 ml-4 mb-1 comun-text">
                        Un embarque de <strong>C</strong> computadoras portátiles similares para una tienda minorista contiene <strong>D</strong> que están defectuosas. Si una escuela compra al azar <strong>A</strong> de estas computadoras, calcule la distribución de probabilidad para el número de computadoras defectuosas.
                        </div>
                        <div className="col-md-4 col-12 edit-zone pt-2">
                            <Form>
                                <FormGroup row>
                                    <Label className='offset-1 col-1 mt-2'>C: </Label>
                                    <Col >
                                        <Input type='text' id='poblacion' name='poblacion'
                                        className='col-5'
                                        value={this.state.poblacion}
                                        onChange={this.handleOnchange}/>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label className='offset-1 col-1 mt-2'>D: </Label>
                                    <Col >
                                        <Input type='text' id='exitos' name='exitos' 
                                        className='col-5'
                                        value={this.state.exitos}
                                        onChange={this.handleOnchange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label className='offset-1 col-1 mt-2'>A: </Label>
                                    <Col >
                                        <Input type='text' id='muestra' name='muestra' 
                                        className='col-5'
                                        value={this.state.muestra}
                                        onChange={this.handleOnchange}/>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                    <br/>
                <h5 className='ml-4'>Solución</h5> 
                <div className='row  mt-2'>
                    <div className=' ml-4 col-10 comun-text'>
                    Sea X una variable aleatoria cuyos valores x son los números posibles de computadoras defectuosas compradas por la escuela. Entonces x sólo puede asumir los números 0, 1 y 2. Así:
                    </div>
                </div>   
                <div className='row m-3'>
                    {operations}
                </div>
            </div>
        )
    }
}

export default DiscretasComponent;