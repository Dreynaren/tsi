import React from 'react'

export const Login = () => {
  return (
    <>
        <h1>Введите данные</h1>
        <label htmlFor = '1'>Логин</label>
        <input type='text' id='1' name = '1'></input> {" "}
        <label htmlFor = '2'>Пароль</label>
        <input type='password' id = '2' name = '2'></input>
        <input type='submit'></input>
    </>
  )
}