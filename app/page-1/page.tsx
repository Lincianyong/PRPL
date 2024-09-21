import Image from "next/image"

export default function TestPage () {
    return (
        <div>
            Page 1
            <Image 
            src="/logos/diatect.png"
            height={500}
            width={500}
            alt="logo"
            />
        </div>
    )
}