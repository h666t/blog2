import {GetServerSideProps, NextPage} from 'next';
import React, {useState} from 'react';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (props) => {
  return {
    props: {}
  };
};

type FormData = {
  username?: string,
  password?: string
}

const SignIn: NextPage = () => {
  let form: Required<FormData> = {
    username: '',
    password: ''
  };
  let [errorString, setErrorString] = useState('');
  const changeFormData = (formData: FormData) => {
    form = {
      ...form,
      ...formData
    };
  };
  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    // if (!form.username || !form.password) {
    //   setErrorString(oldValue => '缺少用户名/密码')
    //   return;
    // }
    axios.post("/api/v1/sessions", form).then((res)=>{

    })
  };
  return <>
    <form onSubmit={submitForm}>
      <div>
        <div>用户名</div>
        <input onChange={event => changeFormData({username: event.target.value})} type="text"/>
        <div>密码</div>
        <input onChange={event => changeFormData({password: event.target.value})} type="password"/>
        {errorString ? <div>{errorString}</div> : ''}
      </div>
      <button type={'submit'}>确认</button>
      <hr/>
    </form>
  </>;
};

export default SignIn;
