import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    leftIcon: {
        marginRight: theme.spacing(1),
    },
    iconSmall: {
        fontSize: 20,
    },
    }));

// todo eventの型　any 使わない
type messageButtonProps = {
    value: string,
    room_id: string,
    onClick: any,
}

function MessageButton(props: messageButtonProps) {
    const classes = useStyles();
    console.log(props);

    return (
        <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => props.onClick(props.room_id, props.value)}
        >create</Button>
    );
}

export default MessageButton;