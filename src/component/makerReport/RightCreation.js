import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import DeleteConfirmationPopup from "./DeleteConfirmationPopup"; // Import the new component
import { MdModeEditOutline } from "react-icons/md";
import ViewDetailsPopup from "./ViewDetailsPopup";

const RightCreation = () => {
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
    ticket: "",
  });

  // State variable for table data
  const [tableData, setTableData] = useState([
      {
        "Right_id": 1,
        "role_name": "UAM_Maker",
        "Right_name": "CreateUser"
      },
      {
        "Right_id": 2,
        "role_name": "UAM_Creator",
        "Right_name": "EditUser"
      },
      {
        "Right_id": 3,
        "role_name": "UAM_Administrator",
        "Right_name": "ManageUser"
      }
    ]   );

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
      ticket: "",
    });

    setItemToEdit(null);
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
        <div class="title">
          {itemToEdit !== null ? "Update" : ""} Right Creation
        </div>
        <div class="content role-content">
          <form onSubmit={handleMakerForm}>
            <div
              class="user-details"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30rem",
                height: "15rem",
              }}
            >
              {/* First row */}
              <div style={{ display: "flex", marginBottom: "1rem" }}>
                <div class="input-box" style={{ marginRight: "1rem" }}>
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
                <div class="input-box">
                  <span class="details">
                    Right Name <span class="star">*</span>
                  </span>
                  <input
                    type="text"
                    name="departmentname"
                    value={formData.departmentname}
                    onChange={handleInputChange}
                    placeholder="Enter Right Name"
                    required
                  />
                </div>
              </div>

              {/* Second row */}
              <div class="input-box">
                <span class="details">
                  Description <span class="star">*</span>
                </span>
                <textarea
                  type="text"
                  name="departmentname"
                  value={formData.departmentname}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                  required
                  style={{ height: "5rem", width: "25rem" }}
                />
              </div>
            </div>

            <div class="button">
              <input
                type="submit"
                value={itemToEdit !== null ? "Update" : "Submit"}
              />
            </div>
          </form>
        </div>
      </div>

      <div className="table-container right-table-container">
        <h2>Right Creation Table</h2>

        <table>
          <thead>
            <tr>
              <th>Right Id</th>
              <th>Role Name</th>
              <th>Right Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over tableData to render rows */}
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.Right_id}</td>
                <td>{data.role_name}</td>
                <td>{data.Right_name}</td>
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
                  <MdModeEditOutline onClick={() => handleEditClick(index)} />
                  <FaEye onClick={() => handleViewClick(index)} />
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

export default RightCreation;
