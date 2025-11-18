export const TextField = ({label,id,...props}) => {
    return (
        <fieldset>
            <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
            <input id={id} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all" {...props} />
        </fieldset>
    )
}