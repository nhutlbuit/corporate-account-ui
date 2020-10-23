import React from 'react';
import './profile.scss';
import {useSelector} from "react-redux";
import Select from "react-select";

function Profile() {
    const {accountDetail} = useSelector((state: any) => state.account);
    const options = [
        { value: 'chocolate', label: 'Corporate Account ID' },
        { value: 'strawberry', label: 'Corporate Account Name' },
        { value: 'vanilla', label: 'Partner Label ID' }
    ]
    const listStatus = [
        { value: 'Pending', label: 'Pending Verification' },
        { value: 'Verified', label: 'Verified' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'Closed', label: 'Closed' }
    ]
    const currencies = [
        { value: 'GPG', label: 'GPG' },
        { value: 'VND', label: 'VND' },
        { value: 'USD', label: 'USD' },
    ]
    const countries = [
        { value: 'uk', label: 'United Kingdom' },
        { value: 'vn', label: 'Viet Nam' },
        { value: 'us', label: 'United states' },
    ]
    const languages = [
        { value: 'uk', label: 'English' },
        { value: 'vn', label: 'Viet Nam' },
        { value: 'fr', label: 'France' },
    ]



    const handleCommentTypeSelected = () => {

    }

    return (
        <>
            <div className="profile">
                <table>
                    <thead>
                    <tr>
                        <th colSpan={4}>CORPORATE PROFILE {accountDetail?.id}</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Account Name</td>
                            <td><input type="text" /></td>
                            <td>Account ID</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Partner Label ID</td>
                            <td><input type="text" /></td>
                            <td>Level</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td><Select options={listStatus} defaultValue={listStatus[0]} name="listStatus" /></td>
                            <td>Language</td>
                            <td><Select options={languages} defaultValue={languages[0]} /></td>
                        </tr>
                        <tr>
                            <td>License</td>
                            <td><input type="text" /></td>
                            <td>Email Address</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td><Select options={currencies} defaultValue={currencies[0]} /></td>
                            <td>Phone</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Credit Account</td>
                            <td><input type="text" /></td>
                            <td>Mobile</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Credit Limit</td>
                            <td><input type="text" /></td>
                            <td>username</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td><input type="text" /></td>
                            <td>Password</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input type="text" /></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td><Select options={countries} defaultValue={countries[0]} /></td>
                            <td>Questionnaire Receipt Date</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>Postal Code</td>
                            <td><input type="text" /></td>
                            <td>Account Approval Date</td>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Profile;