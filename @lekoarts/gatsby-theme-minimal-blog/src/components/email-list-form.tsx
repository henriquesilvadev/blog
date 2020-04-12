import addToMailchimp from 'gatsby-plugin-mailchimp';
import React, { useState } from 'react'
import Title from "./title"
import useSiteMetadata from "../hooks/use-site-metadata"

const EmailListForm: React.FunctionComponent<{}> = () => {

  const [email, setEmail] = useState('');
  const { siteUrl } = useSiteMetadata()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        window.location.href = [siteUrl, 'subscribe'].join('/')
      })
      .catch((error: Error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <div style={{marginTop: '50px'}}>
      <Title text="Newsletter"></Title>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Endereço de e-mail"
            name="EMAIL"
            type="text"
            required
            onChange={handleEmailChange}
          />
          <button style={{ backgroundColor: '#000', width: '20%', color: '#fff' }} type="submit">Assine</button>
        </div>
      </form>
    </div>
  );
};

export default EmailListForm;