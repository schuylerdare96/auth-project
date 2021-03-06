import { Navigate } from 'react-router-dom';
import { Button } from '../styles/button';
import { Input } from '../styles/input';
import { API } from '../url';

const Signup = ({ setAuthenticated }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDetails = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      password: e.target[3].value,
      dob: e.target[4].value,
    };
    try {
      const response = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDetails),
      });
      if (response.status.match(/20[01]/)) {
        setAuthenticated(true);
        Navigate('/home');
      }
    } catch (err) {
      console.log('', err);
    }
  };

  return (
    <div className='center'>
      <form onSubmit={handleSubmit} className='auth-form'>
        <h3>Sign up</h3>
        <label htmlFor='name'>Name</label>
        <Input type='text' id='name' />
        <label htmlFor='email'>Email</label>
        <Input type='email' id='email' />
        <label htmlFor='phno'>Phone number</label>
        <Input type='tel' id='phno' />
        <label htmlFor='password'>Password</label>
        <Input type='password' id='password' />
        <label htmlFor='dob'>Date of birth</label>
        <Input type='date' id='dob' />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default Signup;
