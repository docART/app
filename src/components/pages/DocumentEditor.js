import React from 'react';
import Header from '../modules/Navbar';
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
        form = <DepartureForm prototype={prototype} path={path}/>
    } else if (section === 'prototyping') {
        form = <NoteForm prototype={prototype} path={path}/>
    } else if (section === 'future') {
        form = <FutureForm prototype={prototype} path={path}/>
    }

    return (
        <div>
            <Header match={match} />
            <div class="section form">
                <div class="w-container">
                    {form}
                </div>
            </div>
        </div>
    );
};

export default DocumentEditor;
