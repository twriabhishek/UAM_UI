import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import DeleteConfirmationPopup from "./DeleteConfirmationPopup"; // Import the new component
import { MdModeEditOutline } from "react-icons/md";
import ViewDetailsPopup from "./ViewDetailsPopup";

const Configuration = () => {
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
        login_attempt: 2,
        dormant_days: 20,
      }
      ,
      {
        login_attempt: 4,
        dormant_days: 60,
      }
      ,
      {
        login_attempt: 1,
        dormant_days: 15,
      }
      ,
      {
        login_attempt: 2,
        dormant_days: 20,
      }      
      ,
      {
        login_attempt: 3,
        dormant_days: 30,
      }
      ,
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
          {itemToEdit !== null ? "Update" : ""} Configuration
        </div>
        <div class="content role-content">
          <form onSubmit={handleMakerForm}>
            <div class="user-details">
              <div class="input-box">
                <span class="details">
                  Max Login Attempt <span class="star">*</span>
                </span>
                <input
                  type="text"
                  name="departmentname"
                  value={formData.departmentname}
                  onChange={handleInputChange}
                  placeholder="Enter Max Login Attempt"
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">
                  Dormat Days <span class="star">*</span>
                </span>
                <input
                  type="text"
                  name="departmentname"
                  value={formData.departmentname}
                  onChange={handleInputChange}
                  placeholder="Enter Dormat days"
                  required
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

      <div className="table-container configuration-table-container">
        <h2>Configuration Table</h2>

        <table>
          <thead>
            <tr>
              <th>Login Attempt</th>
              <th>Dormat days</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Map over tableData to render rows */}
            {tableData.map((data, index) => (
              <tr key={index}>
                <td>{data.login_attempt}</td>
                <td>{data.dormant_days}</td>
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

export default Configuration;