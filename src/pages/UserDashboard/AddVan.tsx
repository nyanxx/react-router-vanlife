import type { JSX } from "react"
export default function AddVan(): JSX.Element {
    const inputStyle = `py-[0.7rem] px-[0.8rem] rounded-[5px] border border-[#161616]`

    return (
        <section className="p-12 text-[1.1rem] w-7xl mx-auto">
            <div className="flex flex-col justify-center min-w-80 max-w-100 gap-4 bg-white border rounded-lg p-4 mx-auto">
                <h2 className="text-center text-[1.7rem] mb-[-0.7rem] font-medium">Add Van</h2>
                <input className={inputStyle} type="text" name="add-van-name" id="add-van-name" placeholder="Eco Macha" />
                <input className={inputStyle} type="number" name="idk" id="idk" placeholder="200" />
                <textarea className={inputStyle} name="add-van-description" id="add-van-description" placeholder="The nature lorem is rem sudo pen..." rows={2}></textarea>
                <input className={inputStyle} type="url" name="add-van-image-url" id="add-van-image-url" placeholder="https://vanimage.com/image/12" />
                <input className={inputStyle} type="text" name="add-van-type" id="add-van-type" placeholder="eco" />
                <input className={inputStyle} type="number" name="add-van-price" id="add-van-price" placeholder="30" />
                <button className="button" type="submit">
                    Add your van
                </button>
            </div>
        </section>
    )
}