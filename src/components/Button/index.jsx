export const Button = ({children,...props}) => {
    return (
        <button
        className="px-10 py-2 cursor-pointer bg-slate-950 text-neutral-50 rounded-lg hover:bg-slate-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        {...props}
        >
            {children}
        </button>
    )
}