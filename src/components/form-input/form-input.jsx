const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group relative ">
          <input
          {...otherProps}
            className="form-input bg-white b-none text-[18px] px-2.5 py-0.5 block w-full rounded-sm border-blue-300 border-2 mx-6 focus:outline-none "   
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