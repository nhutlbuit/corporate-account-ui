import React, {lazy, useState} from 'react';
import './profile.scss';
import {useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {format} from 'date-fns';

const AddEditProfile = lazy(() => import('./add-edit-profile/add-edit-profile'));

function Profile() {
    const {accountDetail} = useSelector((state: any) => state.account);
    const [isEdit, setEdit] = useState(false);

    return (
        <>
            {isEdit && <AddEditProfile accountDetail={accountDetail} closeAddEditProfilePopup={(isClose: boolean) => setEdit(isClose)}/>}
            <div className='profile'>
                <table>
                    <thead>
                    <tr>
                        <th colSpan={3}>CORPORATE PROFILE {accountDetail?.id}</th>
                        <th>
                            <Button onClick={() => setEdit(true)} className='edit-action'>
                                <FontAwesomeIcon icon={faPencilAlt}/> Edit
                            </Button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Account Name</td>
                        <td>{accountDetail?.name}</td>
                        <td>Account ID</td>
                        <td>{accountDetail?.id} </td>
                    </tr>
                    <tr>
                        <td>Partner Label ID</td>
                        <td>{accountDetail?.partnerLabelId}</td>
                        <td>Level</td>
                        <td>{accountDetail?.level}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td className={accountDetail?.statusAccount === 'verified' ? 'status-account' : ''}>{accountDetail?.statusAccount}</td>
                        <td>Language</td>
                        <td>{accountDetail?.language}</td>
                    </tr>
                    <tr>
                        <td>License</td>
                        <td>{accountDetail?.license}</td>
                        <td>Email Address</td>
                        <td>{accountDetail?.email}</td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td>{accountDetail?.currency}</td>
                        <td>Phone</td>
                        <td>{accountDetail?.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Credit Account</td>
                        <td>{accountDetail?.credit}</td>
                        <td>Mobile</td>
                        <td>{accountDetail?.mobile}</td>
                    </tr>
                    <tr>
                        <td>Credit Limit</td>
                        <td>{accountDetail?.creditLimit}</td>
                        <td>username</td>
                        <td>{accountDetail?.userName}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{accountDetail?.address}</td>
                        <td>Password</td>
                        <td><input type='password' value={accountDetail?.password} disabled={true} /></td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{accountDetail?.city}</td>
                        <td/>
                        <td/>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>{accountDetail?.country}</td>
                        <td>Questionnaire Receipt Date</td>
                        <td>{accountDetail?.questionnaireReceiptDate && format(accountDetail?.questionnaireReceiptDate, 'dd MMM yyyy')}</td>
                    </tr>
                    <tr>
                        <td>Postal Code</td>
                        <td>{accountDetail?.postalCode}</td>
                        <td>Account Approval Date</td>
                        <td>{accountDetail?.approvedDate && format(accountDetail?.approvedDate, 'dd MMM yyyy')}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Profile;
