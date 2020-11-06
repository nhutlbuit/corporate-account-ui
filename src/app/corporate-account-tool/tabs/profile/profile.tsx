import React, {FunctionComponent, lazy, ReactElement, useEffect, useState} from 'react';
import './profile.scss';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {format} from 'date-fns';
import ModalYesNo from '../../../shared/model-yes-no/model-yes-no';
import {getAccountDetail, saveAccount} from '../../../../store/slice/account.slice';
import Spinner from '../../../shared/spinner/spinner';
import _ from 'lodash';

const AddEditProfile = lazy(() => import('./add-edit-profile/add-edit-profile'));

const Profile: FunctionComponent = (): ReactElement => {

    const {accountDetail, isUpdateAccount} = useSelector((state: any) => state.account);
    const [isEdit, setEdit] = useState(false);
    const [isCreateParentAccount, setCreateParentAccount] = useState(false);
    const dispatch = useDispatch();

    const createAccountLv3 = (): void => {
        const accountLevel3 = {...accountDetail, id: generateAccountId(6), statusAccount: 'verified', level: 'Level 3', 'parentId': accountDetail.id};
        dispatch(saveAccount(accountLevel3));
        setCreateParentAccount(false);
    };

    useEffect(() => {
        if (isUpdateAccount) {
            dispatch(getAccountDetail(accountDetail));
        }
    }, [isUpdateAccount]);

    const generateAccountId = (n: number): number => {
        return Math.floor(Math.random() * (9 * (Math.pow(10, n)))) + (Math.pow(10, n));
    };

    const renderProfileDetail = (): JSX.Element => {
        return (
                <div className='profile'>
                    <div className='profile-info'>
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
                                <td><input type='password' value={accountDetail?.password} disabled={true}/></td>
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

                    <div className='product-access'>
                        <table>
                            <thead>
                            <tr>
                                <th colSpan={4}> Product Access</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                   <div className='inline'>
                                       <div className='type-product'>Deposits</div>
                                       <div>{accountDetail?.deposits}</div>
                                   </div>
                                </td>
                                <td>
                                    <div className='inline'>
                                        <div className='type-product'>Withdrawals</div>
                                        <div>{accountDetail?.withdrawals}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='inline'>
                                        <div className='type-product'>Casino</div>
                                        <div>{accountDetail?.casino}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='inline'>
                                        <div className='type-product'>Sportsbook</div>
                                        <div>{accountDetail?.sportsbook}</div>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/*Account being displayed is a Level 2 account AND does not have a Level 3 parent account (See Create Parent Account).*/}
                    {/*Account Status is not Inactive or Closed.*/}
                    {/*License is NOT Malta*/}

                    { (!accountDetail?.parentId || accountDetail?.parentId === 0)
                        && accountDetail?.level === 'Level 2'
                        && ['verified', 'pending'].includes(accountDetail?.statusAccount)
                        && accountDetail.license !== 'Malta' &&
                        <Button variant='primary' className='create-parent-account' onClick={() => setCreateParentAccount(true)}>
                            CREATE PARENT ACCOUNT (LEVEL 3)
                        </Button>
                    }
                </div>
        );
    };

    return (
        <> { _.isEmpty(accountDetail) ?
            <Spinner/>
            :
            <>
                { isEdit &&
                    <AddEditProfile
                        accountDetail={accountDetail}
                        onClosePopup={() => setEdit(false)}
                    />
                }

                { isCreateParentAccount &&
                    <ModalYesNo
                        onNo={() => setCreateParentAccount(false)}
                        onYes={createAccountLv3}
                        title={ 'Confirm Message!'}
                        message='This will create a parent Level 3 account. Are you sure you wish to continue?'
                    />
                }

                {renderProfileDetail()}
            </>
        }
        </>
    );

};

export default Profile;
