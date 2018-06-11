import {Link} from 'react-router-dom';
import {Button} from "@blueprintjs/core";
import * as React from "react";

interface FormTitleProps {
    content: string
}

class FormTitle extends React.Component<FormTitleProps, {}> {
    render () {
        return(
            <h4 className="h4-form-title">this.props.content</h4>
        )
    }
}

export { FormTitle }