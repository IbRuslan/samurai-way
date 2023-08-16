import React from 'react';

type StatusAboutMeType = {
    status: string
}

export class StatusAboutMe extends React.Component<StatusAboutMeType> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        let {status} = this.props;
        return (
            <div>
                {
                    !this.state.editMode
                        ? <span onDoubleClick={this.activateEditMode} >{status}</span>
                        : <input value={status} onBlur={this.deactivateEditMode} autoFocus/>
                }
            </div>
        );
    }
}