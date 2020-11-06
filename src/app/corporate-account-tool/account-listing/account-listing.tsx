import './account-listing.scss';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAccountDetail} from '../../../store/slice/account.slice';

function AccountListing() {
    const {accounts, filterName} = useSelector((state: any) => state.account);
    const dispatch = useDispatch();

    const gotoAccountDetail = (item: any) => {
        dispatch(getAccountDetail(item));
    };

    return (
        <>
            <div className='account-listing'>

                <p className='search-message' >Showing {accounts?.length} search results for <b>{filterName}</b> </p>
                <table>
                    <thead>
                    <tr>
                        <th>Corporate Account ID</th>
                        <th>Corporate Account Name</th>
                        <th>Partner Label ID</th>
                        <th>Level</th>
                        <th>Currency</th>
                        <th>Email Address</th>
                        <th>Account Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {accounts?.map((item: any, index: number) => (
                        <tr key={index} onClick={() => gotoAccountDetail(item)}>
                            <td>{item?.id}</td>
                            <td>{item?.name}</td>
                            <td>{item?.partnerLabelId}</td>
                            <td>{item?.level}</td>
                            <td>{item?.currency}</td>
                            <td>{item?.email}</td>
                            <td className={item?.status === 'ACTIVE' ? 'active' : ''}> {item?.status} </td>
                        </tr>
                    ))}
                    {!accounts?.length &&
                    <tr>
                        <td colSpan={7} className='no-record-found'>
                            No Record Found
                        </td>
                    </tr>
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AccountListing;
