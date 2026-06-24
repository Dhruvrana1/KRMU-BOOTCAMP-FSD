//App.jsx
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editId, setEditId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    department: "",
    salary: "",
  });


  const API_URL = "https://krmu-bootcamp-fsd-1.onrender.com/employees";

  // FETCH EMPLOYEES

  const getEmployees = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setEmployees(data);
  };
  
  useEffect(() => {
    getEmployees();
  }, []);

  // HANDLE INPUT

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ADD EMPLOYEE

  const addEmployee = async (e) => {
  e.preventDefault();

  if (editId) {
    await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setEditId(null);
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  setFormData({
    name: "",
    department: "",
    salary: "",
  });

  getEmployees();
};

  const editEmployee = (employee) => {
  setFormData({
    name: employee.name,
    department: employee.department,
    salary: employee.salary,
  });

  setEditId(employee.id);
};

  // DELETE EMPLOYEE

  const deleteEmployee = async (id) => {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    getEmployees();
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>

      <form onSubmit={addEmployee} className="form">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <button type="submit">
  {editId ? "Update" : "Add"}
</button>
      </form>

      <div className="employee-grid">
        {employees.map((employee) => (
          <div key={employee.id} className="card">
            <h3>{employee.name}</h3>

            <p>Department: {employee.department}</p>

            <p>Salary: {employee.salary}</p>

            <button
              className="delete-btn"
              onClick={() => deleteEmployee(employee.id)}
            >
              Delete
            </button>
            <button
  className="edit-btn"
  onClick={() => editEmployee(employee)}
>
  ✏️ Edit
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;