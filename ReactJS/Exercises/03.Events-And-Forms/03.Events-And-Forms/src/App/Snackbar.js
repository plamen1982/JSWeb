import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2
    }
});

class ConsecutiveSnackbars extends React.Component {
    queue = [];

    state = {
        open: false,
        messageInfo: {}
    };

    handleClick = message => () => {
        this.queue.push({
            message,
            key: new Date().getTime()
        });

        if (this.state.open) {
            // immediately begin dismissing current message
            // to start showing new one
            this.setState({ open: false });
        } else {
            this.processQueue();
        }
    };

    processQueue = () => {
        if (this.queue.length > 0) {
            this.setState({
                messageInfo: this.queue.shift(),
                open: true
            });
        }
    };

    handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        this.setState({ open: false });
    };

    handleExited = () => {
        this.processQueue();
    };

    

    render() {
        const { classes, message, variant } = this.props;
        const { messageInfo } = this.state;
        return (
            <div>
                <Snackbar

                    variant={variant}
                    key={messageInfo.key}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left"
                    }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    onExited={this.handleExited}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    message={<span id="message-id">{message}</span>}
                    action={[
                        <Button
                            key="undo"
                            color="secondary"
                            size="small"
                            onClick={this.handleClose}
                        >
                            UNDO
                        </Button>,
                        <IconButton
                            variant={variant}
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </div>
        );
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.isSnackOpen && !nextState.open) {
            if (nextState.open === this.state.open) {
                this.setState({
                    open: true
                });
            }
        }

        return true;
    }
}

ConsecutiveSnackbars.propTypes = {
    classes: PropTypes.object.isRequired,
    isSnackOpen: PropTypes.bool
};

export default withStyles(styles)(ConsecutiveSnackbars);
