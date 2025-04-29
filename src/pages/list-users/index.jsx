import api from "../../services/api";
import { useEffect, useState } from "react";

function ListUsers() {
  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    async function loadUsers() {
      const token = localStorage.getItem("token");
      const {
        data: { users },
      } = await api.get("/list-users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAllUsers(users);
    }
    loadUsers();
  }, []);

  return (
    <div className="bg-[#0D1117] min-h-screen flex items-center justify-center">
      <div className="bg-[#161B22] p-8 w-96 rounded-md shadow-lg">
        <h1 className="text-center text-[#E6EDF3] font-bold text-2xl mb-6">
          List of all users registred
        </h1>
        <ul className="flex flex-col gap-2">
          {allUsers &&
            allUsers.length > 0 &&
            allUsers.map((user) => (
              <div key={user.id} className="bg-[#0D1117] p-4 border border-[#30363D] rounded-sm">
                <p className="text-[#E6EDF3] font-bold">ID: {user.id}</p>
                <p className="text-[#E6EDF3] font-bold">Email: {user.email}</p>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ListUsers;
