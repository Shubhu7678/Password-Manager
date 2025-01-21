import { MdEditSquare } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deleteCredentailsData, getCredentialsById } from "../../services/operations/CredentialsApi";
import { setEditCredential, setCurrentCredential, setAllCredentials } from "../../slices/passwordSlice";


const PasswordList = ({ reset }) => {

    const { allCredentials, currentCredential } = useSelector((state) => state.password);
    const dispatch = useDispatch();

    const hideCredentialPassword = (password) => {
        let hiddenPassword = '';
        for (let i = 0; i < password.length; i++) {
            hiddenPassword += '*';
        }
        return hiddenPassword;
    }

    const handleEditCredentials = async (credentialId) => {

        if (credentialId === currentCredential?._id) {

            dispatch(setEditCredential(false));
            dispatch(setCurrentCredential([]));
            reset();
        } else {


            try {

                const result = await getCredentialsById(credentialId);
                if (result) {

                    dispatch(setEditCredential(true));
                    dispatch(setCurrentCredential(result));
                }

            } catch (error) {

                console.log("Error occured : ", error);
            }
        }
    }

    const handleDeleteCredentials = async (credentialId) => {

        try {

            const result = await deleteCredentailsData(credentialId);
            if (result) {

                dispatch(setAllCredentials(
                    allCredentials.filter((credential) => credential._id !== credentialId)
                ));
            }

        } catch (error) {

            console.log("Error occured : ", error);
        }
    }

    return (
        <div>
            <table className="w-full">
                <thead className="bg-green-700 ">
                    <tr>
                        <th className="border-b-2 px-4 text-gray-300">URL</th>
                        <th className="border-b-2 px-4 text-gray-300">Username</th>
                        <th className="border-b-2 px-4 text-gray-300">Password</th>
                        <th className="border-b-2 px-4 text-gray-300">Action</th>

                    </tr>
                </thead>
                <tbody className="bg-green-200">
                    {allCredentials.length > 0 && allCredentials.map((credentials, index) => (
                        <tr key={index}>
                            <td className="px-4 py-2 text-center">{credentials?.url}</td>
                            <td className="px-4 py-2 text-center">{credentials?.username}</td>
                            <td className="px-4 py-2 text-center">{hideCredentialPassword(credentials?.password)}</td>
                            <td className="px-4 py-2 text-center">
                                <div className="flex gap-2 items-center justify-center">
                                    <button onClick={() => handleEditCredentials(credentials?._id)} className="bg-green-600 text-white px-2 py-1 rounded-md"><MdEditSquare /></button>
                                    <button onClick={() => handleDeleteCredentials(credentials?._id)} className="bg-red-600 text-white px-2 py-1 rounded-md"><FaTrashAlt /></button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PasswordList