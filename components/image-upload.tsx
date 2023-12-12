"use client";

import { useEffect, useState } from "react";
import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
    value: string;
    onChange: (src: string) => void;
    disabled?: boolean;
}

export const ImageUpload = ({
    value,
    onChange,
    disabled
}: ImageUploadProps) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    // Your actual component content goes here
    return (
        <div className="space-y-4 w-full flex flx-col justify-center items-center">
            <CldUploadButton
                onUpload={(result: any) => onChange(result.info.secure_url)}
                options={{
                    maxFiles: 1
                }}
                uploadPreset="cabfi6ix"
            >
                <div className="p-4 border-4 border-primary/10 rounded-lg hover: opacity-75 transition flex flex-col space-y-2 items-center justify-center">
                    <div className="relative h-40 w-40">
                        <Image
                            fill
                            alt="Upload"
                            src="/placeholder.svg"
                            className="rounded-lg object-cover" />

                    </div>
                </div>

            </CldUploadButton>
            {/* Your image upload component content */}
            {/* Make sure to use the `value`, `onChange`, and `disabled` props */}
        </div>
    );
};
