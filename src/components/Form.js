import React from 'react';

export default function Form(props){
    // props expected
    const { name, email, role } = props;

    return (
        <form className='form container'>
            <div className='form-group inputs'>
                <label>Name
                    <input
                        name='name'
                        type='text'
                        placeholder='Type your name here'
                        maxLength='30'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>Email
                    <input
                        name='email'
                        type='email'
                        placeholder='email me'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>

                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>-- Select a Role --</option>
                        <option value='frontEnd'>Front end dev</option>
                        <option value='backEnd'>Back end dev</option>
                        <option value='dataSci'>Data Science</option>
                    </select>
                </label>

                <div className='submit'>
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}