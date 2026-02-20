import type { JSX } from "react"
// import "./UserDashboard.css"

export default function UserDashboard(): JSX.Element {
    return (
        // p-12 text-[1.1rem] w-7xl mx-auto
        <section className="flex flex-col text-[1.1rem] w-7xl mx-auto">
            <div className="bg-[#fae4c7] flex flex-col p-12 text-[1.1rem]">
                <h2 className="mb-4 text-[2.5rem] font-bold">Welcome Username!</h2>
                <div className="flex justify-between items-center py-4">
                    <div>
                        <div className="flex justify-between items-center gap-20">
                            <p>Income last <span className="text-[#434343] font-semibold underline">0 days</span></p>
                            <p className="text-[2rem] font-bold"><strong>$0.00</strong></p>
                        </div>
                        <div className="flex justify-between items-center gap-20">
                            <p>Balance</p>
                            <p className="text-[2rem] font-bold"><strong>$0.00</strong></p>
                        </div>
                    </div>
                    <p>Detials</p>
                </div>
            </div>

            <div className="flex justify-between items-center p-12 bg-[#ffd9a8] text-[1.1rem]">
                <div>
                    <p className="mb-[0.3rem] text-[1.6rem] font-medium">Your Average Review</p>
                    <p>⭐⭐⭐⭐⭐ </p>
                </div>
                <p>Detials</p>
            </div>

            <div className="flex flex-col bg-white m-8 w-[30%] self-center p-8 rounded-lg border border-[#161616]">
                <h3 className="mb-[0.8rem] text-[1.3rem] font-medium">Add or Withdraw Money</h3>
                <div>
                    <label className="inline-flex gap-1" htmlFor="deposit">
                        Deposit
                        <input className="mr-[1.1rem]" type="radio" name="money-action" id="deposit" />
                    </label>
                    <label className="inline-flex gap-1" htmlFor="withdraw">
                        Withdraw
                        <input type="radio" name="money-action" id="withdraw" />
                    </label>
                </div>
                {/* <label htmlFor="enter-amount" hidden >Amount</label> */}
                <input className="my-[0.8rem] py-[0.7rem] px-[0.9rem] border border-[#323232] rounded-sm" type="number" id="enter-amount" placeholder="2000" />
                <button className="button" type="submit">Complete Transaction</button>
            </div>

            <p className="text-red-500 text-center p-[0.7rem]">You are not currently renting any vans</p>
        </section >
    )
}