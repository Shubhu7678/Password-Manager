import React from 'react'
import styled from 'styled-components'
import PasswordForm from './PasswordForm'
import PasswordList from './PasswordList'

const PassManager = () => {
  return (
    <PassManagerWrapper>
     <div className="password-container w-full bg-gradient-to-br from-white to-green-200"> 
       <div className="w-full">
          <PasswordForm/>
       </div>
       <div>
          <PasswordList/>
       </div>
       </div>
    </PassManagerWrapper>
  )
}

const PassManagerWrapper = styled.div`
  
.password-container{
  height: calc(100vh - 40px);
}
`

export default PassManager