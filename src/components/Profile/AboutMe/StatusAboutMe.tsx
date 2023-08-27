import React, {ChangeEvent} from 'react';

type StatusAboutMeType = {
    status: string
    updateStatus: (newStatus: string) => any
}

export class StatusAboutMe extends React.Component<StatusAboutMeType> {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }
    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<StatusAboutMeType>, prevState: Readonly<{}>, snapshot?: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        let {status} = this.props;
        return (
            <div>
                {
                    !this.state.editMode
                        ? <span onDoubleClick={this.activateEditMode} >{ !status ? 'О себе: ' : `O себе: ${status}`}</span>
                        : <input value={this.state.status} onBlur={this.deactivateEditMode} onChange={this.onChangeStatusHandler} autoFocus placeholder={'о себе'}/>
                }
            </div>
        );
    }
}