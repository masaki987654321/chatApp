import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

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

// todo 引数にprops
function SendButton() {
    const classes = useStyles();

    return (
        <Button 
            variant="contained"
            color="primary"
            className={classes.button}
            // onClick={() => props.onClick(props.value, props.image)}
        >
            <Icon>send</Icon>
        </Button>
    );
}

export default SendButton;