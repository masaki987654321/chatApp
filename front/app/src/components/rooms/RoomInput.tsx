import React, {Component} from 'react';

import RoomButton from './RoomButton';
import TextField from '@material-ui/core/TextField';
import '../../styles/TextInput.css';

type textInputProps = {
    roomReducer: {
        room: any[],
        rooms: any,
        text: string,
        value: string,
    },
    roomActions: {
        change: (value: string) => string,
        postRoom: (value: string) => any,
        getRooms: () => any,
        add: (newRoom: any[]) => any[],
    },
}
class RoomInput extends Component<textInputProps> {
    render () {
        return (
            <React.Fragment>
                <form className="wrap" noValidate autoComplete="off">
                    <TextField
                        id="standard-text"
                        label='トークルーム名を入力'
                        className="text"
                        margin="normal"
                        value={this.props.roomReducer.value}
                        onChange={e => this.props.roomActions.change(e.target.value)}
                    />

                    <RoomButton
                        onClick={this.props.roomActions.postRoom}
                        value={this.props.roomReducer.value}
                    />
                </form>
            </React.Fragment>
        )
    }
}

export default RoomInput;