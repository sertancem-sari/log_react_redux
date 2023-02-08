import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const date = new Date()
  const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)
  return (
    <section className="welcome">

            <p>{today}</p>

            <h1>Hoşgeldiniz!</h1>

            <p><Link to="/dash/logs">Logları görüntüle</Link></p>
            <p><Link to="/dash/users">Kullanıcı ayarları</Link></p>

            <p><Link to="/dash/users/new">Yeni Kullanıcı Ekle</Link></p>

        </section>
  )
}

export default Main