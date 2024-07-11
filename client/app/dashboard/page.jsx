import SideBar from "../_component/SideBar";

export default function Dashboard(){
    return (
        <div className="h-screen flex">

            <div className="w-1/5">
                <SideBar></SideBar>
            </div>
            <div className="w-4/5">
                <div className="h-1/2">
                    Portfolio
                </div>
                <div className="h-1/2">
                    Market Charts
                </div>


            </div>

        </div>
    )
}