import React from 'react';
import uuid from 'uuid/v1';
import Header from '../modules/Header';
import DepartureForm from '../modules/DepartureForm';
import SlowWizard from '../modules/SlowWizard';
import FutureForm from '../modules/FutureForm';

const DocumentEditor = ({match}) => {
    const prototype = match.params.name;
    const section = match.params.section;
    const file = match.params.file || uuid() + '.json';
    const path = match.params.section + '/' + file;
    let form = null;

    if (section === 'departure') {
        form = <DepartureForm prototype={prototype} section={section} path={path}/>
    } else if (section === 'prototyping') {
        form = <SlowWizard prototype={prototype} section={section} path={path}/>
    } else if (section === 'future') {
        form = <FutureForm prototype={prototype} section={section} path={path}/>
    }

    return (
        <div>
            <Header match={match} />
            {form}
        </div>
    );
};

export default DocumentEditor;
