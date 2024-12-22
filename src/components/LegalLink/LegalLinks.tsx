import React from 'react';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal';
import TermsConditions from './TermsConditions';
import CancellationAndRefundPolicy from './PrivacyPolicy';

const LegalLinks: React.FC = () => {
    const {
        isOpen: isPrivacyOpen,
        openModal: openPrivacy,
        closeModal: closePrivacy
    } = useModal();

    const {
        isOpen: isTermsOpen,
        openModal: openTerms,
        closeModal: closeTerms
    } = useModal();

    return (
        <div className="text-sm text-gray-400">
            <span>©️ 2024 DecodingBollywoodHits website. All rights reserved. </span>
            <button
                onClick={openTerms}
                className="underline hover:text-gray-200 ml-2"
            >
                Terms & Conditions
            </button>
            <span className="mx-2">•</span>
            <button
                onClick={openPrivacy}
                className="underline hover:text-gray-200"
            >
                Cancellation And Refund Policy
            </button>

            <Modal isOpen={isTermsOpen} onClose={closeTerms} title="Terms & Conditions">
                <TermsConditions />
            </Modal>

            <Modal isOpen={isPrivacyOpen} onClose={closePrivacy} title="Privacy Policy">
                <CancellationAndRefundPolicy />
            </Modal>
        </div>
    );
};

export default LegalLinks;