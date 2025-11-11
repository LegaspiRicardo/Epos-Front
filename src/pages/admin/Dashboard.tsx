import { mockUsers } from "../../data/mockUsers";
import MetricCards from "../../components/sections/admin/MetricCards";

function Dashboard() {
    return (
        <>
            <div className="lg:w-11/12 md:w-10/12 w-8/12 mx-auto mt-8">
                <h1 className="text-3xl font-semibold mb-4">Panel Administrativo</h1>
            </div>
            <div>
                <MetricCards usuarios={mockUsers} />
            </div>
        </>
    );
}

export default Dashboard;
