import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";

const EnableUserTable = () => {
    const [tableData, setTableData] = useState([
        {
          employeename: "Alice Smith",
          employeecode: "E67890",
          branchname: "Branch B",
          branchcode: "B1234",
          departmentname: "Department Y",
          departmentcode: "D5432",
          phone: "987-654-3210",
          address: "456 Oak St",
          email: "alice.smith@example.com",
          supervisorcode: "S54321",
          rolename: "UAM_Creator",
          ticket: "123456",
        },
        {
          employeename: "Bob Johnson",
          employeecode: "E54321",
          branchname: "Branch C",
          branchcode: "B9876",
          departmentname: "Department Z",
          departmentcode: "D6543",
          phone: "345-678-9012",
          address: "789 Pine St",
          email: "bob.johnson@example.com",
          supervisorcode: "S87654",
          rolename: "UAM_Admin",
          ticket: "456789",
        },
        {
          employeename: "Eva Brown",
          employeecode: "E23456",
          branchname: "Branch D",
          branchcode: "B2345",
          departmentname: "Department W",
          departmentcode: "D8765",
          phone: "567-890-1234",
          address: "890 Cedar St",
          email: "eva.brown@example.com",
          supervisorcode: "S34567",
          rolename: "UAM_Manager",
          ticket: "789012",
        },
        {
          employeename: "Charlie White",
          employeecode: "E78901",
          branchname: "Branch E",
          branchcode: "B5678",
          departmentname: "Department V",
          departmentcode: "D2345",
          phone: "678-901-2345",
          address: "901 Maple St",
          email: "charlie.white@example.com",
          supervisorcode: "S23456",
          rolename: "UAM_Analyst",
          ticket: "890123",
        },
        {
          employeename: "Grace Black",
          employeecode: "E34567",
          branchname: "Branch F",
          branchcode: "B3456",
          departmentname: "Department U",
          departmentcode: "D5678",
          phone: "789-012-3456",
          address: "012 Elm St",
          email: "grace.black@example.com",
          supervisorcode: "S45678",
          rolename: "UAM_Specialist",
          ticket: "901234",
        },
        {
          employeename: "David Green",
          employeecode: "E01234",
          branchname: "Branch G",
          branchcode: "B8765",
          departmentname: "Department T",
          departmentcode: "D6789",
          phone: "890-123-4567",
          address: "234 Birch St",
          email: "david.green@example.com",
          supervisorcode: "S56789",
          rolename: "UAM_Coordinator",
          ticket: "012345",
        },                    
        // Add more dummy data as needed
      ]);
  return (
    <div>
            <div className="table-container">
        <h2>User List</h2>

        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Employee Code</th>
              <th>Branch Name</th>
              <th>Branch Code</th>
              <th>Department Name</th>
              <th>Department Code</th>
              <th>Mobile No</th>
              <th>Address</th>
              <th>Email</th>
              <th>Ticket No</th>
              <th>Lock</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over tableData to render rows */}
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.employeename}</td>
                <td>{data.employeecode}</td>
                <td>{data.branchname}</td>
                <td>{data.branchcode}</td>
                <td>{data.departmentname}</td>
                <td>{data.departmentcode}</td>
                <td>{data.phone}</td>
                <td>{data.address}</td>
                <td>{data.email}</td>
                <td>{data.ticket}</td>
                <td
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "0.7rem",
                  }}
                >
                  <button class="btn">Revoke</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EnableUserTable
