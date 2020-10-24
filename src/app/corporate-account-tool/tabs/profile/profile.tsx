import React, { useState } from 'react';
import './profile.scss';
import {useSelector} from 'react-redux';
import Select from 'react-select';
import { Button } from 'react-bootstrap';

function Profile() {
    const {accountDetail} = useSelector((state: any) => state.account);
    const [isViewMode, setViewMode] = useState(true);

    const listStatus = [
        { value: 'Pending', label: 'Pending Verification' },
        { value: 'Verified', label: 'Verified' },
        { value: 'Inactive', label: 'Inactive' },
        { value: 'Closed', label: 'Closed' }
    ];

    const currencies = [
        { value: 'GPG', label: 'GPG' },
        { value: 'VND', label: 'VND' },
        { value: 'USD', label: 'USD' },
    ];

    const countries = [
        { value: 'uk', label: 'United Kingdom' },
        { value: 'vn', label: 'Viet Nam' },
        { value: 'us', label: 'United states' },
    ];

    const languages = [
        { value: 'uk', label: 'English' },
        { value: 'vn', label: 'Viet Nam' },
        { value: 'fr', label: 'France' },
    ];



    const onEdit = () => {
        setViewMode(false);
    };

    return (
        <>
            <div className='profile'>
                <table>
                    <thead>
                    <tr>
                        <th colSpan={3}>CORPORATE PROFILE {accountDetail?.id}</th>
                        <th>
                            <Button onClick={onEdit} className='edit-action'>Edit</Button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Account Name</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.name}/></td>
                            <td>Account ID</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.id}/></td>
                        </tr>
                        <tr>
                            <td>Partner Label ID</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.partnerLabelId}/></td>
                            <td>Level</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.level}/></td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td><Select isDisabled={isViewMode} options={listStatus} defaultValue={listStatus[0]} name='listStatus' /></td>
                            <td>Language</td>
                            <td><Select isDisabled={isViewMode} ptions={languages} defaultValue={languages[0]} /></td>
                        </tr>
                        <tr>
                            <td>License</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.license}/></td>
                            <td>Email Address</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.email}/></td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td><Select isDisabled={isViewMode} options={currencies} defaultValue={currencies[0]} /></td>
                            <td>Phone</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.phoneNumber}/></td>
                        </tr>
                        <tr>
                            <td>Credit Account</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.credit}/></td>
                            <td>Mobile</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.mobile}/></td>
                        </tr>
                        <tr>
                            <td>Credit Limit</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.creditLimit}/></td>
                            <td>username</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.userName}/></td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.address}/></td>
                            <td>Password</td>
                            <td><input type='password' disabled={isViewMode} defaultValue={accountDetail?.password}/></td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.city}/></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td><Select isDisabled={isViewMode} options={countries} defaultValue={countries[0]} /></td>
                            <td>Questionnaire Receipt Date</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.questionnaireReceiptDate}/></td>
                        </tr>
                        <tr>
                            <td>Postal Code</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.postalCode}/></td>
                            <td>Account Approval Date</td>
                            <td><input type='text' disabled={isViewMode} defaultValue={accountDetail?.approvedDate}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Profile;
