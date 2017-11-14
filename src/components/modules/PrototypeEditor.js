import React from 'react'
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror'
import { options, menu } from '@aeaton/react-prosemirror-config-default'
 
const PrototypeEditor = ({ value, onChange }) => (
  <HtmlEditor
    options={options}
    value={value}
    onChange={onChange}
    render={({ editor, state, dispatch }) => (
        <div>
            <h2>Prototipos</h2>
            <div className="w-container"> 
                <MenuBar menu={menu} state={state} dispatch={dispatch}/>
                {editor}
            </div>
        </div>
    )}
  />
)
 
export default PrototypeEditor

