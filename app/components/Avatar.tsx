'use client';

import Image from "next/image";

const Avatar = () => {
    return (
        <Image
            alt="Avatar"
            className="rounded-full"
            height="30"
            width="30"
            src="/images/placeholder.png"
        />
    )
}
export default Avatar;