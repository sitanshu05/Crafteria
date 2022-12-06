import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Subtitle from '../../components/Subtitle/Subtitle'
import AccountDetailsField from '../../components/AccountDetailsField/AccountDetailsField'

const styles = {
    accountDetails : "bg-bg_home p-[2rem] w-[100%] flex flex-col gap-16",

}

function Account() {
  return (
    <div>
        <Navbar />
        <Subtitle
            text = "Account Details"
        />
        <div className={styles.accountDetails}>
            <AccountDetailsField
                label = "Username"
                value = "usernamehere"
            />
            <AccountDetailsField
                label = "Email"
                value = "abc@gmail.com"
            />
            <AccountDetailsField
                label = "Name"
                value = "abc@gmail.namehere"
            />
        </div>
        <Subtitle
            text = "Orders"
        />

    </div>
  )
}

export default Account