import styles from '../styles/Contact.module.scss'

const Contact = () => {
	return (
		<div>
			<h2>contact page</h2>
			<form
				name='contact-us'
				method='POST'
				data-netlify='true'
				data-netlify-honeypot='bot-field'>
				<input
					type='text'
					placeholder='Name'
					name='Name'
					required
				/>
				<input type='email' name='email' placeholder='Email' required />
				<input type='tel' placeholder='Phone' name='Phone' />
				<textarea name='Message' rows='10' placeholder='Message' required />
				<input type='hidden' name='form-name' value='contact-us' />
				<button type='submit'>Submit</button>
			</form>
		</div>
	)
}

export default Contact
