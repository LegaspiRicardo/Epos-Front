import { mockUsers } from "../../data/mockUsers";
import MetricCards from "../../components/sections/admin/MetricCards";

function Dashboard() {
    return (
        <>
            <div className="w-11/12 mx-auto mt-8">
                <h1 className="text-3xl font-semibold mb-4">Panel Administrativo</h1>
            </div>
            <div>
                <MetricCards usuarios={mockUsers} />
            </div>
        </>
    );
}

export default Dashboard;
