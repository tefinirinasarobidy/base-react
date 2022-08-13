import React, { useEffect, useRef, useState } from 'react'

export default function Update({modifier,update}) {
    const [state,setState] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        addres: ''
    });
    const closeModal = useRef()
    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    useEffect(() => {
      setState(update)
    }, [update])
    
  return (
    <div className="modal fade" id="modification" tabIndex="-1" aria-labelledby="modificationLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-body">
                <div className="myform ">
                    <h1 className="text-center">Login Form</h1>
                    <form className='container' role="form">
                        <div className="mb-3 mt-4 form-group">
                            <label  className="form-label">Firstname</label>
                            <input type="text" name="firstname" onChange={handleInput}  value={state.firstname} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3 form-group">
                            <label  className="form-label">Lastname</label>
                            <input type="text" name="lastname" onChange={handleInput} value={state.lastname} className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-group">
                            <label  className="form-label">Username</label>
                            <input type="text" name="username" onChange={handleInput} value={state.username}  className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-group">
                            <label  className="form-label">Email</label>
                            <input type="email" name="email" onChange={handleInput} value={state.email}  className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-group">
                            <label  className="form-label">Addres</label>
                            <input type="text" name="addres" onChange={handleInput} value={state.addres}  className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-group butt">
                            <button ref={closeModal} type="button" className="btn btn-default" data-bs-dismiss="modal" aria-label="Close">Fermer</button>
                            <button type="button" className="btn btn-primary" onClick={() => modifier(state,closeModal)}>Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
