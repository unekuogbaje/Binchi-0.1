const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group relative m-[45px 0] ">
            <input
                className="form-input bg-white b-none text-[18px] p-[10px 10px 10px 5px] block w-[100%] rounded-none border-b-[1px subClr] m-[25px 0] focus:outline-none "
                {...otherProps}
            />
        { label && (
            <label
            className={
                `${otherProps.value.length 
                    ? 'shrink' : 'top-[-14px] text-[12px] text-mainClr'} 
                    form-input-label text-subClr text-[16px] font-normal absolute left-[5px] top-[10px] transition-[ease all delay-300ms]  `
                }>
                    {label}
                    </label>
                )}
                
        </div>
    );
};


export default FormInput;