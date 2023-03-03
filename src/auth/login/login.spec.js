import "@testing-library/jest-dom"
import { render , screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Login from "./Login";

import store from '../../store'
const mockNavigate = jest.fn();
jest.mock('react-router',()=>({
    ...jest.requireActual('react-router'),
    useNavigate:() => mockNavigate
}))
describe("Login",()=>{

    it("should render correctly",()=>{;
        render(
            <Provider store={store} >
                <Login/>
            </Provider>
        )
        expect(screen.getByPlaceholderText("Usuário")).toBeInTheDocument()
    })
  //em desenvolvimento  
})