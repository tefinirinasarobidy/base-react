import axios from 'axios';
import React, { useState } from 'react'
import config from '../../config/config';
import Update from '../update/Update';

export default function Liste({index,elemnt,removeInListe,modifierListe}) {

  function modifier(form,closemodal) {
    axios.put(config.baseUrl +'api/listes/update/' + form.id, form).then(res => {
      console.log('res',res);
      closemodal.current.click()
      modifierListe(form)
    })
  }
  return (
    <tr key={index}>
      <td>{elemnt.firstname}</td>
      <td>{elemnt.lastname}</td>
      <td>{elemnt.username}</td>
      <td>{elemnt.email}</td>
      <td>{elemnt.addres}</td>
      <td>
        <button type="button" className="btn btn-success button" data-bs-toggle="modal" data-bs-target="#modification">Modifier</button>
        <Update modifier={modifier} update={elemnt} />
        <button type="button" className="btn btn-danger" onClick={() => removeInListe(index,elemnt)}>Supprimer</button>
      </td>
      
    </tr>
  
  )
}
