import React from 'react';
import Navbar from '../modules/Navbar';
import DepartureForm from '../modules/DepartureForm';
import NoteForm from '../modules/NoteForm';
import FutureForm from '../modules/FutureForm';

const DocumentEditor = ({match}) => {
    const prototype = match.params.name;
    const section = match.params.section;
    const file = match.params.file || '';
    const path = match.params.section + '/' + file;
    let form = null;

    if (section === 'departure') {
        form = <DepartureForm prototype={prototype} section={section} path={path}/>
    } else if (section === 'prototyping') {
        form = <NoteForm prototype={prototype} section={section} path={path}/>
    } else if (section === 'future') {
        form = <FutureForm prototype={prototype} section={section} path={path}/>
    }

    return (
        <div>
            <Navbar match={match} />
            <div className="section form">
                <div className="w-container">
                    {form}
                </div>
            </div>
        </div>
    );
};

export default DocumentEditor;