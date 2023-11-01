import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import SideNav from "../components/UIComponents/SideNav";
import Doctors from "../components/Doctors/Doctors";
import Home from "./Home";


jest.mock('../components/UIComponents/SideNav',()=>jest.fn());
jest.mock('../components/Doctors/Doctors',()=>jest.fn());

describe('Home Component',()=>{
    beforeEach(()=>{
        Doctors.mockClear();
        SideNav.mockClear();
    });

    test('render Home component with Doctors and SideNav components',()=>{
        render(<Home/>)
        expect(Doctors).toHaveBeenCalled();
        expect(SideNav).toHaveBeenCalled();
    })
})

