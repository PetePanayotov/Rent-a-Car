import React , {useState ,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper';
import Form from '../../components/form';
import Label from '../../components/label';
import Input from '../../components/input';
import buttonsObj from '../../components/button';

const {SubmitButton} = buttonsObj;


const initialState = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rePassword: '',
};

const RegisterPage = () => {

    const [state , setState] = useState(initialState);
    const history = useHistory();

    useEffect(() => {
        document.title = 'Register'
    });

    const {name , email , phone , password , rePassword} = state;

    return (
        <PageWrapper>
            <Form>
                <Label>
                    Name:
                    <Input value={name} onChange={e => handleChange(e , state , setState , 'name')}/>
                </Label>

                <Label>
                    Email:
                    <Input type="email" value={email} onChange={e => handleChange(e , state , setState , 'email')}/>
                </Label>

                <Label>
                    Phone:
                    <Input value={phone} onChange={e => handleChange(e , state , setState , 'phone')}/>
                </Label>

                <Label>
                    Password:
                    
                    <Input type="password" value={password} onChange={e => handleChange(e , state , setState , 'password')}/>
                </Label>

                <Label>
                    Repeat Password:
                    <Input type="password" value={rePassword} onChange={e => handleChange(e , state , setState , 'rePassword')}/>
                </Label>

                <SubmitButton onClick={e => registerUser(e , state , history)}>
                    Register
                </SubmitButton>

            </Form>
        </PageWrapper>
    )

};

function handleChange(event , state , setState , property) {

    const value = event.target.value;
    const newState = {[property]: value};

    setState({...state , ...newState})

};

async function registerUser(e , state , history) {

    e.preventDefault();

    const data = {...state};
    
    const headerObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    const url = 'http://localhost:9999/api/user/register';

    try {
        
        const promise = await fetch(url , headerObj);

        if (promise.status === 200) {
            history.push('/login')
        }else {
            throw new Error();
        }

    } catch (error) {
        console.error('Something went wrong')
    };
};

export default RegisterPage;