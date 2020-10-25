import React , {useState , useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import actions from '../../actions/auth';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import buttonsObj from '../../components/button';
import authenticateUser from '../../utils/login-page-handlers';
import handleChange from '../../utils/handleChange';

const {SubmitButton} = buttonsObj;

const {login} = actions;
const initialState = {
    name: '',
    password: ''
}

const LoginPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [state , setState] = useState(initialState);
    const {name , password} = state;


    useEffect(() => {
        document.title = 'Login'
    });

    return (
        <PageWrapper>
            <Form>
                <Label>
                    Name:
                    <Input value={name} onChange={e => handleChange(e , state , setState , 'name')}/>
                </Label>

                <Label>
                    Password:
                    <Input type="password" value={password} onChange={e => handleChange(e , state , setState , 'password')}/>
                </Label>


                <SubmitButton onClick={ e => {authenticateUser(e , history, dispatch, login , name , password)}}>
                    Login
                </SubmitButton>

            </Form>
        </PageWrapper>
    )

};

export default LoginPage;
