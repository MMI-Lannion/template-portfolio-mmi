import clsx from 'clsx'


export default function Badge({ label, bgColor, fgColor, filled }) {
    if (filled === true) {
        return (
            <span className={clsx(["inline-flex items-center rounded-md ring-1 ring-inset ring-slate-100",
                "px-3 py-1 text-xs font-medium",
                bgColor,
                fgColor
            ])}>
                {label}
            </span>
        )
    }
    else {
        return (
            <span className={clsx(["inline-flex items-center rounded-md",
                "p-1 text-xs font-medium",
                "bg-slate-50 text-slate-900",
            ])}>
                <i className={'w-3 h-3 mr-1 rounded-badge ' + bgColor }></i>
                {label}
            </span>
        )
    }
}