import React , {useEffect} from 'react';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import Button from '../../components/button';

const LoginPage = () => {

    useEffect(() => {
        document.title = 'Login'
    });

    return (
        <PageWrapper>
            <Form>
                <Label>
                    Username:
                    <Input/>
                </Label>

                <Label>
                    Password:
                    <Input/>
                </Label>


                <Button>
                    Login
                </Button>

            </Form>
        </PageWrapper>
    )

};

export default LoginPage;
