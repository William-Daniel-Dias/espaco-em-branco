export const Button = ({children,...props}) => {
    return (
        <button
        className="px-6 py-2.5 cursor-pointer bg-slate-900 text-neutral-50 rounded-lg hover:bg-slate-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        {...props}
        >
            {children}
        </button>
    )
}