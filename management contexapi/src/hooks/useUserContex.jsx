import React, { useContext } from 'react'
import { UsersContext } from '../components/context/UsersContext'

export const useUserContex = () => {
  return useContext(UsersContext)
}
