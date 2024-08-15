import React from 'react';
import { Modal } from 'antd';
import { Link } from 'react-router-dom';

function PaymentPopup({ open, onClose, onPaymentMethodSelect }) {
    return (
        <Modal
            title="Trip Payment"
            open={open}
            onCancel={onClose}
            footer={null}
        >
            <div className="flex flex-col items-center justify-center gap-4">
                <div className='flex flex-col mb-[50px] gap-[10px] items-center justify-center'>

                    <h4 className='text-lg font-normal leading-[22px]'>
                        Your seat has been reserved for 10 mins
                    </h4>
                    <div className="text-lg font-regular font-poppins text-black p-2 rounded-md w-auto h-auto">
                        Amount
                    </div>

                    <div className="w-[302px] h-[60px] bg-[#ffffff] text-orange-500 text-2xl font-bold font-poppins flex items-center justify-center rounded-lg border-[#FDB64E]">
                        #600
                    </div>

                    <div className='flex w-[300px] items-center justify-center'>
                        <Link to="#" onClick={() => onPaymentMethodSelect('/pay.png')}>
                            <img src="/pay.png" alt="Pay" />
                        </Link>
                    </div>
                    <button
                        className="w-[200px] h-[50px] bg-[#ffffff] text-orange-500 text-2xl font-bold font-poppins flex items-center justify-center rounded-lg border-[#FDB64E]"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default PaymentPopup;
