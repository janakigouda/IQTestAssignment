import {Routes,Route} from "react-router-dom";
import { Quiz } from "./Quiz";
import { Result } from "./Result";

export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={
                <Quiz/>
            }/>
            <Route path="/result" element={
                <Result/>
            }/>
        </Routes>
    )
}