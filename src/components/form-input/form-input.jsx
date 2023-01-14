const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group relative m-[45px 0] ">
          <input
          {...otherProps}
            className="form-input bg-mainClr b-none text-[18px] p-[10px 10px 10px 5px] block w-[100%] rounded-md border-b-[1px subClr] m-[25px 0] focus:outline-none "   
          />
        { label && (
            <label
            className={
             `${otherProps.value.length 
                 ? 'shrink' : ''} 
                 form-input-label text-subClr text-[16px] font-normal absolute left-[5px] top-[10px] transition-[ease all delay-300ms] focus:outline-0 shrink hover:shrink-110 hover:text-slate-900 transform duration-200 hover:scale-110 `
                }>
                 {label}
            </label>
             )}
                
        </div>
    );
};


export default FormInput;