import './inputtext.css'

export const InputTextField = ({title, placeholder, type = 'text', value, setValue}) => {
    return(
        <div className='input-container'>
            <h5 className='position-relative fw-bold mb-3'>
                {title}
            </h5>
            <div 
            className="rounded-pill border input-text-field-container d-flex justify-content-center">
                <input 
                className='input-field'
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(e.target.value)}
                type={type}
                />
            </div>
        </div>
    )
}