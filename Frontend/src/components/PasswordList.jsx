import React, { useEffect } from "react";
import styled from "styled-components";
import { FiEdit2 } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import axios from "axios";

const PasswordList = () => {
  useEffect(() => {
    const fetchPasswordsData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8080/api/user/user-list"
        );

        console.log("result", result);
      } catch (error) {
        console.log("Error occured :", error);
      }
    };

    fetchPasswordsData();
  }, []);

  return (
    <PasswordListWrapper>
      <div className="w-[80%] mx-auto py-4">
        <div className="password-title">Your Passwords</div>
        <div className="password-list">
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Username</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>https://google.com</td>
                <td>google</td>
                <td>123456</td>
                <td>
                  <div className="action-icons">
                    <FiEdit2 className="edit-icon" />
                    <FaRegTrashCan className="delete-icon" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PasswordListWrapper>
  );
};

const PasswordListWrapper = styled.div`
  .password-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  th,
  td {
    padding: 12px 16px; /* ✅ Padding */
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #228b22;
    color: #fff;
  }
  .action-icons {
    display: flex;
    gap: 16px;
    color: #228b22;
  }
  .edit-icon,
  .delete-icon {
    cursor: pointer;
  }
`;

export default PasswordList;
