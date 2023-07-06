import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "../store/redux";
import Form from '../Pages/formPage.jsx';
import Employee from '../Pages/employeePage.jsx';

function CustomRoutes() {
    return (
        <Router>
            <Provider store={store}>
                <Routes>
                    <Route exact path="/"  element={<Form/>}/>
                    <Route exact path="/employees"  element={<Employee/>}/>
                </Routes>
            </Provider>
        </Router>
    );
}

export default CustomRoutes;