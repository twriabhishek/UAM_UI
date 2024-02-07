import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import DeleteConfirmationPopup from "./DeleteConfirmationPopup"; // Import the new component
import { MdModeEditOutline } from "react-icons/md";
import ViewDetailsPopup from "./ViewDetailsPopup";

const MakerReportForm = () => {
  // State variables for form data
  const [formData, setFormData] = useState({
    email: "",
    employeename: "",
    employeecode: "",
    branchname: "",
    branchcode: "",
    departmentname: "",
    departmentcode: "",
    rolename: "",
    phone: "",
    address: "",
    supervisorcode: "",
    ticket:"",
  });

  // State variable for table data
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

  // State variable for confirmation popup visibility
  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);

  // State variable to store the index of the item to be deleted
  const [itemToDelete, setItemToDelete] = useState(null);

  // State variable to store the index of the item to be updated
  const [itemToEdit, setItemToEdit] = useState(null);

  // State variable for view details popup visibility
  const [isViewPopupVisible, setViewPopupVisible] = useState(false);

  // State variable to store the details of the selected item
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleMakerForm = (e) => {
    e.preventDefault();
    console.log("Hello");

    // Update the tableData state with the new form data
    setTableData([...tableData, formData]);

    // Clear the form data after submission
    setFormData({
      email: "",
      employeename: "",
      employeecode: "",
      branchname: "",
      branchcode: "",
      departmentname: "",
      departmentcode: "",
      rolename: "",
      rolecode: "",
      phone: "",
      address: "",
      supervisorcode: "",
      ticket:""
    });

    setItemToEdit(null)

  };

  // Function to handle delete icon click
  const handleDeleteClick = (index) => {
    console.log("Hello", index);
    setItemToDelete(index);
    setDeletePopupVisible(true);
  };

  // Function to handle delete confirmation
  const handleDeleteConfirmation = () => {
    // Perform delete action using itemToDelete index
    const updatedTableData = [...tableData];
    updatedTableData.splice(itemToDelete, 1);
    setTableData(updatedTableData);

    // Close the confirmation popup
    setDeletePopupVisible(false);
  };

  // Function to close the confirmation popup
  const handleCloseDeletePopup = () => {
    setDeletePopupVisible(false);
  };

  // Function to handle edit icon click
  const handleEditClick = (index) => {
    // Set the index to edit
    setItemToEdit(index);

    // Populate the form data with the values from the selected item
    const item = tableData[index];
    setFormData({ ...item });
  };

  // Function to handle view details icon click
  const handleViewClick = (index) => {
    // Set the details of the selected item
    setSelectedItemDetails(tableData[index]);

    // Toggle the visibility of the view details popup
    setViewPopupVisible(!isViewPopupVisible);
  };

  return (
    <div className="container-fluid">
      <div>
        <div class="title">{itemToEdit !== null ? "Update" : ""} User Registration</div>
        <div class="content">
          <form onSubmit={handleMakerForm}>
            <div class="user-details">
              <div class="input-box">
                <span class="details">
                  Employee Name <span class="star">*</span>
                </span>
                <input
                  type="text"
                  name="employeename"
                  value={formData.employeename}
                  onChange={handleInputChange}
                  placeholder="Enter Employee Name"
                  required
                />
              </div>

              <div class="input-box">
                <span class="details">
                  Employee Code <span class="star">*</span>
                </span>
                <input
                  type="text"
                  name="employeecode"
                  value={formData.employeecode}
                  onChange={handleInputChange}
                  placeholder="Enter Employee Code"
                  required
                />
              </div>

              <div class="input-box">
                <span class="details">
                  Branch Name <span class="star">*</span>
                </span>
                <input
                  type="text"
                  name="branchname"
                  value={formData.branchname}
                  onChange={handleInputChange}
                  placeholder="Enter Branch Name"
                  required
                />
              </div>

              <div class="input-box">
                <span class="details">
                  Branch Code <span class="star">*</span>
                </span>
                <input
                  type="text"
                  name="branchcode"
                  value={formData.branchcode}
                  onChange={handleInputChange}
                  placeholder="Enter Branch Code"
                  required
                />
              </div>

              <div class="input-box">
                <span class="details">
                  Department Name <span class="star">*</span>
                </span>
                <input
                  type="text"
                  name="departmentname"
                  value={formData.departmentname}
                  onChange={handleInputChange}
                  placeholder="Enter Department Name"
                  required
                />
              </div>

              <div class="input-box">
                <span class="details">
                  Department Code <span class="star">*</span>
                </span>
                <input
                  type="text"
                  name="departmentcode"
                  value={formData.departmentcode}
                  onChange={handleInputChange}
                  placeholder="Enter Department Code"
                  required
                />
              </div>

              <div class="input-box">
                <span class="details">Mobile No </span>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter Phone No"
                />
              </div>

              <div class="input-box">
                <span class="details">Address </span>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Enter Address"
                />
              </div>
              <div class="input-box">
                <span class="details">
                  Email 
                </span>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div class="input-box">
                <span class="details">Supervisor code </span>
                <input
                  type="text"
                  name="supervisorcode"
                  value={formData.supervisorcode}
                  onChange={handleInputChange}
                  placeholder="Enter Supervisor Code"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Ticket No </span>
                <input
                  type="text"
                  name="ticket"
                  value={formData.ticket}
                  onChange={handleInputChange}
                  placeholder="Enter Ticket Code"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  Role Name <span class="star">*</span>
                </span>
                <select
                  name="rolename"
                  value={formData.rolename}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Role</option>
                  <option value="UAM_Maker">UAM_Maker</option>
                  <option value="UAM_Creator">UAM_Creator</option>
                </select>
              </div>
            </div>

            <div class="button">
              <input type="submit" value={itemToEdit !== null ? "Update" : "Register"} />
            </div>
          </form>
        </div>
      </div>

      <div className="table-container">
        <h2>User Table</h2>

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
              <th>Actions</th>
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
                  <input type="checkbox" id="scales" name="scales" />
                  <MdDelete onClick={() => handleDeleteClick(index)} />
                  <MdModeEditOutline  onClick={() => handleEditClick(index)}/>
                  <FaEye onClick={() => handleViewClick(index)}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {/* Display the delete confirmation popup if it's visible */}
        {isDeletePopupVisible && (
          <DeleteConfirmationPopup
            onClose={handleCloseDeletePopup}
            onConfirm={handleDeleteConfirmation}
          />
        )}
        {/* Use the ViewDetailsPopup component */}
        <ViewDetailsPopup
          isVisible={isViewPopupVisible}
          onClose={() => setViewPopupVisible(false)}
          selectedItemDetails={selectedItemDetails}
        />
      </div>
    </div>
  );
};

export default MakerReportForm;
