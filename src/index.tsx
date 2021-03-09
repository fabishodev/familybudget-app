import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

/*
const App = () =>{

    let title = 'Listado de usuarios';
    let text = 'Despliega la lista de usuarios del sistema';

    return(
        <Fragment>
            <Header title={title} text={text}></Header>
            <Content>
                <Fragment>
                    <button>Refrescar</button>
                </Fragment>
            </Content>
            <Footer></Footer>
        </Fragment>
    );
};
*/

ReactDOM.render(<App/>, document.getElementById('root'));