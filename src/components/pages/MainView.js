import React from 'react';
import SharePrototypeForm from '../modules/SharePrototypeForm';
import SharePrototypeSecondForm from '../modules/SharePrototypeForm';

const MainView = () => {
    return (
        <div>
            <h2>Compartir Prototipo</h2>
            <div className="form-wrapper w-form">
                <SharePrototypeForm />
            </div>
        </div>
    );
};

export default MainView;
