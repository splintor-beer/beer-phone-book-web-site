import React, { ReactElement, useEffect, useState } from 'react'
import Link from 'next/link'
import { parseAuthCookies, setAuthCookies } from '../utils/cookies'
import { logToGTM } from './App'
import { TitleLink } from './TitleLink'

export function AccountBadge(): ReactElement {
  const [authTitle, setAuthTitle] = useState('')
  useEffect(() => {
    const { authTitle } = parseAuthCookies()
    setAuthTitle(authTitle)
  }, [])

  return authTitle && <div className="account">
    <button onClick={() => location.href = '/new_page'}>הוסף דף חדש</button>{' '}
    מחובר כ
    <TitleLink title={authTitle}/> (
    <Link href="/">
      <a onClick={() => {
        setAuthCookies('', '')
        logToGTM({ event: 'logout', authTitle })
      }}>התנתק</a>
    </Link>
    )
  </div>
}
