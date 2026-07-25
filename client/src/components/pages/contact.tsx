import { Alert, AlertProps, Button, Container, Divider, TextareaAutosize, TextField, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import { validate } from 'email-validator';
import { ApiClient } from '../../lib/apiClient.ts';
 
interface FeedbackOptions {
    message: string;
    severity: AlertProps['severity']
}

export const Contact: React.FC = () => {
    const [replyTo,setReplyTo] = useState<string>('');
    const [message,setMessage] = useState<string>('');
    const [feedbackOptions,setFeedbackOptions] = useState<FeedbackOptions|null>(null);
    const [isLoading,setIsLoading] = useState<boolean>(false);

    const theme = useTheme();

    const canSubmit = replyTo.length > 0 && message.length > 0;

    const onInputChanged = (value: string, method: (val: string) => void) => {
        setFeedbackOptions(null);
        method(value);
    }

    const submit = async () => {
        setIsLoading(true);
        if(!validate(replyTo)) {
            setFeedbackOptions({ message: "The provided email is not valid. Please enter a valid email.", severity: "error" });
            setIsLoading(false);
            return;
        }
        const success = await new ApiClient().submitContactRequest(message, replyTo);
        if(success) {
            setFeedbackOptions({ message: "Your message was successfully sent.", severity: "success" });
        }
        else {
            setFeedbackOptions({ message: "Your message was unable to be sent. Please try again at a later time.", severity: "error" });
        }
        setReplyTo('');
        setMessage('');
        setIsLoading(false);
    }

    return(
        <Container fixed>
            <Typography variant='h3' sx={ { width: '100%', textAlign: 'center' } }>Contact Us</Typography>
            <Divider sx={ { my: 4 } } />
            <Typography variant='body1' sx={ { width: '100%', textAlign: 'justify', mb: 2 } }>
                Have a questions about one of our apps or want to provide feedback? Submit a message below with your email so we can get back to you. Please note that all messages will be screened prior to delivery for final review. 
            </Typography>
            <Divider sx={ { my: 4 } } />
            { feedbackOptions && <Alert sx={ { mb: 2 } } severity={feedbackOptions.severity}>{ feedbackOptions.message }</Alert> }
            <Typography variant='caption' display='block' mb={2}>Email</Typography>
            <TextField
                type='email'
                label="Reply Email"
                value={replyTo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChanged(e.target.value, setReplyTo)}
                sx={ { mb: 2 } } />
            <Typography variant='caption' display='block' mb={2}>Message</Typography>
            <TextareaAutosize minRows={3} style={ { width: '100%', marginBottom: theme.spacing(2) } } placeholder="Enter your message here. HTML is not supported." value={message} onChange={(e) => onInputChanged(e.target.value, setMessage)} />
            <Button loading={isLoading} disabled={!canSubmit || isLoading} variant='outlined' onClick={() => canSubmit && submit()}>Submit</Button>
        </Container>
    )
}