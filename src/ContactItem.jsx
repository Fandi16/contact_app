import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './components/DeleteButton';
    
function ContactItem({ imageUrl, name, tag, alamat, onDelete, id }) {
    return (
    <div className="contact-item">
        <ContactItemImage imageUrl={imageUrl} />
        <ContactItemBody name={ name } tag={ tag } alamat={ alamat } />
        <DeleteButton id={id} onDelete={onDelete} />
    </div>
    );
}
    
export default ContactItem;