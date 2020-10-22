import React , {useState , useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import actions from '../../actions/auth';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import buttonsObj from '../../components/button';

const {SubmitButton} = buttonsObj;

const {login , logout} = actions;
const initialState = {
    name: '',
    password: ''
}

const LoginPage = () => {

    const history = useHistory();
    const [state , setState] = useState(initialState);
    const {name , password} = state;

    const dispatch = useDispatch();

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

function handleChange(e , state , setState , property) {

    const value = e.target.value;

    const newState = {[property]: value};

    return setState({...state , ...newState});

};

async function authenticateUser (event , history, dispatch, login , name , password) {

    event.preventDefault()

    const url = 'http://localhost:9999/api/user/login';
    const data = {name , password};

    const headerObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const promise = await fetch(url , headerObj);
    
    if (promise.status === 200) {

        const token = promise.headers.get('Authorization');

        document.cookie = `oreo=${token}`;
    
        const response = await promise.json();
        dispatch(login(response));

        history.push('/')
    }
}

export default LoginPage;
