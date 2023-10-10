import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-whit shadow-sm">
            <div className="p-6">
                <Logo />
            </div>
            <div className="flex fex-col w-full">
                <SidebarRoutes />
            </div>
        </div>
     );
}
 
export default Sidebar;