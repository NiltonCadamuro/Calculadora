import { Btn } from "./Btn";

export function BtnLine(){
    return(
        <div className="m-7 flex justify-between flex-wrap">
            <Btn value= {['7','8','9','+','4','5','6','-','1','2','3','*','.','0','=','/']}/>
        </div>
    )
}