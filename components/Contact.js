import styles from "../styles/Form.module.scss"

const Contact = () => {
    return (
     <div className={styles.contact__form}>
     <form
       className={styles.form}
       name='contact-us'
       method='POST'
       data-netlify='true'
       data-netlify-honeypot='bot-field'>
       <input
         type='text'
         placeholder='Company Name'
         name='Company'
         required
       />
       <input
         type='text'
         placeholder='Name'
         name='Name'
         required
       />
       <input type='email' name='email' placeholder='Email' required />
       <input type='tel' placeholder='Phone Number' name='PhoneNumber' />
       <textarea name='Message' rows='10' placeholder='Message' required />
       <input type='hidden' name='form-name' value='contact-us' />
       <button type='submit' className={styles.button}>Contact Us <span className={styles.arrow}>&#9656;</span></button>
     </form>
     </div>
    )
}

export default Contact