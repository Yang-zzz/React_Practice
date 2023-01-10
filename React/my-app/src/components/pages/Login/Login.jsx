import React from 'react'
import TextFiled from '../../input/TextFiled'
import LoginWrappe from './styled'
import Label from '../../input/Label'

const Login = () => {
  return (
    <LoginWrappe>
      <Label>이메일</Label>
      <TextFiled />
      <Label>패스워드</Label>
      <TextFiled />
    </LoginWrappe>
  )
}

export default Login
