
import { useAccounts } from "../../../../../store/auth/hooks"

export default function More(){

const accounts=useAccounts()    

    return(
        <div>
            {accounts.map(account=>(
                <button key={account.fullName} className="py-3 px-4 flex text-left">
<img src={account.avatar} className="w-10 flex-shrink-0 h-10 rounded-full" alt=""/>
					<div className="mx-3">
						<h6 className="font-bold leading-[1.25rem]">{account.fullName}</h6>
						<div className="text-[color:var(--color-base-secondary)]">
							@{account.username}
						</div>
          </div> 
                </button>
            ))}
        </div>
    )
}