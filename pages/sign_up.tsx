import {NextPage} from 'next';
import {useState} from 'react';
import axios from 'axios';
import {data} from 'browserslist';

type FormData = {
  username: string;
  password: string;
  passwordForConfirm: string;
}

const SignUp: NextPage = () => {
  let [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    passwordForConfirm: ''
  })
  let [signUpResult, setSignUpResult] = useState("")
  const changeFormData = (info: Partial<FormData>) => {
    setFormData( (value) => {
      return {
        ... value,
        ...info
      }
    })
  }
  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    axios.post('/api/v1/user', formData).then((res)=>{
      setSignUpResult(res.data)
    }, (err)=>{
      setSignUpResult(err.response.data);
    })
  }
  return <>
    <div>
      {JSON.stringify(formData)}
      <form onSubmit={submitForm}>
        <div>
          <div>用户名</div>
          <input onChange={event => changeFormData({username: event.target.value})} type="text"/>
          <div>密码</div>
          <input onChange={event => changeFormData({password: event.target.value})} type="password"/>
          <div>确认密码</div>
          <input onChange={event => changeFormData({passwordForConfirm: event.target.value})} type="password"/>
        </div>
        <button type={'submit'}>提交</button>
        <hr/>
        <div>{signUpResult}</div>
      </form>
    </div>
  </>
}

export default SignUp
